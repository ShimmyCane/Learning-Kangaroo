/* Learning Kangaroo: the worksheet engine.
   A worksheet is one sheet of paper printed on both sides: page 1 (front) has questions 1–2, page 2 (back) has 3–4.
   Questions live in data/questions.js. Each has a picture (art), five choices A–E and one answer.
   Pages are Letter portrait SVG, 850 × 1100 units (1/100 inch), black and white. No answers on the kids' pages. */
(function (root) {
  "use strict";
  const W = 850, H = 1100, INK = "#111", GREY = "#8c8c8c", LIGHT = "#d4d4d4";
  const NAME = "Learning Kangaroo";
  const LETTERS = "ABCDE";
  const f = n => Math.round(n * 10) / 10;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const deg = a => a * Math.PI / 180;

  // ---------- drawing ----------
  const path = (pts, o = {}) => `<path d="M${pts.map(p => f(p[0]) + " " + f(p[1])).join(" L")}${o.close ? " Z" : ""}" fill="${o.fill || "none"}" stroke="${o.c || INK}" stroke-width="${o.w || 4}" stroke-linecap="round" stroke-linejoin="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}/>`;
  const circle = (x, y, r, o = {}) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${o.fill || "none"}" stroke="${o.c || INK}" stroke-width="${o.w == null ? 4 : o.w}"/>`;
  const ell = (x, y, rx, ry, o = {}) => `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(rx)}" ry="${f(ry)}" fill="${o.fill || "none"}" stroke="${o.c || INK}" stroke-width="${o.w || 4}"/>`;
  const rect = (x, y, w, h, o = {}) => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${o.rx || 0}" fill="${o.fill || "none"}" stroke="${o.c || INK}" stroke-width="${o.w || 4}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ""}/>`;
  function text(x, y, s, o = {}) {
    const fam = o.font === "hand" ? "'Patrick Hand', 'Comic Sans MS', cursive" : "Quicksand, Arial, sans-serif";
    return `<text x="${f(x)}" y="${f(y)}" text-anchor="${o.anchor || "start"}" font-family="${fam}" font-size="${o.size || 26}" font-weight="${o.weight || 600}" fill="${o.fill || INK}">${esc(s)}</text>`;
  }
  function wrap(s, max) {
    const out = []; let line = "";
    for (const w of String(s).split(" ")) { if ((line + " " + w).trim().length > max) { out.push(line.trim()); line = w; } else line += " " + w; }
    if (line.trim()) out.push(line.trim());
    return out;
  }

  // ---------- small pictures (centered at x, y, about s tall) ----------
  function kangaroo(x, y, s, label) {   // Kip: our own simple kangaroo, facing right, feet on y, about s tall
    const k = s / 100, w = Math.max(2.5, 3.6 * Math.min(1, k * 1.4));
    const P = (px, py) => [x + (px - 30) * k, y - 100 * k + py * k];
    const E = (px, py, rx, ry, rot) => { const [cx, cy] = P(px, py); return `<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(rx * k)}" ry="${f(ry * k)}" transform="rotate(${rot} ${f(cx)} ${f(cy)})" fill="#fff" stroke="${INK}" stroke-width="${w}"/>`; };
    let o = path([P(28, 72), P(-14, 99), P(30, 88)], { w, close: true, fill: "#fff" })   // tail
      + E(52, 13, 3.5, 10, -12) + E(58, 13, 3.5, 10, 8)                                // ears
      + E(42, 60, 19, 29, -14)                                                          // body
      + E(36, 82, 16, 14, 0)                                                            // haunch
      + path([P(30, 93), P(72, 99), P(28, 99)], { w, close: true, fill: "#fff" })       // big foot
      + E(57, 27, 11, 9, 10) + path([P(64, 26), P(72, 31), P(64, 33)], { w })           // head and snout
      + `<circle cx="${f(P(58, 24)[0])}" cy="${f(P(58, 24)[1])}" r="${f(Math.max(1.6, 2 * k))}" fill="${INK}"/>`
      + path([P(52, 50), P(62, 58), P(66, 63)], { w });                                // arm
    if (label) o += text(x, y + 30, label, { size: 24, anchor: "middle", weight: 700 });
    return o;
  }
  const apple = (x, y, r = 16) => circle(x, y, r, { w: 3.5 }) + path([[x, y - r], [x + 3, y - r - 9]], { w: 3 });
  const ball = (x, y, r = 22) => circle(x, y, r) + path([[x - r, y], [x + r, y]], { w: 3 }) + `<path d="M${f(x)} ${f(y - r)} Q${f(x + r * 0.7)} ${f(y)} ${f(x)} ${f(y + r)}" fill="none" stroke="${INK}" stroke-width="3"/>`;
  const cupcake = (x, y, crossed) => path([[x - 22, y - 4], [x - 16, y + 26], [x + 16, y + 26], [x + 22, y - 4]], { close: true, w: 3.5 }) + `<path d="M${x - 24} ${y - 4} Q${x - 24} ${y - 30} ${x} ${y - 30} Q${x + 24} ${y - 30} ${x + 24} ${y - 4} Z" fill="none" stroke="${INK}" stroke-width="3.5"/>` + circle(x, y - 34, 5, { w: 3 }) + (crossed ? path([[x - 30, y - 40], [x + 30, y + 32]], { w: 5 }) + path([[x + 30, y - 40], [x - 30, y + 32]], { w: 5 }) : "");
  const coin = (x, y) => circle(x, y, 20, { w: 3.5 }) + circle(x, y, 13, { w: 2 });
  function shape(kind, x, y, r) {
    const poly = pts => path(pts.map(([a, b]) => [x + a * r, y + b * r]), { close: true });
    switch (kind) {
      case "circle": return circle(x, y, r);
      case "square": return rect(x - r * 0.85, y - r * 0.85, r * 1.7, r * 1.7);
      case "triangle": return poly([[0, -1], [0.95, 0.75], [-0.95, 0.75]]);
      case "oval": return ell(x, y, r, r * 0.6);
      case "pentagon": return poly([0, 1, 2, 3, 4].map(i => [Math.cos(deg(-90 + i * 72)), Math.sin(deg(-90 + i * 72))]));
      case "star": return poly([...Array(10)].map((_, i) => { const q = i % 2 ? 0.42 : 1; return [q * Math.cos(deg(-90 + i * 36)), q * Math.sin(deg(-90 + i * 36))]; }));
      case "heart": { const pts = []; for (let i = 0; i <= 48; i++) { const t = i / 48 * 2 * Math.PI; pts.push([16 * Math.pow(Math.sin(t), 3) / 17, -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 17 - 0.1]); } return poly(pts); }
    }
    return "";
  }
  function dots(n, x, y, r = 8, gap = 26) {   // n dots in a neat group
    const cols = n <= 3 ? n : Math.ceil(n / 2), rows = Math.ceil(n / cols); let o = "";
    for (let i = 0; i < n; i++) { const c = i % cols, rr = Math.floor(i / cols); o += `<circle cx="${f(x + (c - (cols - 1) / 2) * gap)}" cy="${f(y + (rr - (rows - 1) / 2) * gap)}" r="${r}" fill="${INK}"/>`; }
    return o;
  }
  const PIPS = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] };
  const die = (n, x, y, s = 90) => rect(x - s / 2, y - s / 2, s, s, { rx: 14 }) + PIPS[n].map(([a, b]) => `<circle cx="${f(x + a * s * 0.28)}" cy="${f(y + b * s * 0.28)}" r="${f(s * 0.08)}" fill="${INK}"/>`).join("");
  function flower(n, x, y, r = 34) {
    let o = "";
    for (let i = 0; i < n; i++) { const a = deg(-90 + i * 360 / n); o += ell(x + Math.cos(a) * r * 0.62, y + Math.sin(a) * r * 0.62, r * 0.36, r * 0.36, { w: 3 }); }
    return o + circle(x, y, r * 0.3, { fill: "#fff", w: 3 }) + path([[x, y + r * 0.95], [x, y + r * 2.1]], { w: 3 });
  }
  function hen(x, y) { return ell(x, y, 26, 18, { w: 3.5 }) + circle(x + 22, y - 18, 10, { w: 3.5 }) + path([[x + 31, y - 19], [x + 39, y - 16], [x + 31, y - 13]], { w: 3 }) + path([[x - 4, y + 17], [x - 6, y + 34]], { w: 3 }) + path([[x + 6, y + 17], [x + 8, y + 34]], { w: 3 }) + path([[x - 26, y - 4], [x - 36, y - 16]], { w: 3 }); }
  function dog(x, y) { return rect(x - 30, y - 16, 56, 26, { rx: 12, w: 3.5 }) + circle(x + 32, y - 20, 13, { w: 3.5 }) + path([[x + 26, y - 30], [x + 22, y - 12]], { w: 3 }) + [-22, -8, 8, 20].map(a => path([[x + a, y + 10], [x + a, y + 32]], { w: 3 })).join("") + path([[x - 30, y - 10], [x - 42, y - 24]], { w: 3 }); }
  function clock(h, x, y, r = 85) {
    let o = circle(x, y, r, { w: 5 });
    for (let i = 1; i <= 12; i++) { const a = deg(-90 + i * 30); o += text(x + Math.cos(a) * r * 0.78, y + Math.sin(a) * r * 0.78 + 8, String(i), { size: 22, anchor: "middle", weight: 700 }); }
    const ah = deg(-90 + h * 30);
    return o + path([[x, y], [x + Math.cos(ah) * r * 0.45, y + Math.sin(ah) * r * 0.45]], { w: 7 }) + path([[x, y], [x, y - r * 0.68]], { w: 4 }) + `<circle cx="${x}" cy="${y}" r="6" fill="${INK}"/>`;
  }
  function numberLine(x0, x1, y, max, jumps = [], kip = 0) {
    const step = (x1 - x0) / max; let o = path([[x0 - 10, y], [x1 + 10, y]], { w: 4 });
    for (let i = 0; i <= max; i++) o += path([[x0 + i * step, y - 10], [x0 + i * step, y + 10]], { w: 3 }) + text(x0 + i * step, y + 38, String(i), { size: 22, anchor: "middle", weight: 700 });
    for (const [a, b] of jumps) { const xa = x0 + a * step, xb = x0 + b * step, top = y - 22 - Math.abs(b - a) * 12; o += `<path d="M${f(xa)} ${y - 14} Q${f((xa + xb) / 2)} ${f(top - 20)} ${f(xb)} ${y - 14}" fill="none" stroke="${INK}" stroke-width="3" stroke-dasharray="8 6"/>` + path([[xb - 6, y - 26], [xb, y - 14], [xb + 7, y - 25]], { w: 3 }); }
    return o + kangaroo(x0 + kip * step, y - 16, 60);
  }
  const cube = (x, y, s = 44) => rect(x - s / 2, y - s / 2, s, s, { w: 3.5 }) + path([[x - s / 2, y - s / 2], [x - s / 4, y - s * 0.8], [x + s * 0.75, y - s * 0.8], [x + s / 2, y - s / 2]], { w: 3.5 }) + path([[x + s * 0.75, y - s * 0.8], [x + s * 0.75, y + s * 0.2], [x + s / 2, y + s / 2]], { w: 3.5 });
  function balance(x, y, leftSvg, rightSvg) {
    return path([[x, y + 70], [x, y]], { w: 5 }) + path([[x - 60, y + 74], [x + 60, y + 74]], { w: 5 }) + path([[x - 190, y], [x + 190, y]], { w: 5 })
      + path([[x - 230, y + 20], [x - 150, y + 20]], { w: 4 }) + path([[x - 190, y], [x - 230, y + 20]], { w: 2.5 }) + path([[x - 190, y], [x - 150, y + 20]], { w: 2.5 })
      + path([[x + 150, y + 20], [x + 230, y + 20]], { w: 4 }) + path([[x + 190, y], [x + 150, y + 20]], { w: 2.5 }) + path([[x + 190, y], [x + 230, y + 20]], { w: 2.5 })
      + leftSvg + rightSvg;
  }

  // ---------- question pictures: art.kind → drawing inside the box (x, y, w, h) ----------
  const ART = {
    tree({ n }, x, y, w, h) { const cx = x + w / 2; let o = rect(cx - 16, y + h - 80, 32, 80, { w: 4 }) + `<path d="M${cx - 150} ${y + h - 80} Q${cx - 170} ${y + 10} ${cx} ${y + 6} Q${cx + 170} ${y + 10} ${cx + 150} ${y + h - 80} Z" fill="none" stroke="${INK}" stroke-width="4"/>`; const spots = [[-90, 50], [-30, 35], [40, 45], [100, 60], [-60, 100], [10, 95], [80, 110], [-110, 120], [-10, 140]]; for (let i = 0; i < n; i++) o += apple(cx + spots[i][0], y + spots[i][1]); return o; },
    sequence({ items, blanks = 1 }, x, y, w, h) { const n = items.length + blanks, gap = Math.min(110, w / n), x0 = x + w / 2 - gap * (n - 1) / 2; let o = ""; items.forEach((k, i) => { o += typeof k === "number" ? dots(k, x0 + i * gap, y + h / 2, 7, 20) : shape(k, x0 + i * gap, y + h / 2, 36); }); for (let j = 0; j < blanks; j++) { const cx = x0 + (items.length + j) * gap; o += rect(cx - 42, y + h / 2 - 42, 84, 84, { rx: 10, dash: "9 7" }) + text(cx, y + h / 2 + 16, "?", { size: 46, anchor: "middle", weight: 700 }); } return o; },
    roos({ heights }, x, y, w, h) { const gap = w / heights.length; return heights.map((ht, i) => kangaroo(x + gap * (i + 0.5) - 6, y + h - 34, ht * 1.7, LETTERS[i])).join("") + path([[x + 10, y + h - 34], [x + w - 10, y + h - 34]], { w: 3, c: GREY }); },
    addBalls({ a, b }, x, y, w, h) { const cy = y + h / 2; let o = ""; for (let i = 0; i < a; i++) o += ball(x + 120 + i * 60, cy); o += text(x + 120 + a * 60 + 10, cy + 16, "+", { size: 54, anchor: "middle", weight: 700 }); for (let i = 0; i < b; i++) o += ball(x + 120 + a * 60 + 70 + i * 60, cy); return o; },
    shapeMix({ list }, x, y, w, h) { return list.map(([k, px, py, r]) => shape(k, x + px * w / 100, y + py * h / 100, r || 30)).join(""); },
    numberLine({ max, jumps, kip }, x, y, w, h) { return numberLine(x + 40, x + w - 40, y + h - 50, max, jumps, kip); },
    cupcakes({ n, eaten }, x, y, w, h) { let o = ell(x + w / 2, y + h / 2 + 36, 70 * n / 2 + 40, 22, { w: 3.5 }); for (let i = 0; i < n; i++) o += cupcake(x + w / 2 + (i - (n - 1) / 2) * 76, y + h / 2, i >= n - eaten); return o; },
    flowers({ petals }, x, y, w, h) { const gap = w / petals.length; return petals.map((p, i) => flower(p, x + gap * (i + 0.5), y + 48) + text(x + gap * (i + 0.5), y + h - 4, LETTERS[i], { size: 26, anchor: "middle", weight: 700 })).join(""); },
    dice({ a, b }, x, y, w, h) { return die(a, x + w / 2 - 80, y + h / 2) + die(b, x + w / 2 + 80, y + h / 2); },
    die({ n }, x, y, w, h) { return die(n, x + w / 2, y + h / 2, 120); },
    squares({ n }, x, y, w, h) { const s = Math.min(h - 20, 180), x0 = x + w / 2 - s / 2, y0 = y + h / 2 - s / 2; let o = rect(x0, y0, s, s, { w: 5 }); for (let i = 1; i < n; i++) o += path([[x0 + i * s / n, y0], [x0 + i * s / n, y0 + s]], { w: 5 }) + path([[x0, y0 + i * s / n], [x0 + s, y0 + i * s / n]], { w: 5 }); return o; },
    cells({ cells }, x, y, w, h) { const c = 48, maxX = Math.max(...cells.map(q => q[0])) + 1, maxY = Math.max(...cells.map(q => q[1])) + 1, x0 = x + w / 2 - maxX * c / 2, y0 = y + h / 2 - maxY * c / 2; return cells.map(([i, j]) => rect(x0 + i * c, y0 + j * c, c, c, { w: 4 })).join(""); },
    line({ marked, label }, x, y, w, h) { const cy = y + h - 34; let o = path([[x + 20, cy], [x + w - 20, cy]], { w: 3, c: GREY }); o += text(x + 40, cy - 40, "front", { size: 22, weight: 700 }) + text(x + w - 40, cy - 40, "back", { size: 22, anchor: "end", weight: 700 }); [x + 140, x + 230, x + w / 2, x + w - 230, x + w - 140].forEach((px, i) => { o += i === 2 ? kangaroo(px, cy, 120, label) : text(px, cy - 40, "…", { size: 50, anchor: "middle", weight: 700 }); }); return o; },
    clock({ h: hr }, x, y, w, h) { return clock(hr, x + w / 2, y + h / 2); },
    coins({ n }, x, y, w, h) { let o = ""; for (let i = 0; i < n; i++) o += coin(x + w / 2 + (i % 5 - 2) * 54, y + h / 2 - 28 + Math.floor(i / 5) * 56); return o; },
    balance(_, x, y, w, h) { const cx = x + w / 2, by = y + 40; return balance(cx, by, cube(cx - 190, by - 6), ball(cx + 165, by - 6, 18) + ball(cx + 210, by - 6, 18)) + text(cx, y + h - 6, "1 cube weighs the same as 2 balls", { size: 22, anchor: "middle" }); },
    splitTriangle(_, x, y, w, h) { const cx = x + w / 2; return path([[cx, y + 10], [cx + 150, y + h - 10], [cx - 150, y + h - 10]], { close: true, w: 5 }) + path([[cx, y + 10], [cx + 40, y + h - 10]], { w: 5 }); },
    farm({ hens, dogs }, x, y, w, h) { let o = ""; for (let i = 0; i < hens; i++) o += hen(x + 100 + i * 110, y + h / 2); for (let i = 0; i < dogs; i++) o += dog(x + 100 + hens * 110 + 30 + i * 130, y + h / 2); return o; },
    growing({ counts }, x, y, w, h) { const c = 30, gap = w / (counts.length + 1); let o = ""; counts.forEach((n, k) => { const cx = x + gap * (k + 0.5) + 20; for (let i = 0; i < n; i++) o += rect(cx - n * c / 2 + i * c, y + h / 2 - c / 2, c, c, { w: 3.5 }); o += text(cx, y + h / 2 + 52, String(k + 1), { size: 22, anchor: "middle", weight: 700 }); }); const cx = x + gap * (counts.length + 0.5) + 20; return o + rect(cx - 50, y + h / 2 - 40, 100, 80, { rx: 10, dash: "9 7" }) + text(cx, y + h / 2 + 14, "?", { size: 44, anchor: "middle", weight: 700 }) + text(cx, y + h / 2 + 72, String(counts.length + 1), { size: 22, anchor: "middle", weight: 700 }); },
    names({ names }, x, y, w, h) { const gap = w / names.length; return names.map((n, i) => kangaroo(x + gap * (i + 0.5), y + h - 40, 140, n)).join("") + rect(x + 20, y + h - 110, w - 40, 70, { fill: "#fff", w: 4 }); },
    missing({ list }, x, y, w, h) { const gap = w / list.length; return list.map((v, i) => v === null ? rect(x + gap * (i + 0.5) - 40, y + h / 2 - 40, 80, 80, { rx: 10, dash: "9 7" }) : text(x + gap * (i + 0.5), y + h / 2 + 18, String(v), { size: 50, anchor: "middle", weight: 700 })).join("") + [...Array(list.length - 1)].map((_, i) => text(x + gap * (i + 1), y + h / 2 + 18, ",", { size: 50, anchor: "middle" })).join(""); }
  };
  function choiceSvg(c, x, y, w, h) {
    if (c && typeof c === "object" && c.shape) return shape(c.shape, x + w / 2, y + h / 2, 30);
    if (c && typeof c === "object" && c.dots) return dots(c.dots, x + w / 2, y + h / 2, 7, 20);
    if (c && typeof c === "object" && c.see) return text(x + w / 2, y + h / 2 + 10, "(" + c.see + ")", { size: 22, anchor: "middle", fill: "#555" });
    const s = String(c);
    return text(x + w / 2, y + h / 2 + (s.length > 6 ? 8 : 14), s, { size: s.length > 9 ? 19 : s.length > 6 ? 23 : 40, anchor: "middle", weight: 700 });
  }

  // ---------- one question in a block ----------
  function question(q, num, y0, y1) {
    let o = rect(50, y0, 750, y1 - y0, { rx: 20, w: 3 });
    o += circle(92, y0 + 42, 26, { w: 3.5 }) + text(92, y0 + 54, String(num), { size: 32, anchor: "middle", weight: 700 });
    o += text(780, y0 + 36, q.points + " points", { size: 20, anchor: "end", weight: 700, fill: "#555" });
    const lines = wrap(q.text, 46);
    lines.forEach((l, i) => { o += text(134, y0 + 52 + i * 36, l, { size: 29, font: "hand", weight: 400 }); });
    const artTop = y0 + 52 + lines.length * 36, choiceTop = y1 - 112, artH = choiceTop - artTop - 14;
    if (q.art && ART[q.art.kind]) o += ART[q.art.kind](q.art, 90, artTop, 670, artH);
    const cw = 126, gap = (690 - cw * 5) / 4;
    q.choices.forEach((c, i) => {
      const x = 80 + i * (cw + gap);
      o += rect(x, choiceTop + 18, cw, 78, { rx: 12, w: 3 }) + circle(x + 20, choiceTop + 18, 16, { fill: "#fff", w: 3 }) + text(x + 20, choiceTop + 25, LETTERS[i], { size: 20, anchor: "middle", weight: 700 });
      o += choiceSvg(c, x, choiceTop + 18, cw, 78);
    });
    return o;
  }

  const TRACKS = { J: { name: "Joey", about: "kindergarten: counting, shapes, patterns" }, R: { name: "Roo", about: "grade 2: number sense, logic, shapes" }, W: { name: "Wallaby", about: "grade 3: multi-step logic and counting" }, F: { name: "Flyer", about: "grade 4: sums, time and constraints" }, B: { name: "Boomer", about: "grade 5: puzzles that need a plan" } };
  const codeOf = s => "LK-" + s.code;
  // page = 1 (front: questions 1–2) or 2 (back: questions 3–4)
  function page(sheet, n) {
    const qs = sheet.questions.slice((n - 1) * 2, n * 2);
    const code = codeOf(sheet), track = TRACKS[sheet.code[0]];
    const footer = `${NAME} #${code} · page ${n} of 2 · ${track.name} track · our own questions in the Math Kangaroo style`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="8.5in" height="11in">
<rect width="${W}" height="${H}" fill="#fff"/>
${text(60, 58, NAME + " #" + code + (n === 1 ? " · front" : " · back"), { size: 22, weight: 700 })}${text(790, 58, "Name ____________", { size: 24, anchor: "end", font: "hand", weight: 400 })}
${kangaroo(82, 140, 62)}${text(124, 120, track.name + " · " + sheet.title, { size: 42, font: "hand", weight: 400 })}
${text(124, 150, n === 1 ? "Circle the letter of your answer. Use the space to think!" : "Two more. You can do it!", { size: 22, fill: "#333", weight: 600 })}
${question(qs[0], (n - 1) * 2 + 1, 175, 600)}
${question(qs[1], (n - 1) * 2 + 2, 620, 1040)}
${text(425, 1076, footer, { size: 17, anchor: "middle", fill: "#333" })}
</svg>`;
  }
  const pages = sheet => [page(sheet, 1), page(sheet, 2)];

  root.LKG = { W, H, NAME, LETTERS, TRACKS, codeOf, page, pages, ART };
})(typeof window !== "undefined" ? window : globalThis);
