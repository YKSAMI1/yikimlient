#!/usr/bin/env bash
# YIKIM Client oyun içi modunu (mod/) desteklenen her Minecraft sürümü için derler,
# jar'ları resources/mods/ altına kopyalar ve manifest.json'u yazar.
#
# Tek kaynak ağacı, sürüme göre tek adaptör: oyun API'si değiştiğinde yalnızca
# `mod/src/version/<nesil>/java/.../YikimAdapter.java` değişir. Nesil seçimi
# aşağıdaki tabloda yapılır; bilinmeyen bir sürüm sessizce atlanmaz, uyarı verir.
#
# Kullanım:
#   scripts/build-mod.sh                  # desteklenen tüm sürümler
#   scripts/build-mod.sh 1.21.11          # yalnızca verilenler
#   scripts/build-mod.sh --liste          # sürüm → nesil tablosunu göster
set -euo pipefail

cd "$(dirname "$0")/.."
ROOT="$PWD"
GRADLE_ARGS=(--console=plain)
MOD_DIR="$ROOT/mod"
OUT_DIR="$ROOT/resources/mods"
MANIFEST="$OUT_DIR/manifest.json"

# ------------------------------------------------------------------ nesil tablosu
#
# Nesil sınırları, oyun API'sinin gerçekten değiştiği sürümlerdir (ölçülerek
# doğrulandı, tahmin değil):
#   legacy  : DrawContext PoseStack + `net.minecraft.client.ParticleStatus`
#   hybrid  : PoseStack sürüyor, parçacık ayarı `server.level.ParticleStatus`e taşındı
#   mid     : çizim yüzeyi joml Matrix3x2fStack oldu, girdi imzaları hâlâ eski
#   newer   : pencere girdisi KeyEvent/MouseButtonEvent kayıtlarına geçti
#   modern  : kalite ayarı `graphicsMode` → `graphicsPreset`, `ResourceKey.identifier()`
adapter_for() {
  case "$1" in
    1.21|1.21.1) echo "legacy" ;;
    1.21.2|1.21.3) echo "legacy2" ;;
    1.21.4|1.21.5) echo "hybrid" ;;
    1.21.6|1.21.7|1.21.8) echo "mid" ;;
    1.21.9|1.21.10) echo "newer" ;;
    1.21.11) echo "modern" ;;
    *) echo "" ;;
  esac
}

# Desteklenen hedefler: 1.21 ailesinin tamamı. Her sürüm, adaptör tablosundaki
# nesillerden birine düşer; nesil klasörü yoksa derleme GradleException ile durur,
# bu yüzden buraya yalnızca gerçekten derlenen sürüm yazılır.
SUPPORTED=(1.21.1 1.21.2 1.21.3 1.21.4 1.21.5 1.21.6 1.21.7 1.21.8 1.21.9 1.21.10 1.21.11)

if [ "${1:-}" = "--liste" ]; then
  for mc in "${SUPPORTED[@]}"; do
    printf '%-9s → %s\n' "$mc" "$(adapter_for "$mc")"
  done
  exit 0
fi

REQUESTED=("$@")
if [ ${#REQUESTED[@]} -gt 0 ]; then
  TARGETS=()
  for want in "${REQUESTED[@]}"; do
    adapter="$(adapter_for "$want")"
    if [ -z "$adapter" ]; then
      echo "!! $want desteklenmiyor: adaptör tablosunda yok. Yeni bir API nesliyse"
      echo "   mod/src/version/<nesil>/java/.../YikimAdapter.java ekleyip buraya yaz."
      exit 1
    fi
    TARGETS+=("$want:$adapter")
  done
else
  TARGETS=()
  for mc in "${SUPPORTED[@]}"; do
    TARGETS+=("$mc:$(adapter_for "$mc")")
  done
fi

json_field() {
  node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{try{const j=JSON.parse(s);process.stdout.write(String(j[0]?.[process.argv[1]]??''))}catch{process.stdout.write('')}})" "$1"
}

resolve_fabric() {
  curl -sf "https://api.modrinth.com/v2/project/fabric-api/version?game_versions=%5B%22$1%22%5D&loaders=%5B%22fabric%22%5D" |
    json_field version_number
}

LOADER="$(curl -sf https://meta.fabricmc.net/v2/versions/loader | json_field version)"
LOADER="${LOADER:-0.19.5}"
echo "==> Fabric loader: $LOADER"

# Jar adları sürüm taşır ve launcher hangi sürüme hangi dosyanın kurulacağını
# manifest'ten okur; bu yüzden çıktı adı `<mod>-<modSürümü>+<mc>.jar` olmak zorunda.
MOD_VERSION="$(node -e "process.stdout.write(require('$ROOT/mod/gradle.properties'.replace(/\\\\/g,'/'))? '' : '')" 2>/dev/null || true)"
MOD_VERSION="$(grep -E '^mod_version=' "$MOD_DIR/gradle.properties" | cut -d= -f2 | tr -d '\r')"

mkdir -p "$OUT_DIR"

# ---------------------------------------------------------------- kilit
# İki derleme aynı anda çalışırsa ikisi de aynı manifest'e yazar ve JSON bozulur;
# bozuk manifest sessiz bir arızadır (oyuncu "mod kurulu" görür, oyunda mod yoktur).
LOCK="$OUT_DIR/.build.lock"
if ! mkdir "$LOCK" 2>/dev/null; then
  echo "!! Başka bir derleme sürüyor ($LOCK). Bitmesini bekle ya da klasörü sil."
  exit 1
fi
trap 'rmdir "$LOCK" 2>/dev/null || true' EXIT

# Eski jar'ları silmeden arşive taşı: geri dönüş her zaman mümkün olmalı.
# Arşiv kasıtlı olarak resources/mods **dışında**: paketleme o klasördeki bütün
# jar'ları kopyalar, eski jar'ların pakete sızmasını istemiyoruz.
ARCHIVE="$ROOT/_arsiv-mod-jars"
mkdir -p "$ARCHIVE"
for old in "$OUT_DIR"/yikimlient-*.jar; do
  [ -e "$old" ] || continue
  case "$(basename "$old")" in
    yikimlient-"$MOD_VERSION"+*) ;;
    *) mv -f "$old" "$ARCHIVE/" && echo "   arşiv: $(basename "$old")" ;;
  esac
done

echo '{' >"$MANIFEST"
echo '  "generatedAt": "'"$(date -u +%Y-%m-%dT%H:%M:%SZ)"'",' >>"$MANIFEST"
printf '  "modVersion": "%s",\n' "$MOD_VERSION" >>"$MANIFEST"
echo '  "mods": [' >>"$MANIFEST"

first=1
built=()
failed=()
for target in "${TARGETS[@]}"; do
  IFS=: read -r mc adapter <<<"$target"
  fabric="$(resolve_fabric "$mc")"
  if [ -z "$fabric" ]; then
    echo "!! Minecraft $mc için fabric-api bulunamadı, atlanıyor"
    failed+=("$mc (fabric-api yok)")
    continue
  fi
  echo
  echo "==> Mod derleniyor: Minecraft $mc (adaptör: $adapter, fabric-api: $fabric)"
  set +e
  (cd "$MOD_DIR" && gradle build "${GRADLE_ARGS[@]}" \
    -Pminecraft_version="$mc" \
    -Pfabric_version="$fabric" \
    -Ploader_version="$LOADER" \
    -Padapter="$adapter" 2>&1) | grep -E "error:|FAILED|BUILD SUCCESSFUL" | head -20
  status=${PIPESTATUS[0]}
  set -e
  if [ "$status" -ne 0 ]; then
    echo "!! Minecraft $mc derlenemedi (adaptör: $adapter)"
    failed+=("$mc (adaptör: $adapter)")
    continue
  fi
  # `ls -t`: en yeni jar kazanır, böylece önceki sürümün kalıntısı kopyalanmaz.
  jar="$(ls -t "$MOD_DIR/build/libs/"yikimlient-*"+$mc.jar" 2>/dev/null | head -1)"
  if [ -z "$jar" ]; then
    echo "!! $mc için jar bulunamadı"
    failed+=("$mc (jar yok)")
    continue
  fi
  cp "$jar" "$OUT_DIR/"
  [ $first -eq 1 ] || printf ',\n' >>"$MANIFEST"
  first=0
  printf '    { "mcVersion": "%s", "adapter": "%s", "file": "%s" }' \
    "$mc" "$adapter" "$(basename "$jar")" >>"$MANIFEST"
  echo "   ok: $(basename "$jar")"
  built+=("$mc")
done

echo '' >>"$MANIFEST"
echo '  ]' >>"$MANIFEST"
echo '}' >>"$MANIFEST"

# Manifest yazıldıktan hemen sonra doğrulanır: launcher kurulacak jar'ı buradan
# okur, bozuk bir dosya "mod kurulu ama oyunda yok" demektir.
if ! node -e '
  const fs = require("fs");
  const parsed = JSON.parse(fs.readFileSync(process.argv[1], "utf8"));
  if (!Array.isArray(parsed.mods) || parsed.mods.length === 0) throw new Error("mods boş");
  const seen = new Set();
  for (const entry of parsed.mods) {
    if (!entry.mcVersion || !entry.file) throw new Error("eksik alan");
    if (seen.has(entry.mcVersion)) throw new Error(`${entry.mcVersion} iki kez`);
    seen.add(entry.mcVersion);
    if (!fs.existsSync(require("path").join(require("path").dirname(process.argv[1]), entry.file))) {
      throw new Error(`${entry.file} diskte yok`);
    }
  }
  process.stdout.write(`   manifest doğrulandı: ${parsed.mods.length} sürüm\n`);
' "$MANIFEST"; then
  echo "!! manifest.json geçersiz — paketleme yapılmamalı"
  exit 1
fi

echo
echo "==> resources/mods:"
ls -la "$OUT_DIR"
echo
echo "==> Derlenen sürümler (${#built[@]}): ${built[*]:-yok}"
if [ ${#failed[@]} -gt 0 ]; then
  echo "!! Derlenemeyen sürümler: ${failed[*]}"
  exit 1
fi
