/**
 * Token şifreleme aracı
 * Kullanım: node scripts/encrypt-token.js
 */
const readline = require('readline');
const { encryptToken } = require('../utils/token');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  console.log('=== YIKIMTAGBOT Token Şifreleme ===\n');

  const token = await ask('Discord bot tokeninizi girin: ');
  const key = await ask('Şifreleme anahtarı girin (en az 8 karakter, bunu .env dosyasına TOKEN_KEY olarak yazacaksınız): ');

  rl.close();

  if (!token.trim() || !key.trim()) {
    console.error('Token ve anahtar boş olamaz.');
    process.exit(1);
  }

  if (key.trim().length < 8) {
    console.error('Şifreleme anahtarı en az 8 karakter olmalı.');
    process.exit(1);
  }

  try {
    const encrypted = encryptToken(token.trim(), key.trim());

    console.log('\n--- .env dosyanıza şunları ekleyin ---\n');
    console.log(`TOKEN_ENCRYPTED=${encrypted}`);
    console.log(`TOKEN_KEY=${key.trim()}`);
    console.log('\nTOKEN satırını .env dosyasından silin veya boş bırakın.');
    console.log('Şifreleme anahtarını kimseyle paylaşmayın.\n');
  } catch (error) {
    console.error('Şifreleme hatası:', error.message);
    process.exit(1);
  }
}

main();
