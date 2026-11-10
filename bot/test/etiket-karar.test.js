const test = require('node:test');
const assert = require('node:assert');
const { etiketKarari } = require('../utils/etiket-karar');

const GUILD = '1436397283057995938';
const ROL = '1465760854526918703';

const olay = (primaryGuild, roles, guildId = GUILD) => ({
  t: 'GUILD_MEMBER_UPDATE',
  d: {
    guild_id: guildId,
    roles,
    user: { id: '42', primary_guild: primaryGuild },
  },
});

test('etiket bırakıldı: primary_guild null olsa da rolün kaldırılması gerekir', () => {
  const k = etiketKarari(olay(null, [ROL]), GUILD, ROL);
  assert.strictEqual(k.etiketVar, false);
  assert.strictEqual(k.rolVar, true, 'rol ham listeden okunur (cache bayat olabilir)');
});

test('etiket var, rol yok → rol verilmeli', () => {
  const k = etiketKarari(
    olay({ identity_guild_id: GUILD, badge: { identity_enabled: true } }, []),
    GUILD,
    ROL,
  );
  assert.strictEqual(k.etiketVar, true);
  assert.strictEqual(k.rolVar, false);
});

test('başka sunucunun etiketi bizim rolü etkilemez', () => {
  const k = etiketKarari(
    olay({ identity_guild_id: '999' }, [ROL]),
    GUILD,
    ROL,
  );
  assert.strictEqual(k.etiketVar, false);
  assert.strictEqual(k.bizimSunucu, true, 'olay bizim sunucudan gelse de etiket başka sunucunun');
});

test('rozet görünürlüğü kapalı olsa da kimlik sunucusu doğru okunur', () => {
  const k = etiketKarari(
    olay({ identity_guild_id: GUILD, badge: { identity_enabled: false } }, [ROL]),
    GUILD,
    ROL,
  );
  assert.strictEqual(k.etiketVar, true);
  assert.strictEqual(k.rolVar, true);
});

test('başka sunucudaki üye güncellemesi yok sayılır', () => {
  const k = etiketKarari(olay({ identity_guild_id: GUILD }, [ROL], '555'), GUILD, ROL);
  assert.strictEqual(k.bizimSunucu, false);
});

test('ilgisiz olay / eksik kullanıcı → null', () => {
  assert.strictEqual(etiketKarari({ t: 'MESSAGE_CREATE', d: {} }, GUILD, ROL), null);
  assert.strictEqual(etiketKarari({ t: 'GUILD_MEMBER_UPDATE', d: {} }, GUILD, ROL), null);
});
