const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const PImage = require("pureimage");
const ffmpegPath = require("ffmpeg-static");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const frameDir = path.join(publicDir, "hero-frames");

fs.mkdirSync(publicDir, { recursive: true });
fs.mkdirSync(frameDir, { recursive: true });

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
}

function mix(c1, c2, t) {
  const a = hexToRgb(c1);
  const b = hexToRgb(c2);
  return `rgba(${Math.round(lerp(a.r, b.r, t))}, ${Math.round(
    lerp(a.g, b.g, t)
  )}, ${Math.round(lerp(a.b, b.b, t))}, 1)`;
}

function drawGrid(ctx, width, height, alpha = 0.1) {
  ctx.strokeStyle = `rgba(230, 241, 255, ${alpha})`;
  ctx.lineWidth = 1;
  for (let x = 0; x <= width; x += 80) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y <= height; y += 80) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}

function drawFrame(index, total) {
  const width = 960;
  const height = 540;
  const img = PImage.make(width, height);
  const ctx = img.getContext("2d");
  const phase = (index / total) * Math.PI * 2;

  for (let y = 0; y < height; y += 2) {
    const t = y / height;
    ctx.fillStyle = mix("#11161b", "#24313a", t);
    ctx.fillRect(0, y, width, 2);
  }

  ctx.fillStyle = "#1d2d37";
  ctx.fillRect(72, 86, width - 144, 16);
  ctx.fillStyle = "#243746";
  ctx.fillRect(96, 138, width - 180, 26);
  ctx.fillStyle = "#31495a";
  ctx.fillRect(132, 196, width - 260, 40);
  ctx.fillStyle = "#4a6374";
  ctx.fillRect(168, 258, width - 356, 22);

  for (let i = 0; i < 8; i += 1) {
    const x = (width * (0.04 + i * 0.14) + Math.sin(phase + i) * 34) % width;
    const y = height * (0.16 + (i % 4) * 0.18) + Math.cos(phase + i * 0.8) * 28;
    ctx.fillStyle = i % 2 ? "#2f5368" : "#6a4934";
    ctx.fillRect(x - 150, y - 34, 300, 68);
  }

  ctx.fillStyle = "#5b7587";
  for (let i = 0; i < 12; i += 1) {
    const y = 98 + i * 30 + Math.sin(phase + i) * 7;
    ctx.fillRect(78, y, width - 160, 2);
  }

  ctx.fillStyle = "#8a613f";
  for (let i = 0; i < 5; i += 1) {
    const x = 120 + i * 165 + Math.cos(phase * 0.7 + i) * 24;
    ctx.fillRect(x, 70, 2, height - 140);
  }

  drawGrid(ctx, width, height, 0.04);

  for (let i = 0; i < 120; i += 1) {
    const x = (i * 97 + Math.sin(phase + i) * 36) % width;
    const y = (i * 53 + Math.cos(phase * 0.8 + i) * 24) % height;
    const size = 2 + ((i + index) % 4);
    ctx.fillStyle = i % 5 === 0 ? "#e4b07f" : "#b5d7f2";
    ctx.fillRect(x, y, size, size);
  }

  return img;
}

async function savePng(img, file) {
  await PImage.encodePNGToStream(img, fs.createWriteStream(file));
}

async function generateHeroVideo() {
  const totalFrames = 144;
  console.warn = () => {};
  console.log = () => {};
  const frameTotal = 48;
  for (let i = 0; i < frameTotal; i += 1) {
    const file = path.join(frameDir, `frame-${String(i).padStart(4, "0")}.png`);
    await savePng(drawFrame(i, frameTotal), file);
  }

  const output = path.join(publicDir, "hero-loop.mp4");
  const args = [
    "-y",
    "-framerate",
    "12",
    "-i",
    path.join(frameDir, "frame-%04d.png"),
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    "-preset",
    "ultrafast",
    "-crf",
    "30",
    output,
  ];
  const result = spawnSync(ffmpegPath, args, { stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error("Failed to generate hero-loop.mp4");
  }
}

async function drawPoster() {
  const poster = drawFrame(18, 144);
  await savePng(poster, path.join(publicDir, "hero-poster.png"));
}

async function drawPortrait() {
  const width = 960;
  const height = 1200;
  const img = PImage.make(width, height);
  const ctx = img.getContext("2d");

  for (let y = 0; y < height; y += 2) {
    ctx.fillStyle = mix("#07080a", "#171d21", y / height);
    ctx.fillRect(0, y, width, 2);
  }

  const glow = ctx.createRadialGradient(520, 410, 0, 520, 410, 520);
  glow.addColorStop(0, "rgba(142, 199, 255, 0.34)");
  glow.addColorStop(0.52, "rgba(255, 186, 133, 0.14)");
  glow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(9, 11, 13, 0.9)";
  ctx.beginPath();
  ctx.arc(500, 1000, 330, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(16, 19, 22, 0.96)";
  ctx.beginPath();
  ctx.moveTo(285, 1110);
  ctx.bezierCurveTo(330, 760, 390, 610, 500, 610);
  ctx.bezierCurveTo(635, 610, 700, 770, 730, 1110);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "rgba(20, 23, 26, 0.98)";
  ctx.beginPath();
  ctx.arc(506, 430, 170, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(6, 7, 8, 0.78)";
  ctx.beginPath();
  ctx.moveTo(290, 300);
  ctx.bezierCurveTo(318, 214, 420, 156, 495, 168);
  ctx.bezierCurveTo(604, 186, 650, 250, 628, 328);
  ctx.bezierCurveTo(566, 344, 450, 352, 360, 336);
  ctx.bezierCurveTo(314, 328, 288, 314, 290, 300);
  ctx.fill();

  ctx.strokeStyle = "rgba(212, 232, 255, 0.42)";
  ctx.lineWidth = 3;
  for (let i = 0; i < 12; i += 1) {
    ctx.beginPath();
    ctx.arc(510, 500, 190 + i * 16, -0.38 + i * 0.02, 0.6 + i * 0.01);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(255, 182, 122, 0.62)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(270, 730);
  ctx.lineTo(690, 640);
  ctx.lineTo(790, 720);
  ctx.stroke();

  for (let i = 0; i < 42; i += 1) {
    const x = 110 + ((i * 139) % 720);
    const y = 95 + ((i * 87) % 950);
    ctx.fillStyle = i % 3 ? "rgba(186, 222, 255, 0.32)" : "rgba(255, 187, 126, 0.38)";
    ctx.fillRect(x, y, 2 + (i % 3), 2 + (i % 3));
  }

  await savePng(img, path.join(publicDir, "profile-figure.png"));
}

async function drawProjectThumbs() {
  const projects = [
    ["project-ai-drama.png", "#87cdf8", "#f5a45d"],
    ["project-character.png", "#cfdee7", "#86a3ff"],
    ["project-workflow.png", "#ffc07d", "#6fc8b6"],
  ];
  for (const [file, accent, accent2] of projects) {
    const width = 1200;
    const height = 780;
    const img = PImage.make(width, height);
    const ctx = img.getContext("2d");
    for (let y = 0; y < height; y += 2) {
      ctx.fillStyle = mix("#07080b", "#14191d", y / height);
      ctx.fillRect(0, y, width, 2);
    }
    const g = ctx.createRadialGradient(780, 220, 0, 780, 220, 680);
    g.addColorStop(0, `${accent}66`);
    g.addColorStop(0.35, `${accent2}2b`);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(232, 238, 246, 0.12)";
    ctx.lineWidth = 2;
    for (let i = 0; i < 14; i += 1) {
      ctx.strokeRect(92 + i * 24, 92 + i * 16, 620, 420);
    }

    ctx.fillStyle = "rgba(235, 241, 248, 0.1)";
    ctx.fillRect(760, 120, 280, 460);
    ctx.fillStyle = "rgba(7, 9, 11, 0.74)";
    ctx.fillRect(790, 150, 220, 400);

    ctx.strokeStyle = `${accent}aa`;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(120, 610);
    ctx.bezierCurveTo(260, 460, 405, 650, 560, 500);
    ctx.bezierCurveTo(670, 390, 760, 570, 930, 390);
    ctx.stroke();

    for (let i = 0; i < 110; i += 1) {
      ctx.fillStyle = i % 4 === 0 ? `${accent2}90` : `${accent}70`;
      ctx.fillRect((i * 83) % width, (i * 47) % height, 2, 2);
    }
    await savePng(img, path.join(publicDir, file));
  }
}

(async () => {
  await drawPoster();
  await drawPortrait();
  await drawProjectThumbs();
  await generateHeroVideo();
})();
