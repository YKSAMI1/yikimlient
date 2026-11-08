#!/usr/bin/env node
// bot/.env'yi .example şablonuna göre EKSİKSİZ yeniden kur.
// - Şifreli token (TOKEN_ENCRYPTED + TOKEN_KEY) korunur
// - YIKIM_API, YIKIM_BOT_ANAHTARI, ROLE_YOL_ID, YIKIM_ADMIN_ID eklenir
// - Değerler hiçbir zaman ekrana yazdırılmaz
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const envYol = path.join(kok, "bot/.env");
const apiEnv = path.join(kok, "guvenlik-api/.env");

const oku = (p) =>
  fs.readFileSync(p, "utf8").split(/\r?\n/).reduce((m, s) => {
    const t = s.trim();
    if (!t || t.startsWith("#")) return m;
    const i = t.indexOf("=");
    if (i < 0) return m;
    m[t.slice(0, i).trim()] = t.slice(i + 1).trim();
    return m;
  }, {});

const mevcut = oku(envYol);
const api = oku(apiEnv);

const tor = process.env.YIKIM_BOT_ANAHTARI || api.YIKIM_BOT_ANAHTARI || "";
const GUILD = "1436397283057995938";
const CHANNEL = "1465760963843063078";
const ROLE = "1465760854526918703"; // ・Yol Silindiri
const YOL_ROL = "1465760854526918703"; // kozmetik çizimi izni veren rol
const ADMIN = "1137682456783376467";
const API = "http://127.0.0.1:8788";

const satirlar = [
  "# YIKIMLient bot — yerel sırlar (gitignore)",
  "# Token düz metin DEĞİL: şifreli (TOKEN_ENCRYPTED + TOKEN_KEY).",
  `TOKEN=${mevcut.TOKEN || ""}`,
  `TOKEN_ENCRYPTED=${mevcut.TOKEN_ENCRYPTED || ""}`,
  `TOKEN_KEY=${mevcut.TOKEN_KEY || ""}`,
  "",
  "# Sunucu",
  `GUILD_ID=${GUILD}`,
  `CHANNEL_ID=${CHANNEL}`,
  `ROLE_ID=${ROLE}`,
  `EVENT_COOLDOWN_MS=${mevcut.EVENT_COOLDOWN_MS || 5000}`,
  `MAX_CONCURRENT_OPS=${mevcut.MAX_CONCURRENT_OPS || 5}`,
  "",
  "# YIKIMLient güvenlik API",
  `YIKIM_API=${API}`,
  `YIKIM_BOT_ANAHTARI=${tor || "<API ile AYNI 24-bayt anahtar>"}`,
  "",
  "# 'Yol Silindiri' rolü: kozmetik çizim izni",
  `ROLE_YOL_ID=${YOL_ROL}`,
  "",
  "# Duyuru / panel hedefi",
  `YIKIM_ADMIN_ID=${ADMIN}`,
  "YIKIM_DM_ROLE=0",
  "",
];

fs.writeFileSync(envYol, satirlar.join("\r\n"), "utf8");

// Rapor: anahtarların dolu/boş olduğunu söyle, değerini yazma.
const kontrol = {
  TOKEN_ENCRYPTED: !!(mevcut.TOKEN_ENCRYPTED || "").trim(),
  TOKEN_KEY: !!(mevcut.TOKEN_KEY || "").trim(),
  YIKIM_BOT_ANAHTARI: !!tor,
  ROLE_YOL_ID: !!YOL_ROL,
  GUILD_ID: !!GUILD,
};
console.log("bot/.env yeniden kuruldu. Durum:", JSON.stringify(kontrol));
if (!kontrol.TOKEN_ENCRYPTED) console.log("  UYARI: şifreli token boş — eskiden ne varsa korundu ama yok.");
if (!tor) console.log("  UYARI: API .env'sinde YIKIM_BOT_ANAHTARI bulunamadı.");
