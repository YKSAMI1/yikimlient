/*
 * Decompiled with CFR 0.152.
 * 
 * Could not load the following classes:
 *  org.slf4j.Logger
 *  org.slf4j.LoggerFactory
 */
package com.yikimlient.client;

import java.util.ArrayDeque;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public final class YikimLog {
    private static final int LIMIT = 128;
    private static final Logger LOGGER = LoggerFactory.getLogger((String)"YIKIM");
    private static final ArrayDeque<Line> QUEUE = new ArrayDeque();
    private static Thread worker;
    private static volatile boolean writing;

    private YikimLog() {
    }

    public static void info(String message) {
        YikimLog.enqueue(new Line(message, false));
    }

    public static void warn(String message) {
        YikimLog.enqueue(new Line(message, true));
    }

    /*
     * WARNING - Removed try catching itself - possible behaviour change.
     */
    private static void enqueue(Line line) {
        if (line.text == null || line.text.isEmpty()) {
            return;
        }
        YikimLog.ensureWorker();
        ArrayDeque<Line> arrayDeque = QUEUE;
        synchronized (arrayDeque) {
            if (QUEUE.size() >= 128) {
                QUEUE.pollFirst();
            }
            QUEUE.addLast(line);
            QUEUE.notify();
        }
    }

    /*
     * WARNING - Removed try catching itself - possible behaviour change.
     */
    private static void ensureWorker() {
        if (worker != null) {
            return;
        }
        Class<YikimLog> clazz = YikimLog.class;
        synchronized (YikimLog.class) {
            if (worker != null) {
                // ** MonitorExit[var0] (shouldn't be in output)
                return;
            }
            Thread thread = new Thread(YikimLog::drain, "YIKIM-gunluk");
            thread.setDaemon(true);
            thread.start();
            worker = thread;
            Runtime.getRuntime().addShutdownHook(new Thread(YikimLog::flushRemaining, "YIKIM-gunluk-kapanis"));
            // ** MonitorExit[var0] (shouldn't be in output)
            return;
        }
    }

    /*
     * WARNING - Removed try catching itself - possible behaviour change.
     */
    private static void drain() {
        while (true) {
            Line line;
            ArrayDeque<Line> arrayDeque = QUEUE;
            synchronized (arrayDeque) {
                while (QUEUE.isEmpty()) {
                    try {
                        QUEUE.wait();
                    }
                    catch (InterruptedException interrupted) {
                        Thread.currentThread().interrupt();
                        return;
                    }
                }
                line = QUEUE.pollFirst();
            }
            writing = true;
            YikimLog.write(line);
            writing = false;
        }
    }

    public static void flushNow() {
        YikimLog.flushRemaining();
        long deadline = System.nanoTime() + 250000000L;
        while (writing && System.nanoTime() < deadline) {
            Thread.onSpinWait();
        }
    }

    /*
     * WARNING - Removed try catching itself - possible behaviour change.
     */
    private static void flushRemaining() {
        while (true) {
            Line line;
            ArrayDeque<Line> arrayDeque = QUEUE;
            synchronized (arrayDeque) {
                line = QUEUE.pollFirst();
            }
            if (line == null) {
                return;
            }
            YikimLog.write(line);
        }
    }

    private static void write(Line line) {
        try {
            if (line.warn) {
                LOGGER.warn(line.text);
            } else {
                LOGGER.info(line.text);
            }
        }
        catch (Throwable throwable) {
            // empty catch block
        }
    }

    private static final class Line {
        private final String text;
        private final boolean warn;

        private Line(String text, boolean warn) {
            this.text = text;
            this.warn = warn;
        }
    }
}

