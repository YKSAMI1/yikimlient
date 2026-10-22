<?php
/**
 * YIKIMLient PRESENCE servisi (v1.10.5)
 * --------------------------------------
 * Lunar/Badlion tarzı çapraz rozet: oyuncular oyunda iken buraya POST atar,
 * servis AYNI sunucudaki diğer YIKIMLient oyuncularının UUID'lerini döner.
 *
 * Yükleme: bu dosyayı sitene  yikim-api/presence.php  olarak koy.
 *   https://yikimdara.com.tr/yikim-api/presence.php
 * Gereksinim: sadece PHP (veritabanı YOK) — kayıtlar sys temp altında
 * sunucu başına tek JSON dosyasında tutulur, 90 sn TTL ile temizlenir.
 *
 * İstek : POST {"v":1,"s":"<sunucu adresi>","u":"<uuid>","n":"<isim>"}
 * Yanıt : {"p":["<uuid>", ...]}   (istek sahibi hariç, canlı oyuncular)
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function yanitla($kod, $govde) {
    http_response_code($kod);
    echo $govde;
    exit;
}

$ham = file_get_contents('php://input');
$giris = json_decode($ham, true);
if (!is_array($giris) || !isset($giris['s'], $giris['u'], $giris['n'])) {
    yanitla(400, '{"p":[]}');
}

$sunucu = preg_replace('/[^A-Za-z0-9\.\:\-_]/', '', (string)$giris['s']);
$uuid   = (string)$giris['u'];
$isim   = (string)$giris['n'];

if ($sunucu === '' || strlen($sunucu) > 128) yanitla(400, '{"p":[]}');
if (!preg_match('/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/', $uuid)) yanitla(400, '{"p":[]}');
if (strlen($isim) > 32) $isim = substr($isim, 0, 32);

$klasor = sys_get_temp_dir() . '/yikim-presence';
if (!is_dir($klasor)) @mkdir($klasor, 0755, true);

$dosya = $klasor . '/' . md5($sunucu) . '.json';
$simdi = time();

// --- oku + güncelle + yaz (kilitli) ---
$fp = @fopen($dosya, 'c+');
if (!$fp) yanitla(200, '{"p":[]}');
flock($fp, LOCK_EX);
$ham2 = stream_get_contents($fp);
$liste = json_decode((string)$ham2, true);
if (!is_array($liste)) $liste = [];

// süresi geçenleri at
$canli = [];
foreach ($liste as $e) {
    if (is_array($e) && isset($e['u'], $e['t']) && (int)$e['t'] > $simdi - 90) {
        $canli[] = ['u' => (string)$e['u'], 'n' => (string)$e['n'], 't' => (int)$e['t']];
    }
}

// kendini güncelle/ekle
$bulundu = false;
foreach ($canli as &$e) {
    if ($e['u'] === $uuid) { $e['n'] = $isim; $e['t'] = $simdi; $bulundu = true; break; }
}
unset($e);
if (!$bulundu) $canli[] = ['u' => $uuid, 'n' => $isim, 't' => $simdi];

// kayıt sınırı (kaba sigorta: 200 oyuncu)
if (count($canli) > 200) $canli = array_slice($canli, -200);

ftruncate($fp, 0);
rewind($fp);
fwrite($fp, json_encode($canli));
fflush($fp);
flock($fp, LOCK_UN);
fclose($fp);

// --- yanıt: kendisi hariç diğer YIKIM oyuncuları ---
$p = [];
foreach ($canli as $e) {
    if ($e['u'] !== $uuid) $p[] = $e['u'];
}
echo json_encode(['p' => $p]);
