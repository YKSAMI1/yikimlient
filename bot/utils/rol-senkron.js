// ROL BİLDİRİMİ — "Yol Silindiri" rolünün verilip/alınmasını güvenlik API'sine yazar.
//
// BUNUN DIŞINDA HİÇBİR ŞEY YAPMAZ:
//   ✘ üye taraması yapmaz (açılışta/periyodik "tüm üyeler" taraması YOK —
//     456 üyeliğe her 10 dakikada members.fetch() atmak Discord'u rate-limit'e
//     sokuyor ve her üye için API'ye yazmak yerel API'yi düşürüyordu),
//   ✘ rol kararı vermez, karar orijinal sistemin: eventler/guildMemberUpdate.js.
//   ✔ YALNIZCA rol gerçekten değiştiğinde, o tek kullanıcı için API'ye bildirir.
//
// Karar mekanizması (etiket varsa rol, etiket yoksa rol yok, hoşgeldin/veda
// mesajları) eventler/guildMemberUpdate.js içindedir ve özel sistemdir —
// burada ona DOKUNULMAZ.

const api = require('./api');

/** Rol durumunu API'ye yaz; değişmediyse çağrılmaz (gereksiz yazmayı önler). */
async function rolDurumuBildir(discordId, rolVar, db, logger) {
  if (!discordId) return;
  if (!api.hazirMi()) {
    // API anahtarı tanımlı değilse botun işleyişi bozulmasın: sessizce geç.
    return;
  }

  const anahtar = `rol.${discordId}`;
  const onceki = db.get(anahtar);
  if (onceki === rolVar) return; // değişmedi → yazma

  try {
    const sonuc = await api.rolGuncelle({ discordId, rolYol: rolVar });
    if (sonuc.ok) db.set(anahtar, rolVar);
    else if (logger) logger.warn(`Rol güncellenemedi (${discordId}): ${sonuc.hata || sonuc.durum}`);
  } catch (error) {
    if (logger) logger.warn(`Rol güncellenemedi (${discordId}): ${error.message}`);
  }
}

module.exports = { rolDurumuBildir };
