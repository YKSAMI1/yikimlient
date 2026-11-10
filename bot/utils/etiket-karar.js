// ETİKET ↔ ROL KARARI — saf fonksiyon (test edilebilir).
//
// Discord, bir üyenin profili değişince `GUILD_MEMBER_UPDATE` ham olayı yayar.
// Olayın içindeki `user.primary_guild.identity_guild_id`, oyuncunun HANGİ
// sunucunun etiketini (tag'ini) taşıdığını söyler; etiket bırakılınca alan
// boş/null gelir. `roles` ise üyenin O ANKİ rol kimliklerinin tam listesidir.
//
// ÖNEMLİ: rol listesi ham olaydan okunur. `member.roles.cache` bu olayda
// bayatlayabilir; eski kod cache'e baktığı için "etiket gitti" durumunu
// kaçırıyordu (kök nedenlerden biri).

/**
 * @param {any} pkg Discord ham (raw) olayı
 * @param {string} guildId botun kendi sunucusu
 * @param {string} rolId "Yol Silindiri" rolü
 * @returns {{ userId: string, etiketVar: boolean, rolVar: boolean, bizimSunucu: boolean } | null}
 */
function etiketKarari(pkg, guildId, rolId) {
  if (!pkg || pkg.t !== 'GUILD_MEMBER_UPDATE') return null;

  const userId = pkg.d && pkg.d.user && pkg.d.user.id;
  if (!userId) return null;

  const bizimSunucu = String(pkg.d.guild_id || '') === String(guildId || '');
  const roller = Array.isArray(pkg.d.roles) ? pkg.d.roles.map(String) : [];
  const etiketGuild = String(
    (pkg.d.user.primary_guild && pkg.d.user.primary_guild.identity_guild_id) || '',
  );

  return {
    userId: String(userId),
    // Etiket bizim sunucuya ait mi? (başka sunucunun etiketi rolü ETKİLEMEZ)
    etiketVar: !!guildId && etiketGuild === String(guildId),
    rolVar: !!rolId && roller.includes(String(rolId)),
    bizimSunucu,
  };
}

module.exports = { etiketKarari };
