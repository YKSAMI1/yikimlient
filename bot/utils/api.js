// GÜVENLİK API İSTEMCİSİ — bot tarafı.
//
// Bot veritabanına DOĞRUDAN bağlanmaz; yalnızca bu API üzerinden konuşur.
// Yetkilendirme: `x-bot-anahtari` başlığı (değeri .env'deki YIKIM_BOT_ANAHTARI).
// Anahtar kodda sabit DEĞİLDİR; ortam değişkeninden okunur.
//
// API kapalıysa/erişilemezse bot çökmez: tüm çağrılar `{ ok:false }` döner.

const VARSAYILAN_ADRES = 'https://yikimlient.vercel.app';

function adres() {
  return (process.env.YIKIM_API || VARSAYILAN_ADRES).replace(/\/+$/, '');
}

function anahtar() {
  return process.env.YIKIM_BOT_ANAHTARI || '';
}

function hazirMi() {
  return anahtar().length > 0;
}

/**
 * İmzasız bot çağrısı (yalnızca bot anahtarıyla korunur).
 * Döner: { ok, durum, ...govde }
 */
async function cagir(yol, govde = {}, { zamanAsimi = 8000 } = {}) {
  if (!hazirMi()) {
    return { ok: false, durum: 0, hata: 'YIKIM_BOT_ANAHTARI tanimli degil' };
  }

  let yanit;
  try {
    yanit = await fetch(`${adres()}${yol}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-bot-anahtari': anahtar(),
      },
      body: JSON.stringify(govde),
      signal: AbortSignal.timeout(zamanAsimi),
    });
  } catch (error) {
    return { ok: false, durum: 0, hata: `API erisilemedi: ${error.message}` };
  }

  let veri = null;
  try {
    veri = await yanit.json();
  } catch {
    veri = null;
  }

  return {
    ok: yanit.ok,
    durum: yanit.status,
    ...(veri && veri.govde ? veri.govde : {}),
  };
}

/** Bot kalp atışı — panelde "bot açık" göstergesi için. */
function ping() {
  return cagir('/api/ping', {}, { zamanAsimi: 5000 });
}

/** Bağlama kodunu doğrula (kullanıcı /bagla <kod> yazdığında). */
function bagla({ kod, discordId, discordAd, rolYol = false }) {
  return cagir('/api/baglama/dogrula', {
    kod,
    discord_id: discordId,
    discord_ad: discordAd,
    rol_yol: !!rolYol,
  });
}

/** Şifre sıfırlama/oluşturma kodu iste (kullanıcı /sifirla yazdığında). */
function sifirlaKodIste({ hesapAd, hesapAnahtar, discordId }) {
  return cagir('/api/sifirla/iste', {
    hesap_ad: hesapAd,
    hesap_anahtar: hesapAnahtar,
    discord_id: discordId,
  });
}

/**
 * "Yol Silindiri" rolünün verildi/alındığını API'ye bildir.
 * API, bağlı TÜM hesapların rolünü günceller → launcher çizme izni takip eder.
 */
function rolGuncelle({ discordId, rolYol = false }) {
  return cagir('/api/rol/guncelle', {
    discord_id: discordId,
    rol_yol: !!rolYol,
  });
}

module.exports = {
  adres,
  hazirMi,
  cagir,
  ping,
  bagla,
  sifirlaKodIste,
  rolGuncelle,
};
