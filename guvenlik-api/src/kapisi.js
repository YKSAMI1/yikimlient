// KAPI — saat penceresi, nonce tekrar koruması, IP başına hız sınırı.

const NONCELER = new Map(); // nonce -> eklenme zamanı
const IP_SAYAC = new Map(); // ip -> [pencere başı, adet]
const NONCE_OMUR = 10 * 60 * 1000;
const PENCERE = 60 * 1000;
const IP_LIMITI = 120; // istek/dakika

export function temizle() {
  const t = Date.now();
  for (const [n, z] of NONCELER) if (t - z > NONCE_OMUR) NONCELER.delete(n);
  for (const [ip, k] of IP_SAYAC) {
    if (t - k[0] > PENCERE) IP_SAYAC.delete(ip);
  }
}
setInterval(temizle, 60_000).unref?.();

/** ±5 dk saat penceresi */
export function tsGecerli(ts) {
  const t = Date.now();
  return typeof ts === "number" && Math.abs(t - ts) < 5 * 60 * 1000;
}

/** Nonce geri oynatması (true = ilk kez görüldü) */
export function nonceKabul(nonce) {
  const t = Date.now();
  if (NONCELER.has(nonce)) return false;
  NONCELER.set(nonce, t);
  return true;
}

/** IP başına hız sınırı (true = sınır aşıldı) */
export function hizSiniriAsildi(ip) {
  const t = Date.now();
  const k = IP_SAYAC.get(ip);
  if (!k || t - k[0] > PENCERE) {
    IP_SAYAC.set(ip, [t, 1]);
    return false;
  }
  k[1] += 1;
  if (k[1] > IP_LIMITI) return true;
  return false;
}

/** İstek gövdesinden imza metnini üret: cihaz_id|ts|nonce|body */
export function imzaMetni(cihaz_id, ts, nonce, govdeMetni) {
  return `${cihaz_id}|${ts}|${nonce}|${govdeMetni}`;
}
