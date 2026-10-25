# YIKIM Presence — PythonAnywhere (ücretsiz, uykusuz) sürümü.
# Java PresenceServer ile BİREBİR AYNI protokol; VDS/bulut Java sürümüyle
# karışık kullanılmaz — birini seç.
#
# PROTOCOL:
#   POST /presence  {"v":1,"s":"<sunucu>","u":"<uuid>","n":"<isim>"[,"png":..|"sil":true][,"izinler":[...]]}
#   yanıt           {"p":["uuid",...],"b":{uuid:png},"izinler":["isim",...]}
#   GET  /presence  {"ok":true,...}
import json
import os
import threading
import time

from flask import Flask, jsonify, request

TTL_MS = 90_000
MAX_PLAYERS = 200
MAX_PNG = 4096

KAYIT = {}      # sunucu -> {uuid: [isim, zaman]}
ROZETLER = {}   # uuid -> base64 png
ISIMLER = {}    # uuid -> hesap adı (izin geri alma temizliği için)
IZINLER = []    # [isim, ...]
KILIT = threading.Lock()

ROZET_DOSYA = os.path.join(os.path.expanduser("~"), "rozetler.json")
IZIN_DOSYA = os.path.join(os.path.expanduser("~"), "izinler.json")
ISIM_DOSYA = os.path.join(os.path.expanduser("~"), "isimler.json")


def _yukle():
    global ROZETLER, IZINLER, ISIMLER
    try:
        with open(ROZET_DOSYA, "r", encoding="utf-8") as f:
            ROZETLER = json.load(f)
    except Exception:
        pass
    try:
        with open(IZIN_DOSYA, "r", encoding="utf-8") as f:
            IZINLER = json.load(f)
    except Exception:
        pass
    try:
        with open(ISIM_DOSYA, "r", encoding="utf-8") as f:
            ISIMLER = json.load(f)
    except Exception:
        pass


def _kaydet():
    try:
        with open(ROZET_DOSYA, "w", encoding="utf-8") as f:
            json.dump(ROZETLER, f)
    except Exception:
        pass
    try:
        with open(IZIN_DOSYA, "w", encoding="utf-8") as f:
            json.dump(IZINLER, f)
    except Exception:
        pass
    try:
        with open(ISIM_DOSYA, "w", encoding="utf-8") as f:
            json.dump(ISIMLER, f)
    except Exception:
        pass


_yukle()
app = Flask(__name__)


def _izin_uygula(izin_geldi):
    """İzin listesini uygula + izni geri alınanların çizimlerini sil."""
    global IZINLER
    IZINLER = [str(a).strip()[:32] for a in izin_geldi
               if isinstance(a, str) and 0 < len(str(a).strip()) <= 32]
    for k in list(ROZETLER.keys()):
        if ISIMLER.get(k, k).lower() not in [i.lower() for i in IZINLER]:
            ROZETLER.pop(k, None)
    _kaydet()


@app.route("/presence", methods=["GET"])
def ping():
    return jsonify(ok=True, service="yikim-presence", p=[])


@app.route("/presence", methods=["POST"])
def presence():
    govde = request.get_json(force=True, silent=True)
    if not isinstance(govde, dict):
        return jsonify(p=[], b={}, izinler=IZINLER), 400
    uuid = govde.get("u")
    # İzin listesi değişimi UUID'DEN ÖNCE (v1.12.6): admin paneli izinleri
    # u/n OLMADAN yollar — eski sürüm 400 döndürüp kaydı yutuyordu.
    izin_geldi = govde.get("izinler")
    if isinstance(izin_geldi, list) and (not isinstance(uuid, str) or len(uuid) != 36 or uuid.count("-") != 4):
        with KILIT:
            _izin_uygula(izin_geldi)
        return jsonify(p=[], b={}, izinler=IZINLER)
    if not isinstance(uuid, str) or len(uuid) != 36 or uuid.count("-") != 4:
        return jsonify(p=[], b={}, izinler=IZINLER), 400
    sunucu = govde.get("s")
    isim = govde.get("n") or "oyuncu"
    if isinstance(isim, str) and len(isim) > 32:
        isim = isim[:32]

    with KILIT:
        # --- rozet güncelleme ---
        png = govde.get("png")
        if isinstance(png, str) and 0 < len(png) <= MAX_PNG:
            ROZETLER[uuid] = png
            _kaydet()
        elif govde.get("sil"):
            ROZETLER.pop(uuid, None)
            _kaydet()

        # --- izin listesi değişimi (admin paneli) ---
        izin_geldi = govde.get("izinler")
        if isinstance(izin_geldi, list):
            _izin_uygula(izin_geldi)
        if isinstance(isim, str) and isim and isim != "oyuncu":
            ISIMLER[uuid] = isim

        # --- presence (aynı sunucudaki oyuncular) ---
        if not isinstance(sunucu, str) or not sunucu:
            return jsonify(p=[], b=_rozetler(uuid), izinler=IZINLER)

        simdi = time.time() * 1000.0
        liste = KAYIT.setdefault(sunucu, {})
        mevcut = liste.get(uuid)
        if mevcut is not None:
            mevcut[0] = isim
            mevcut[1] = simdi
        else:
            liste[uuid] = [isim, simdi]
        for k in [k for k, v in liste.items() if simdi - v[1] > TTL_MS]:
            del liste[k]
        if len(liste) > MAX_PLAYERS:
            liste.clear()
            liste[uuid] = [isim, simdi]

        return jsonify(p=[k for k in liste if k != uuid],
                       b=_rozetler(uuid), izinler=IZINLER)


def _rozetler(istek_sahibi):
    return {k: v for k, v in ROZETLER.items() if k != istek_sahibi}


# PythonAnywhere WSGI bu ismi bekler
application = app
