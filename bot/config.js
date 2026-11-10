const fs = require('fs');
const path = require('path');

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(path.join(__dirname, '.env'));

module.exports = {
  token: process.env.TOKEN || '',
  tokenEncrypted: process.env.TOKEN_ENCRYPTED || '',
  tokenKey: process.env.TOKEN_KEY || '',
  guild: {
    id: process.env.GUILD_ID || '',
    channel: process.env.CHANNEL_ID || '',
    // "Yol Silindiri" rolü. ROLE_YOL_ID öncelikli: .env'de yalnız o
    // doldurulduysa eski ROLE_ID boş kalıp rol senkronu hiç çalışmıyordu.
    role: (process.env.ROLE_YOL_ID || process.env.ROLE_ID || '').trim(),
  },
};
