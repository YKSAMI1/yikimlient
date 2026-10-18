package com.yikimlient.client;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.net.StandardSocketOptions;
import java.nio.ByteBuffer;
import java.nio.channels.SocketChannel;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;

/**
 * DISCORD RICH PRESENCE — OYUN SÜRECİNDEN (tamamen YEREL pipe, internet YOK).
 *
 * NİYE ARTIK MODDAN GÖNDERİLİYOR: Discord oyunu javaw.exe olarak algılar
 * ("Minecraft" başlığı) ve bu, launcher'dan gelen RPC'yi EZİYORDU. Bir oyun
 * SÜRECİ kendi presence'ini gönderdiğinde Discord, RPC'yi algılanan oyundan
 * üstün tutar (bütün oyun entegrasyonları böyle çalışır) → başlık "YIKIMLient"
 * olur; klip/Go Live ise javaw'ı (Minecraft'ı) kaydetmeye DEVAM eder. İkisi birden.
 *
 * Discord IPC yalnızca YEREL named pipe / unix socket'tir: bu sınıftan
 * internete HİÇBİR istek çıkmaz. Discord kapalıysa sessizce vazgeçer —
 * oyunu asla etkilemez (daemon thread, try/catch her yerde).
 *
 * Protokol: kare = [opcode u32 LE][uzunluk u32 LE][JSON utf8]
 *   opcode 0 = el sıkışma {"v":1,"client_id":...}
 *   opcode 1 = SET_ACTIVITY {"cmd","args":{"pid","activity"},"nonce"}
 */
public final class YikimDiscord {
    /** YIKIMLient Discord uygulamasının Client ID'si (launcher ile aynı). */
    private static final String CLIENT_ID = "1560649366899920926";
    /** Logo: Discord'a elle asset yüklemeye gerek kalmasın diye doğrudan URL. */
    private static final String LOGO_URL = "https://github.com/YKSAMI1/yikimlient/raw/main/src-tauri/icons/icon.png";
    private static final String INDIR_URL = "https://github.com/YKSAMI1/yikimlient";

    private static RandomAccessFile winPipe;
    private static SocketChannel unixPipe;
    private static boolean broken;

    private YikimDiscord() {
    }

    /** Ana menü hazır: "YIKIMLient" presence'i (menüde). Oyun boyunca bir kez. */
    public static void setMenu() {
        YikimDiscord.set("Minecraft " + YikimVideo.gameVersion() + " — Ana menüde",
                "YIKIMLient " + YikimClient.MOD_VERSION + " açık");
    }

    /** Dünyaya/sunucuya girildi: "YIKIMLient ile oynuyor". */
    public static void setPlaying() {
        YikimDiscord.set("Minecraft " + YikimVideo.gameVersion(),
                "YIKIMLient " + YikimClient.MOD_VERSION + " ile oynuyor");
    }

    private static void set(String details, String state) {
        if (YikimDiscord.broken) {
            return;
        }
        Thread worker = new Thread(() -> YikimDiscord.trySet(details, state), "YIKIM-Discord");
        worker.setDaemon(true);
        worker.start();
    }

    private static synchronized void trySet(String details, String state) {
        try {
            if (!YikimDiscord.connected()) {
                YikimDiscord.broken = !YikimDiscord.connect();
                if (YikimDiscord.broken) {
                    return; // Discord kapalı — sessizce vazgeç, oyun etkilenmez
                }
            }
            long pid = ProcessHandle.current().pid();
            long now = System.currentTimeMillis();
            String activity = "{\"type\":0,\"state\":" + YikimDiscord.json(state)
                    + ",\"details\":" + YikimDiscord.json(details)
                    + ",\"timestamps\":{\"start\":" + now + "}"
                    + ",\"assets\":{\"large_image\":" + YikimDiscord.json(LOGO_URL)
                    + ",\"large_text\":\"YIKIMLient — Ultra-hızlı Minecraft launcher\"}"
                    + ",\"buttons\":[{\"label\":\"YIKIMLient İndir\",\"url\":\"" + INDIR_URL + "\"}]}";
            String payload = "{\"cmd\":\"SET_ACTIVITY\",\"args\":{\"pid\":" + pid
                    + ",\"activity\":" + activity + "},\"nonce\":\"yikim-" + now + "\"}";
            YikimDiscord.writeFrame(1, payload);
            YikimDiscord.readFrame();
        }
        catch (Throwable ignored) {
            // hatada bağlantıyı at; bir daha deneme (broken) — oyun asla etkilenmez
            YikimDiscord.closeQuietly();
            YikimDiscord.broken = true;
        }
    }

    private static boolean connected() {
        return YikimDiscord.winPipe != null || YikimDiscord.unixPipe != null;
    }

    private static boolean connect() throws IOException {
        // 0..9 pipe'larını dene — ilk açılanı tut (Discord'un resmî protokolü)
        for (int i = 0; i < 10; ++i) {
            boolean windows = System.getProperty("os.name", "").toLowerCase(java.util.Locale.ROOT).contains("win");
            if (!windows) {
                try {
                    String dir = System.getenv("XDG_RUNTIME_DIR");
                    if (dir == null || dir.isEmpty()) {
                        dir = System.getenv("TMPDIR");
                    }
                    if (dir == null || dir.isEmpty()) {
                        dir = "/tmp";
                    }
                    SocketChannel ch = SocketChannel.open(java.net.UnixDomainSocketAddress.of(Path.of(dir, "discord-ipc-" + i)));
                    ch.setOption(StandardSocketOptions.SO_RCVBUF, 65536);
                    YikimDiscord.unixPipe = ch;
                    YikimDiscord.handshake();
                    return true;
                }
                catch (IOException ignored) {
                    // sıradaki pipe
                }
            } else {
                try {
                    YikimDiscord.winPipe = new RandomAccessFile("\\\\.\\pipe\\discord-ipc-" + i, "rw");
                    YikimDiscord.handshake();
                    return true;
                }
                catch (IOException ignored) {
                    // sıradaki pipe
                }
            }
        }
        return false;
    }

    private static void handshake() throws IOException {
        YikimDiscord.writeFrame(0, "{\"v\":1,\"client_id\":\"" + CLIENT_ID + "\"}");
        YikimDiscord.readFrame();
    }

    private static void writeFrame(int opcode, String json) throws IOException {
        byte[] data = json.getBytes(StandardCharsets.UTF_8);
        byte[] frame = new byte[8 + data.length];
        frame[0] = (byte) (opcode & 0xFF);
        frame[1] = (byte) (opcode >>> 8 & 0xFF);
        frame[2] = (byte) (opcode >>> 16 & 0xFF);
        frame[3] = (byte) (opcode >>> 24 & 0xFF);
        int len = data.length;
        frame[4] = (byte) (len & 0xFF);
        frame[5] = (byte) (len >>> 8 & 0xFF);
        frame[6] = (byte) (len >>> 16 & 0xFF);
        frame[7] = (byte) (len >>> 24 & 0xFF);
        System.arraycopy(data, 0, frame, 8, len);
        if (YikimDiscord.winPipe != null) {
            YikimDiscord.winPipe.write(frame);
            return;
        }
        ByteBuffer buf = ByteBuffer.wrap(frame);
        while (buf.hasRemaining()) {
            YikimDiscord.unixPipe.write(buf);
        }
    }

    private static void readFrame() throws IOException {
        byte[] header = new byte[8];
        YikimDiscord.readFully(header);
        int len = (header[4] & 0xFF) | (header[5] & 0xFF) << 8 | (header[6] & 0xFF) << 16 | (header[7] & 0xFF) << 24;
        byte[] body = new byte[Math.max(0, len)];
        YikimDiscord.readFully(body);
        // içerik: hata kontrolüne gerek yok — boru tıkanmasın, yeter
    }

    private static void readFully(byte[] target) throws IOException {
        if (YikimDiscord.winPipe != null) {
            int off = 0;
            while (off < target.length) {
                int n = YikimDiscord.winPipe.read(target, off, target.length - off);
                if (n < 0) {
                    throw new IOException("pipe kapandı");
                }
                off += n;
            }
            return;
        }
        ByteBuffer buf = ByteBuffer.wrap(target);
        while (buf.hasRemaining()) {
            if (YikimDiscord.unixPipe.read(buf) < 0) {
                throw new IOException("soket kapandı");
            }
        }
    }

    private static void closeQuietly() {
        try {
            if (YikimDiscord.winPipe != null) {
                YikimDiscord.winPipe.close();
            }
        }
        catch (IOException ignored) {
            // kapatma hatası umursanmaz
        }
        try {
            if (YikimDiscord.unixPipe != null) {
                YikimDiscord.unixPipe.close();
            }
        }
        catch (IOException ignored) {
            // kapatma hatası umursanmaz
        }
        YikimDiscord.winPipe = null;
        YikimDiscord.unixPipe = null;
    }

    /** JSON string escaping (yalnız kontrol karakterleri — metinlerimiz basit). */
    private static String json(String value) {
        StringBuilder out = new StringBuilder("\"");
        for (int i = 0; i < value.length(); ++i) {
            char c = value.charAt(i);
            if (c == '"' || c == '\\') {
                out.append('\\').append(c);
            } else if (c < ' ') {
                out.append(' ');
            } else {
                out.append(c);
            }
        }
        return out.append('\"').toString();
    }
}
