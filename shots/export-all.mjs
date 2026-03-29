#!/usr/bin/env node
/**
 * Export all portfolio shots as JPEG screenshots and MP4 videos.
 *
 * Usage:  node shots/export-all.mjs [--images] [--videos] [--shot 01]
 *         Defaults to both images and videos for all shots.
 *
 * Output: shots/exports/images/  and  shots/exports/videos/
 */

import puppeteer from "puppeteer";
import { execFile } from "node:child_process";
import { mkdir, rm, stat } from "node:fs/promises";
import { resolve, join, basename } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Prevent unhandled EPIPE from crashing the process
process.on("uncaughtException", (err) => {
  if (err.code === "EPIPE") return; // ignore broken pipe from ffmpeg
  console.error(err);
  process.exit(1);
});

// ── Config ──────────────────────────────────────────────────────────────
const SHOTS_DIR = __dirname;
const IMG_DIR = join(__dirname, "exports", "images");
const VID_DIR = join(__dirname, "exports", "videos");

const WEB_VP = { width: 1600, height: 900 };
const MOBILE_VP = { width: 390, height: 844 };
const DEVICE_SCALE = 2;

const VIDEO_DURATION_S = 4;

// ── Shot manifest (same order as preview.html) ──────────────────────────
const SHOTS = [
  { num: "01", file: "shot-01-finance-dashboard.html",   type: "web" },
  { num: "02", file: "shot-02-food-delivery.html",       type: "mobile" },
  { num: "03", file: "shot-03-meditation.html",          type: "mobile" },
  { num: "04", file: "shot-04-flight-search.html",       type: "mobile" },
  { num: "05", file: "shot-05-grocery-cart.html",        type: "mobile" },
  { num: "06", file: "shot-06-upi-send-money.html",     type: "mobile" },
  { num: "07", file: "shot-07-credit-card.html",         type: "mobile" },
  { num: "08", file: "shot-08-investment-portfolio.html", type: "mobile" },
  { num: "09", file: "shot-09-emi-calculator.html",      type: "web" },
  { num: "10", file: "shot-10-fashion-product.html",     type: "mobile" },
  { num: "11", file: "shot-11-checkout-flow.html",       type: "mobile" },
  { num: "12", file: "shot-12-wishlist.html",            type: "mobile" },
  { num: "13", file: "shot-13-calorie-tracker.html",     type: "mobile" },
  { num: "14", file: "shot-14-workout-session.html",     type: "mobile" },
  { num: "15", file: "shot-15-doctor-booking.html",      type: "mobile" },
  { num: "16", file: "shot-16-hotel-detail.html",        type: "mobile" },
  { num: "17", file: "shot-17-train-tickets.html",       type: "mobile" },
  { num: "18", file: "shot-18-ott-home.html",            type: "mobile" },
  { num: "19", file: "shot-19-short-video.html",         type: "mobile" },
  { num: "20", file: "shot-20-property-search.html",     type: "mobile" },
  { num: "21", file: "shot-21-property-detail.html",     type: "mobile" },
  { num: "22", file: "shot-22-course-learning.html",     type: "mobile" },
  { num: "23", file: "shot-23-habit-tracker.html",       type: "mobile" },
  { num: "24", file: "shot-24-cab-booking.html",         type: "mobile" },
  { num: "25", file: "shot-25-ride-progress.html",       type: "mobile" },
];

// ── CLI args ────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const onlyImages = args.includes("--images") && !args.includes("--videos");
const onlyVideos = args.includes("--videos") && !args.includes("--images");
const doImages = !onlyVideos;
const doVideos = !onlyImages;

let filterShot = null;
const shotIdx = args.indexOf("--shot");
if (shotIdx !== -1 && args[shotIdx + 1]) {
  filterShot = args[shotIdx + 1].padStart(2, "0");
}

const shotsToProcess = filterShot
  ? SHOTS.filter((s) => s.num === filterShot)
  : SHOTS;

// ── Helpers ─────────────────────────────────────────────────────────────
function log(msg) {
  process.stdout.write(`\x1b[36m▸\x1b[0m ${msg}\n`);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function ensureDirs() {
  if (doImages) await mkdir(IMG_DIR, { recursive: true });
  if (doVideos) {
    await mkdir(VID_DIR, { recursive: true });
  }
}

// ── Main ────────────────────────────────────────────────────────────────
async function main() {
  await ensureDirs();

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-web-security",
      "--allow-file-access-from-files",
    ],
  });

  log(`Processing ${shotsToProcess.length} shots (images: ${doImages}, videos: ${doVideos})`);

  const failed = [];

  for (const shot of shotsToProcess) {
    const filePath = resolve(SHOTS_DIR, shot.file);
    const vp = shot.type === "web" ? WEB_VP : MOBILE_VP;
    const nameBase = shot.file.replace(".html", "");

    let page;
    try {
      page = await browser.newPage();
      await page.setViewport({
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: DEVICE_SCALE,
      });

      const fileUrl = `file://${filePath}`;
      log(`[${shot.num}] Loading ${shot.file} (${shot.type})`);

      await page.goto(fileUrl, { waitUntil: "networkidle0", timeout: 30000 });
      await sleep(2000);

      // ── Screenshot ──────────────────────────────────────────────────
      if (doImages) {
        await sleep(3000);
        const imgPath = join(IMG_DIR, `${nameBase}.jpg`);
        await page.screenshot({
          path: imgPath,
          type: "jpeg",
          quality: 95,
          clip: { x: 0, y: 0, width: vp.width, height: vp.height },
        });
        log(`[${shot.num}] ✓ Image saved → exports/images/${nameBase}.jpg`);
      }

      // ── Video (CDP screencast → webm → mp4) ───────────────────────
      if (doVideos) {
        const outPath = join(VID_DIR, `${nameBase}.mp4`);
        const webmPath = join(VID_DIR, `${nameBase}.webm`);

        // Restart all CSS animations
        await page.evaluate(() => {
          document.querySelectorAll("*").forEach((el) => {
            const cs = getComputedStyle(el);
            if (cs.animationName && cs.animationName !== "none") {
              el.style.animation = "none";
              void el.offsetHeight;
              el.style.animation = "";
            }
          });
        });

        log(`[${shot.num}] Screen-recording ${VIDEO_DURATION_S}s…`);
        const recorder = await page.screencast({ path: webmPath });
        await sleep(VIDEO_DURATION_S * 1000);
        await recorder.stop();
        await sleep(1000); // let file flush

        // Verify webm is not empty
        const webmStat = await stat(webmPath).catch(() => null);
        if (!webmStat || webmStat.size < 1000) {
          log(`[${shot.num}] ✗ Screencast produced empty file, skipping video`);
          await rm(webmPath).catch(() => {});
          failed.push(shot.num);
        } else {
          log(`[${shot.num}] Converting to mp4… (${Math.round(webmStat.size / 1024)}KB webm)`);
          await execFileAsync("ffmpeg", [
            "-y",
            "-i", webmPath,
            "-c:v", "libx264",
            "-pix_fmt", "yuv420p",
            "-preset", "fast",
            "-crf", "18",
            "-vf", "pad=ceil(iw/2)*2:ceil(ih/2)*2",
            outPath,
          ]);
          await rm(webmPath).catch(() => {});
          log(`[${shot.num}] ✓ Video saved → exports/videos/${nameBase}.mp4`);
        }
      }
    } catch (e) {
      log(`[${shot.num}] ✗ FAILED: ${e.message}`);
      failed.push(shot.num);
    } finally {
      if (page) await page.close().catch(() => {});
    }
  }

  if (failed.length) {
    log(`\nFailed shots: ${failed.join(", ")}. Re-run with --shot <num> to retry.`);
  }

  await browser.close();
  log("Done! All exports complete.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
