// ROL SENKRONU — "Yol Silindiri" rolü ↔ güvenlik API.
//
// Launcher'ın çizme kapısı (HD fotoğraf, maske, katalog seçimi) API'deki
// rol bilgisine bakar. Rol bir kez yazıldıktan sonra oyuncu Discord'da
// etiketi bırakabilir; bu durum API'ye İLETİLMİŞSE launcher izni geri
// çeker. Aşağıdaki iki yardımcı bunu sağlar:
//
//   1) rolDurumuBildir  — tek kullanıcı, rol değişince (guildMemberUpdate)
//   2) rolDurumlariniSenkron — bot açılışında TÜM üyeler (rol verilmiş ama
//      hiç bildirilmemiş, rol kaldırılmış olabilir)

const api = require('./api');

/** Rol durumunu API'ye yaz; değişmediyse çağrılmaz. */
async function rolDurumuBildir(discordId, rolVar, db, logger) {
  if (!api.hazirMi()) return;
  const anahtar = `rol.${discordId}`;
  const onceki = db.get(anahtar);
  if (onceki === rolVar) return;
  try {
    const sonuc = await api.rolGuncelle({ discordId, rolYol: rolVar });
    if (sonuc.ok) db.set(anahtar, rolVar);
    else if (logger) logger.warn(`Rol güncellenemedi (${discordId}): ${sonuc.hata || sonuc.durum}`);
  } catch (error) {
    if (logger) logger.warn(`Rol güncellenemedi (${discordId}): ${error.message}`);
  }
}

/**
 * Bot açılışında sunucudaki TÜM üyelerin rol durumunu API'ye yaz.
 * `db` içindeki `rol.<id>` kaydı ile karşılaştırır — böylece gereksiz yazma
 * olmaz, bot her açılışta API'yi doğru duruma getirir.
 */
async function rolDurumlariniSenkron(client, db, logger, config, rolId) {
  if (!api.hazirMi()) {
    if (logger) logger.warn('YIKIM_BOT_ANAHTARI yok - rol senkronu atlandı.');
    return;
  }
  let guild;
  try {
    guild = await client.guilds.fetch(config.guild.id);
  } catch (error) {
    logger.error(`Sunucu okunamadı: ${error.message}`);
    return;
  }

  let uyeler;
  try {
    uyeler = await guild.members.fetch();
  } catch (error) {
    logger.error(`Üyeler okunamadı: ${error.message}`);
    return;
  }

  let gonderilen = 0;
  let duzeltilen = 0;
  for (const [, uye] of uyeler) {
    if (uye.user?.bot) continue;

    let rolVar = rolId ? uye.roles.cache.has(rolId) : false;

    // AÇILIŞ ONARIMI: Discord üye listesinde etiket bilgisi (`primaryGuild`)
    // geldiyse rolü etikete göre düzelt. Bot kapalıyken etiket bırakılmış
    // olabilir; bu durumda rol açılışta kaldırılır. Bilgi YOKSA dokunulmaz —
    // REST yanıtı bu alanı her zaman içermeyebilir.
    if (rolId && uye.user && 'primaryGuild' in uye.user) {
      const pg = uye.user.primaryGuild;
      const etiketVar = !!(pg && String(pg.identityGuildId || '') === String(config.guild.id));
      if (etiketVar !== rolVar) {
        try {
          if (etiketVar) {
            await uye.roles.add(rolId, 'YIKIM etiketi (açılış senkronu)');
          } else {
            await uye.roles.remove(rolId, 'YIKIM etiketi yok (açılış senkronu)');
          }
          rolVar = etiketVar;
          duzeltilen += 1;
          if (logger) {
            logger.info(`Açılışta rol düzeltildi: ${uye.user.tag} → ${etiketVar ? 'verildi' : 'kaldırıldı'}`);
          }
        } catch (error) {
          if (logger) logger.warn(`Rol düzeltilemedi (${uye.user.tag}): ${error.message}`);
        }
      }
    }

    const anahtar = `rol.${uye.id}`;
    if (db.get(anahtar) === rolVar) continue;
    await rolDurumuBildir(uye.id, rolVar, db, logger);
    gonderilen += 1;
  }
  if (logger) {
    logger.info(
      `Rol senkronu tamamlandı: ${gonderilen} kullanıcı API'ye yazıldı, ` +
        `${duzeltilen} rol etikete göre düzeltildi.`,
    );
  }
}

module.exports = { rolDurumuBildir, rolDurumlariniSenkron };
