const crypto = require('crypto');

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const AUTH_TAG_LENGTH = 16;

function deriveKey(secret) {
  return crypto.createHash('sha256').update(secret).digest();
}

function encryptToken(plainToken, secret) {
  if (!plainToken || !secret) {
    throw new Error('Token ve şifreleme anahtarı gerekli.');
  }

  const key = deriveKey(secret);
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

  const encrypted = Buffer.concat([
    cipher.update(plainToken, 'utf8'),
    cipher.final(),
  ]);

  const authTag = cipher.getAuthTag();
  const payload = Buffer.concat([iv, authTag, encrypted]);

  return payload.toString('base64');
}

function decryptToken(encryptedBase64, secret) {
  if (!encryptedBase64 || !secret) {
    throw new Error('Şifreli token ve şifreleme anahtarı gerekli.');
  }

  const key = deriveKey(secret);
  const payload = Buffer.from(encryptedBase64, 'base64');

  if (payload.length < IV_LENGTH + AUTH_TAG_LENGTH + 1) {
    throw new Error('Şifreli token geçersiz.');
  }

  const iv = payload.subarray(0, IV_LENGTH);
  const authTag = payload.subarray(IV_LENGTH, IV_LENGTH + AUTH_TAG_LENGTH);
  const encrypted = payload.subarray(IV_LENGTH + AUTH_TAG_LENGTH);

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);

  const decrypted = Buffer.concat([
    decipher.update(encrypted),
    decipher.final(),
  ]);

  return decrypted.toString('utf8');
}

function resolveToken(config) {
  if (config.tokenEncrypted && config.tokenKey) {
    return decryptToken(config.tokenEncrypted, config.tokenKey);
  }

  if (config.token) {
    return config.token;
  }

  throw new Error(
    'Token bulunamadı. .env dosyasında TOKEN veya TOKEN_ENCRYPTED + TOKEN_KEY tanımlayın.'
  );
}

module.exports = {
  encryptToken,
  decryptToken,
  resolveToken,
};
