/**
 * Generates the one-page motorsports resume PDF.
 *
 *   node scripts/generate-resume-pdf.mjs
 *
 * Output: public/Brooke-Winkler-Resume.pdf  (US Letter, exactly 1 page)
 *
 * Content comes from content/ms-resume.json — the single source of truth shared
 * with the on-screen /resume route. Do not hardcode resume copy in this file.
 *
 * The layout is deliberately deterministic: everything is measured before it is
 * drawn, and the script throws if any column busts the page or a line overruns
 * its column. A resume that silently spills to page 2 is worse than a build
 * error, so this fails loudly instead.
 */
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = `${__dirname}/..`;

const data = JSON.parse(readFileSync(`${ROOT}/content/ms-resume.json`, "utf8"));

/* ---------------------------------------------------------------- palette */
const hex = (h) => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const C = {
  paper: hex("#FAF6EE"),
  paperDeep: hex("#F2ECDF"),
  ink: hex("#1A1E1E"),
  inkSoft: hex("#3D4343"),
  muted: hex("#6D7373"),
  line: hex("#DDD3C0"),
  lineDark: hex("#1A1E1E"),
  accent: hex("#E10600"),
  accentDeep: hex("#A30400"),
  gold: hex("#8A6D1B"),
  white: hex("#FFFFFF"),
};

/* ---------------------------------------------------------------- page geometry */
const PAGE_W = 612;
const PAGE_H = 792;
const M = 36;
const CONTENT_W = PAGE_W - M * 2; // 540
const LEFT_W = 350;
const GUTTER = 20;
const RIGHT_W = CONTENT_W - LEFT_W - GUTTER; // 170
const RIGHT_X = M + LEFT_W + GUTTER; // 406
const BOTTOM = 46;

const BODY = 9.2;
const LH = 11.1;

const doc = await PDFDocument.create();
const font = await doc.embedFont(StandardFonts.Helvetica);
const bold = await doc.embedFont(StandardFonts.HelveticaBold);
const mono = await doc.embedFont(StandardFonts.Courier);
const monoBold = await doc.embedFont(StandardFonts.CourierBold);
const oblique = await doc.embedFont(StandardFonts.HelveticaOblique);

const page = doc.addPage([PAGE_W, PAGE_H]);

/* ---------------------------------------------------------------- diagnostics */
const minY = { left: Infinity, right: Infinity };
const overflows = [];

function guard(x0, x1, rightEdge, tag) {
  if (x1 > rightEdge + 0.75) overflows.push(`${tag}: right edge ${x1.toFixed(1)} > ${rightEdge}`);
}
function noteBottom(col, y, tag) {
  minY[col] = Math.min(minY[col] ?? Infinity, y);
  if (y < BOTTOM) overflows.push(`${tag}: descended to y=${y.toFixed(1)} (bottom ${BOTTOM})`);
}

/* ---------------------------------------------------------------- text metrics */
const wNormal = (t, f, s) => f.widthOfTextAtSize(t, s);
function wTracked(t, f, s, track, xScale = 1) {
  let w = 0;
  for (const ch of t) w += f.widthOfTextAtSize(ch, s) * xScale + track;
  return Math.max(0, w - track);
}
/** Largest size (going down from `start`) at which every string fits `maxW`. */
function fitSize(texts, f, maxW, start, min = 5.6) {
  let s = start;
  while (s > min && texts.some((t) => wNormal(t, f, s) > maxW)) s -= 0.1;
  return s;
}

function wrap(t, f, s, maxW, xScale = 1) {
  const out = [];
  for (const hard of String(t).split("\n")) {
    let cur = "";
    const words = hard.split(/\s+/).filter(Boolean);
    for (const word of words) {
      // Break a word that is itself wider than the column, preferring hyphens.
      const chunks = [];
      if (f.widthOfTextAtSize(word, s) * xScale > maxW) {
        for (const seg of word.split(/(?<=-)/)) {
          if (f.widthOfTextAtSize(seg, s) * xScale <= maxW) {
            chunks.push(seg);
            continue;
          }
          let piece = "";
          for (const ch of seg) {
            if (piece && f.widthOfTextAtSize(piece + ch, s) * xScale > maxW) {
              chunks.push(piece);
              piece = ch;
            } else piece += ch;
          }
          if (piece) chunks.push(piece);
        }
      } else chunks.push(word);
      for (const wd of chunks) {
        const test = cur ? `${cur} ${wd}` : wd;
        if (f.widthOfTextAtSize(test, s) * xScale > maxW && cur) {
          out.push(cur);
          cur = wd;
        } else cur = test;
      }
    }
    out.push(cur);
  }
  return out;
}

/* ---------------------------------------------------------------- drawing primitives */
function tracked(t, { x, y, size, f = bold, color = C.ink, track = 0.35, xScale = 1 }) {
  let cx = x;
  for (const ch of t) {
    page.drawText(ch, { x: cx, y, size, font: f, color, xScale });
    cx += f.widthOfTextAtSize(ch, size) * xScale + track;
  }
  return cx - track;
}

/** Draw a wrapped paragraph, return the y after it. */
function para(t, { x, y, size = BODY, f = font, color = C.inkSoft, maxW, lh = LH, track = 0, xScale = 1, col, tag }) {
  const lines = wrap(t, f, size, maxW, xScale);
  for (const ln of lines) {
    if (track) tracked(ln, { x, y, size, f, color, track, xScale });
    else page.drawText(ln, { x, y, size, font: f, color, xScale });
    if (col) guard(x, x + wNormal(ln, f, size) * xScale + track * ln.length, x + maxW, tag ?? "para");
    y -= lh;
  }
  if (col) noteBottom(col, y, tag ?? "para");
  return y;
}

/* ---------------------------------------------------------------- page furniture */
// paper background
page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: PAGE_H, color: C.paper });

// top livery bar — inset from the page edge so it survives non-bleed printers
page.drawRectangle({ x: 0, y: PAGE_H - 12, width: PAGE_W, height: 4, color: C.accent });
page.drawRectangle({ x: 0, y: PAGE_H - 13.8, width: PAGE_W, height: 1.6, color: C.ink });

/* ---------------------------------------------------------------- header */
let hy = PAGE_H - 44;

const nameSize = 27;
const nameTrack = 1.1;
const nameW = wTracked(data.profile.name.toUpperCase(), bold, nameSize, nameTrack, 0.9);
tracked(data.profile.name.toUpperCase(), {
  x: M,
  y: hy,
  size: nameSize,
  f: bold,
  color: C.ink,
  track: nameTrack,
  xScale: 0.9,
});

// discipline, right-aligned against the content edge
const discSize = 8.6;
const discTrack = 1.5;
const discW = wTracked(data.profile.discipline.toUpperCase(), bold, discSize, discTrack, 0.92);
tracked(data.profile.discipline.toUpperCase(), {
  x: M + CONTENT_W - discW,
  y: hy + 3,
  size: discSize,
  f: bold,
  color: C.accent,
  track: discTrack,
  xScale: 0.92,
});

hy -= 15.5;
hy = para(data.profile.degreeLine, { x: M, y: hy, size: 8.3, font, color: C.inkSoft, maxW: CONTENT_W - 2 });

hy -= 1.5;
// contact strip in mono, dot-separated; auto-fit so it can never overrun the margin
{
  const parts = data.profile.contact.map((c) => c.value);
  let contactText = parts.join("   ·   ");
  let contactSize = 7.2;
  while (parts.length > 1 && wNormal(contactText, mono, contactSize) > CONTENT_W) {
    if (contactSize > 6) contactSize -= 0.1;
    else {
      parts.pop();
      contactText = parts.join("   ·   ");
    }
  }
  page.drawText(contactText, { x: M, y: hy, size: contactSize, font: mono, color: C.muted });
}
hy -= 8;
page.drawText(data.profile.target, { x: M, y: hy, size: 7.2, font: mono, color: C.muted });
hy -= 9;

// double rule
page.drawRectangle({ x: M, y: hy, width: CONTENT_W, height: 1.6, color: C.ink });
page.drawRectangle({ x: M, y: hy - 2.6, width: CONTENT_W, height: 0.6, color: C.line });
hy -= 10;

// telemetry tick band (decorative, deterministic)
{
  const n = 88;
  const step = CONTENT_W / n;
  for (let i = 0; i < n; i++) {
    const h = 2 + ((Math.sin(i * 1.7) + 1) / 2) * 8 + ((i % 7 === 0) ? 3 : 0);
    page.drawRectangle({
      x: M + i * step,
      y: hy - h,
      width: Math.max(1, step - 2.2),
      height: h,
      color: i % 9 === 0 ? C.accent : C.inkSoft,
      opacity: i % 9 === 0 ? 0.75 : 0.22,
    });
  }
  hy -= 14;
}

const BODY_TOP = hy;

/* ---------------------------------------------------------------- column cursors */
const left = { x: M, w: LEFT_W, y: BODY_TOP };
const right = { x: RIGHT_X, w: RIGHT_W, y: BODY_TOP };

/* ---------------------------------------------------------------- section header */
function section(col, label, index) {
  col.y -= 3;
  const y = col.y;
  page.drawRectangle({ x: col.x, y: y - 0.5, width: 4.6, height: 4.6, color: C.accent });
  const labelTrack = 0.9;
  const lw = tracked(label.toUpperCase(), { x: col.x + 9, y, size: 9, f: bold, color: C.ink, track: labelTrack });
  const idx = index != null ? String(index).padStart(2, "0") : null;
  if (idx) {
    const iw = wNormal(idx, monoBold, 6.8);
    page.drawText(idx, { x: col.x + col.w - iw, y: y + 0.3, size: 6.8, font: monoBold, color: C.muted });
  }
  const ruleStart = lw + 7;
  const ruleEnd = col.x + col.w - (idx ? wNormal(idx, monoBold, 6.8) + 7 : 0);
  if (ruleEnd > ruleStart) {
    page.drawLine({ start: { x: ruleStart, y: y + 2 }, end: { x: ruleEnd, y: y + 2 }, thickness: 0.5, color: C.line });
  }
  col.y -= 13.5;
}

/* ---------------------------------------------------------------- experience entry */
function entry(col, r, { bullets = true } = {}) {
  const datesW = wNormal(r.dates, mono, 6.9);
  const roleTrack = 0.1;
  const roleW = wTracked(r.role, bold, 8.8, roleTrack);
  const collides = col.x + roleW + 6 > col.x + col.w - datesW;

  tracked(r.role, { x: col.x, y: col.y, size: 8.8, f: bold, color: C.ink, track: roleTrack });
  if (!collides) {
    page.drawText(r.dates, { x: col.x + col.w - datesW, y: col.y, size: 6.9, font: mono, color: C.muted });
  }
  col.y -= 10;

  const orgLine = `${r.org} · ${r.location}`.toUpperCase();
  tracked(orgLine, { x: col.x, y: col.y, size: 6.9, f: bold, color: C.muted, track: 0.6 });
  if (collides) {
    const dw = wNormal(r.dates, mono, 6.9);
    page.drawText(r.dates, { x: col.x + col.w - dw, y: col.y, size: 6.9, font: mono, color: C.muted });
  }
  col.y -= 10.5;

  if (bullets) {
    for (const b of r.bullets) {
      page.drawRectangle({ x: col.x + 0.8, y: col.y + 1.9, width: 2.7, height: 2.7, color: C.accent });
      col.y = para(b, { x: col.x + 8.5, y: col.y, maxW: col.w - 8.5, col: "left", tag: `bullet:${r.role}` });
      col.y -= 0.6;
    }
  }
  if (r.result) {
    page.drawRectangle({ x: col.x + 1.4, y: col.y + 1.9, width: 2.7, height: 2.7, color: C.gold });
    col.y = para(r.result, {
      x: col.x + 8.5,
      y: col.y,
      size: 7.3,
      f: bold,
      color: C.gold,
      maxW: col.w - 8.5,
      lh: 9,
      col: "left",
      tag: `result:${r.role}`,
    });
  }
  col.y -= 5.5;
}

/* ---------------------------------------------------------------- right-rail card */
function card(col, title, draw) {
  const startY = col.y;
  col.y -= 12; // title room
  const innerX = col.x + 8;
  const innerW = col.w - 16;
  col.y = draw({ x: innerX, w: innerW, y: col.y });
  col.y -= 8;

  // frame drawn last so we know the height
  page.drawRectangle({
    x: col.x,
    y: col.y + 3,
    width: col.w,
    height: startY - col.y - 3,
    color: C.paperDeep,
    opacity: 0.55,
    borderColor: C.line,
    borderWidth: 0.6,
  });
  page.drawRectangle({ x: col.x, y: startY - 2.2, width: col.w, height: 2.2, color: C.accent });
  tracked(title.toUpperCase(), { x: innerX, y: startY - 5, size: 7.8, f: bold, color: C.ink, track: 0.9 });
  return startY;
}

/* ---------------------------------------------------------------- LEFT COLUMN */
// objective with a red spine
{
  const objX = left.x + 9;
  const objW = left.w - 9;
  const topY = left.y;
  left.y = para(data.profile.objective, {
    x: objX,
    y: left.y,
    size: 8.3,
    f: font,
    color: C.inkSoft,
    maxW: objW,
    lh: 10,
    col: "left",
    tag: "objective",
  });
  page.drawRectangle({ x: left.x, y: left.y + 4, width: 2.2, height: topY - left.y - 3, color: C.accent });
  left.y -= 9;
}

section(left, "Race Operations", 1);
for (const r of data.experience) entry(left, r);

section(left, "Strategy & Simulation", 2);
for (const r of data.analysis) entry(left, r);

section(left, "Leadership Under Pressure", 3);
for (const r of data.leadership) entry(left, r);

/* ---------------------------------------------------------------- RIGHT COLUMN */
card(right, "By the Numbers", ({ x, y, w }) => {
  const colW = (w - 10) / 2;
  const rows = Math.ceil(data.stats.length / 2);
  let ry = y;
  for (let r = 0; r < rows; r++) {
    let rowBottom = ry;
    for (let cIdx = 0; cIdx < 2; cIdx++) {
      const s = data.stats[r * 2 + cIdx];
      if (!s) continue;
      const sx = x + cIdx * (colW + 10);
      page.drawText(s.value, { x: sx, y: ry - 1, size: 13.5, font: bold, color: C.accent });
      const vw = wNormal(s.value, bold, 13.5);
      const labelX = sx + vw + 3;
      const labelW = colW - vw - 3;
      const bottom = para(s.label, { x: labelX, y: ry, size: 6.3, f: mono, color: C.muted, maxW: labelW, lh: 7.6, col: "right", tag: "stats" });
      rowBottom = Math.min(rowBottom, bottom);
    }
    ry = rowBottom - 9;
  }
  return ry;
});

card(right, "Education", ({ x, y, w }) => {
  data.education.forEach((e, i) => {
    if (i) y -= 4;
    y = para(e.school, { x, y, size: 8.3, f: bold, color: C.ink, maxW: w, lh: 9.7, col: "right", tag: "edu.school" });
    y = para(e.degree, { x, y, size: 7.6, font, color: C.inkSoft, maxW: w, lh: 9.1, col: "right", tag: "edu.degree" });
    page.drawText(`${e.place}`, { x, y, size: 7, font: mono, color: C.muted });
    const dw = wNormal(e.detail, mono, 7);
    if (x + w - dw > x + 66) page.drawText(e.detail, { x: x + w - dw, y, size: 7, font: mono, color: C.muted });
    else y = para(e.detail, { x, y: y - 8.6, size: 7, f: mono, color: C.muted, maxW: w, lh: 8.6, col: "right", tag: "edu.detail" });
    y -= 10;
  });
  return y;
});

card(right, "Toolkit", ({ x, y, w }) => {
  data.toolkit.forEach((g) => {
    y = para(g.label.toUpperCase(), { x, y, size: 7, f: bold, color: C.accentDeep, maxW: w, lh: 8.8, track: 0.6, col: "right", tag: `toolkit.${g.label}` });
    y = para(g.items.join(" · "), { x, y, size: 7.6, font, color: C.inkSoft, maxW: w, lh: 9.1, col: "right", tag: `toolkit.${g.label}` });
    y -= 3;
  });
  return y;
});

card(right, "Honors", ({ x, y, w }) => {
  for (const h of data.honors) {
    page.drawRectangle({ x, y: y + 2.4, width: 2.4, height: 2.4, color: C.gold });
    y = para(h, { x: x + 7, y, size: 7.6, font, color: C.inkSoft, maxW: w - 7, lh: 9.1, col: "right", tag: "honors" });
    y -= 2;
  }
  return y;
});

card(right, "Coursework", ({ x, y, w }) => {
  y = para(data.coursework.note.toUpperCase(), { x, y, size: 6.6, f: bold, color: C.accentDeep, maxW: w, lh: 8.4, track: 0.5, col: "right", tag: "coursework.note" });
  y -= 0.5;
  y = para(data.coursework.items.join(" · "), { x, y, size: 7.6, font, color: C.inkSoft, maxW: w, lh: 9.1, col: "right", tag: "coursework.items" });
  return y;
});

// Bottom-anchored callout: fills the rail to the page edge with the objective
// and a repeated contact block, so a recruiter never has to scroll back up.
{
  const panelBottom = BOTTOM + 6;
  const panelTop = right.y - 6;
  const panelH = panelTop - panelBottom;
  const pX = 9;
  const textW = right.w - pX * 2;
  const textSize = 7.4;
  const textLH = 9.2;
  const labelSize = 7.2;

  const goalLines = wrap(data.goal.text, font, textSize, textW);
  const contactLines = [data.profile.contact[0].value, data.profile.contact[1].value, data.profile.contact[2].value];
  const contactSize = fitSize(contactLines, mono, textW, 6.8);
  const contactLH = contactSize + 1.6;
  const contentH = labelSize + 5 + goalLines.length * textLH + 10 + 1 + 6 + contactLines.length * contactLH;

  if (panelH >= contentH + 10 && panelH > 44) {
    page.drawRectangle({ x: right.x, y: panelBottom, width: right.w, height: panelH, color: C.ink });
    page.drawRectangle({ x: right.x, y: panelTop - 2.4, width: right.w, height: 2.4, color: C.accent });

    let ty = panelBottom + (panelH + contentH) / 2 - labelSize;
    tracked(data.goal.label.toUpperCase(), { x: right.x + pX, y: ty, size: labelSize, f: bold, color: C.accent, track: 1 });
    ty -= labelSize + 5;

    for (const ln of goalLines) {
      page.drawText(ln, { x: right.x + pX, y: ty, size: textSize, font, color: C.paper });
      ty -= textLH;
    }

    ty -= 4;
    page.drawLine({ start: { x: right.x + pX, y: ty + 3 }, end: { x: right.x + right.w - pX, y: ty + 3 }, thickness: 0.6, color: C.paper, opacity: 0.3 });
    ty -= 6;

    for (const ln of contactLines) {
      page.drawText(ln, { x: right.x + pX, y: ty, size: contactSize, font: mono, color: C.paper, opacity: 0.92 });
      ty -= contactLH;
    }
  } else {
    card(right, data.goal.label, ({ x, y, w }) => para(data.goal.text, { x, y, size: textSize, font, color: C.inkSoft, maxW: w, lh: textLH, col: "right", tag: "goal" }));
  }
}

/* ---------------------------------------------------------------- footer */
page.drawLine({ start: { x: M, y: 34 }, end: { x: PAGE_W - M, y: 34 }, thickness: 0.7, color: C.line });
page.drawRectangle({ x: M, y: 33.2, width: 34, height: 1.6, color: C.accent });
page.drawText("BROOKE WINKLER", { x: M, y: 24, size: 6, font: monoBold, color: C.muted });
const footR = "MECHANICAL ENGINEERING / AEROSPACE ENGINEERING    ·    PAGE 1 / 1";
const frw = wNormal(footR, mono, 6);
page.drawText(footR, { x: PAGE_W - M - frw, y: 24, size: 6, font: mono, color: C.muted });

/* ---------------------------------------------------------------- verify + save */
const pages = doc.getPageCount();
if (pages !== 1) throw new Error(`Expected exactly 1 page, produced ${pages}`);
for (const [col, y] of Object.entries(minY)) {
  if (y < BOTTOM) overflows.push(`${col} column final y=${y.toFixed(1)} below bottom ${BOTTOM}`);
}
if (overflows.length) {
  console.error("Layout failed:");
  for (const o of overflows) console.error("  -", o);
  process.exit(1);
}

doc.setTitle("Brooke Winkler — Mechanical & Aerospace Engineering");
doc.setAuthor("Brooke Winkler");
doc.setSubject("Motorsports engineering resume — Summer 2027");
doc.setKeywords(["mechanical engineering", "aerospace engineering", "motorsports", "Formula 1", "robotics", "engineering internship"]);

const bytes = await doc.save();
const outDirs = ["public"];
let written = 0;
for (const d of outDirs) {
  mkdirSync(`${ROOT}/${d}`, { recursive: true });
  writeFileSync(`${ROOT}/${d}/Brooke-Winkler-Resume.pdf`, bytes);
  written++;
}
console.log(`PDF written: public/Brooke-Winkler-Resume.pdf (${bytes.length} bytes, ${pages} page)`);
console.log(`Layout bottoms → left: ${minY.left.toFixed(1)}, right: ${minY.right.toFixed(1)} (limit ${BOTTOM})`);
