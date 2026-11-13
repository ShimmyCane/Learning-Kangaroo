/* Learning Kangaroo: the Roman numerals presenting sheets.
   Ten chosen problems (data/roman.js, made by tools/make_roman.js), each one sheet printed on both sides, Letter portrait, black and white.
   Front = the problem, Kip's hook, a guess line, a work area and a presenting checklist (no answer).
   Back = the answer, the worked steps drawn like the Roman Numerals tool (coloured bands, tiles, crossed and new letters), the column way in one line and presenting notes: the page for the presenter. It is the only coloured page.
   The steps are a teaching model (split, cross out, merge), not a documented Roman method. */
(function (root) {
  "use strict";
  const { W, H, NAME, draw } = root.LKG;
  const { rect, text, wrap, path, circle, kangaroo, INK, GREY, LIGHT } = draw;
  const sign = op => (op === "+" ? "+" : "−");
  const trim = s => String(s).replace(/\s+/g, " ").trim();
  const CHAR = 0.54;                                   // average character width as a share of the font size
  const fit = (s, w, size) => wrap(s, Math.floor(w / (size * CHAR)));
  const problems = () => (root.LKG_ROMAN ? root.LKG_ROMAN.problems : []);
  const sheets = () => problems().filter(p => p.top).sort((a, b) => a.top - b.top);
  const find = code => sheets().find(p => p.code === String(code || "").toUpperCase().replace(/^LK-/, "")) || null;
  const V = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const valueOf = t => [...t].reduce((n, c, i) => n + (V[c] < (V[t[i + 1]] || 0) ? -V[c] : V[c]), 0);
  const equation = p => p.terms.map((t, i) => (i ? sign(p.ops[i - 1]) + " " : "") + t).join(" ");
  const arabic = p => p.terms.map((t, i) => (i ? sign(p.ops[i - 1]) + " " : "") + valueOf(t)).join(" ") + " = " + p.value;

  function head(p, n, sub) {
    const code = "LK-" + p.code;
    return text(60, 58, NAME + " #" + code + (n === 1 ? " · front" : " · back"), { size: 22, weight: 700 })
      + text(790, 58, "Name ____________", { size: 24, anchor: "end", font: "hand", weight: 400 })
      + kangaroo(82, 140, 62) + text(124, 120, "Roman numerals · Present it " + p.top, { size: 40, font: "hand", weight: 400 })
      + text(124, 150, sub, { size: 22, fill: "#333", weight: 600 });
  }
  const foot = (p, n) => text(425, 1078, `${NAME} #LK-${p.code} · page ${n} of 2 · Roman numerals · our own problems`, { size: 16, anchor: "middle", fill: "#333" });

  const hookLines = p => fit(p.hook, 700, 26 * 0.85);        // the hand font is narrower than the others
  function front(p) {
    let o = `<rect width="${W}" height="${H}" fill="#fff"/>` + head(p, 1, "Read it. Work it out. Then present it out loud!");
    // Kip's hook
    o += rect(50, 172, 750, 108, { rx: 20, w: 3 }) + text(76, 204, "Kip says:", { size: 22, weight: 700 });
    hookLines(p).slice(0, 3).forEach((l, i) => { o += text(76, 236 + i * 30, l, { size: 26, font: "hand", weight: 400 }); });
    // the problem, stacked like a column sum
    const rows = p.terms.length, longest = Math.max(...p.terms.map(t => t.length));
    const size = Math.min(rows > 2 ? 54 : 70, Math.floor(540 / (longest * 0.72))), rowH = Math.round(size * 1.25);
    const top = 296, boxH = Math.round(44 + rows * rowH + size * 1.1 + 24);
    o += rect(50, top, 750, boxH, { rx: 24, w: 4 }) + text(80, top + 34, "The problem", { size: 20, weight: 700, fill: "#555" });
    const signX = 700 - longest * size * 0.7 - 40;
    p.terms.forEach((t, i) => {
      const y = top + 44 + (i + 1) * rowH - 14;
      if (i) o += text(signX, y, sign(p.ops[i - 1]), { size, weight: 700, anchor: "middle" });
      o += text(700, y, t, { size, weight: 700, anchor: "end" });
    });
    const ly = top + 44 + rows * rowH + 2;
    o += path([[signX - size * 0.4, ly], [716, ly]], { w: 5 }) + text(700, ly + size * 0.95, "?", { size, weight: 700, anchor: "end" });
    // guesses
    const gy = top + boxH + 38;
    o += text(60, gy, "My guess: ____________________", { size: 25, font: "hand", weight: 400 })
      + text(790, gy, "Splits I expect: ___  Merges: ___", { size: 25, font: "hand", weight: 400, anchor: "end" });
    // work area
    const wy = gy + 20, wh = 878 - wy;
    o += rect(50, wy, 750, wh, { rx: 20, w: 3, dash: "12 8" }) + text(76, wy + 32, "Work it out here: split, cross out, merge.", { size: 21, weight: 700, fill: "#555" });
    for (let y = wy + 80; y < wy + wh - 16; y += 44) o += path([[76, y], [774, y]], { w: 1.5, c: LIGHT });
    // presenting checklist
    const items = ["Read the problem out loud", "Show each split", "Show each merge", "Say the answer, then pause", "Tell the fun part"];
    o += text(60, 910, "My presenting plan", { size: 23, weight: 700 });
    items.forEach((s, i) => {
      const x = i % 2 ? 440 : 60, y = 947 + Math.floor(i / 2) * 38;
      o += rect(x, y - 21, 23, 23, { rx: 5, w: 3 }) + text(x + 36, y - 2, s, { size: 24, font: "hand", weight: 400 });
    });
    o += text(440, 1023, "Voice loud · Pace slow · Look up", { size: 24, font: "hand", weight: 400 });
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="8.5in" height="11in">${o}${foot(p, 1)}</svg>`;
  }

  // ---------- the solution side: drawn like the Roman Numerals tool ----------
  // Each step is a white row inside a coloured band for its part of the working: orange = get the numbers ready (break apart),
  // pink = take away, blue = the right form. Letters crossed out are struck through, letters swapped out are faded,
  // and new letters sit on their own colour with an underline. This is the only coloured page; the fronts stay black and white.
  const PART = { 1: "#ff9f1c", 2: "#ff4d8d", 3: "#2ec4ff" }, TILE = { I: "#c4eedb", V: "#ffd2b0", X: "#cde8bf", L: "#ffb4ad", C: "#c6e6f8", D: "#e0d4f5", M: "#ffe9a6" };
  const LW = { I: 0.34, V: 0.68, X: 0.68, L: 0.58, C: 0.7, D: 0.74, M: 0.88 };
  const PARTNAME = { 1: "Preparing the left side", 2: "Subtracting", 3: "Correct form" };
  const lw = (ch, u) => [...ch].reduce((n, c) => n + (LW[c] || 0.7) * u, 0);
  const numW = (tiles, u) => tiles.reduce((n, t) => n + lw(t[0], u), 0) + 10;
  const rom = n => ["", "i", "ii", "iii"][n] || String(n);
  const WHITE = "#fff", FAINT = "#aaa";

  // One equation line, right edge at xr, vertical centre at yc, letter size u. Returns { svg, w }.
  function eqLine(e, xr, yc, u, measure) {
    const els = [];   // { w, draw(x) }
    const num = (tiles, box = true) => ({ w: numW(tiles, u), draw: x => {
      let o = box ? rect(x, yc - u * 0.8, numW(tiles, u), u * 1.6, { rx: 6, fill: WHITE, w: 1.6 }) : "", cx = x + 5;
      for (const [ch, st] of tiles) {
        const w = lw(ch, u);
        if (st === "w") o += rect(cx - 1, yc - u * 0.62, w + 2, u * 1.24, { rx: 4, fill: TILE[ch[ch.length - 1]] || "#eee", c: "#2b2540", w: 1 }) + path([[cx, yc + u * 0.68], [cx + w, yc + u * 0.68]], { w: 2, c: "#2b2540" });
        o += text(cx + w / 2, yc + u * 0.36, ch, { size: u, weight: 800, anchor: "middle", fill: st === "g" ? "#ccc" : st === "c" ? FAINT : "#2b2540" });
        if (st === "c") o += path([[cx - 1, yc], [cx + w + 1, yc]], { w: 2, c: "#d8372b" });
        cx += w;
      }
      return o;
    } });
    const op = t => ({ w: u * 0.9 + 6, draw: x => text(x + (u * 0.9 + 6) / 2, yc + u * 0.36, t, { size: u * 1.05, weight: 800, anchor: "middle", fill: "#2b2540" }) });
    const ask = { w: u * 0.8 + 10, draw: x => rect(x, yc - u * 0.8, u * 0.8 + 10, u * 1.6, { rx: 6, fill: WHITE, w: 1.6, dash: "4 3" }) + text(x + (u * 0.8 + 10) / 2, yc + u * 0.36, "?", { size: u, weight: 800, anchor: "middle", fill: FAINT }) };
    const left = e.items.map(it => it[0] === "op" ? op(it[1] === "-" ? "−" : it[1]) : num(it[1]));
    const group = (list, on, fill) => ({ w: list.reduce((n, x) => n + x.w + 4, 0) + 8, draw: x => {
      let o = on ? rect(x, yc - u * 0.98, list.reduce((n, q) => n + q.w + 4, 0) + 8, u * 1.96, { rx: 9, fill, c: "#1f4fa8", w: 1.6 }) : "", cx = x + 4;
      for (const q of list) { o += q.draw(cx); cx += q.w + 4; } return o;
    } });
    els.push(group(left, e.focus === "left", TILE.M));
    if (e.result) { els.push(op("=")); els.push({ w: lw(e.result, u) + 14, draw: x => rect(x, yc - u * 0.8, lw(e.result, u) + 14, u * 1.6, { rx: 6, fill: "#cde8bf", w: 1.6 }) + text(x + 7, yc + u * 0.36, e.result, { size: u, weight: 800, fill: "#2b2540" }) }); }
    else if (e.right) { els.push(op("=")); els.push(group([e.right === "ask" ? ask : num(e.right)], e.focus === "right", TILE.M)); }
    const w = els.reduce((n, x) => n + x.w + 3, 0);
    if (measure) return { w };
    let x = xr - w, o = "";
    for (const q of els) { o += q.draw(x); x += q.w + 3; }
    return { svg: o, w };
  }

  // Steps → bands. Returns drawing items and where they end, in the biggest size that fits.
  function layoutSteps(p, top, bottom) {
    const rows = [];
    p.way1.forEach((label, i) => { if (p.eqs1[i]) rows.push({ label: trim(label), e: p.eqs1[i] }); });
    let n = 0;
    const multi = p.terms.length > 2;
    for (const u of [22, 20, 18, 17, 16, 15, 14, 13, 12, 11, 10]) {
      const widest = Math.ceil(Math.max(...rows.map(r => eqLine(r.e, 0, 0, u, true).w))) + 4;
      if (widest > 470 && u > 10) continue;          // keep one letter size on the sheet unless it is the smallest
      const X0 = 56, X1 = 794, EQW = Math.min(470, widest), capW = X1 - X0 - 34 - EQW - 24, capSize = Math.min(15, Math.max(11, u - 2)), capLH = capSize * 1.2;
     for (const pad of [12, 8, 4, 0]) {
      let y = top; const out = []; let cur = null;
      for (const r of rows) {
        const key = r.e.sum + ":" + r.e.part, lines = fit(r.label, capW, capSize), h = Math.max(u * 1.9, lines.length * capLH + 6) + pad;
        if (!cur || cur.key !== key) {
          if (cur) { cur.end = y; y += 8; }
          cur = { key, part: r.e.part, y0: y, rows: [] };
          const sumLabel = multi && r.e.sum ? "Sum " + r.e.sum + " · " : "";
          cur.title = sumLabel + "Part " + rom(r.e.part) + ": " + (r.e.name || PARTNAME[r.e.part]); out.push(cur); y += 24;
        }
        let w = u, fit1 = true;
        while (eqLine(r.e, 0, 0, w, true).w > EQW && w > 8) w -= 0.5;
        cur.rows.push({ y: y + 2, h, lines, e: r.e, u: w, capSize, capLH }); y += h + 4;
      }
      if (cur) { cur.end = y; }
      y += 2;
      if (y <= bottom) return { u, bands: out, end: y, X0, X1, EQW };
     }
    }
    throw new Error(p.code + ": the steps do not fit on the back");
  }
  const columns = p => {
    const keep = p.way2.map(trim).filter(t => /^(Ones|Tens|Hundreds|Thousands|Put the columns together)/.test(t) && / = [IVXLCDM]+\.?$/.test(t));
    return keep.join("  ·  ");
  };
  function back(p) {
    let o = `<rect width="${W}" height="${H}" fill="#fff"/>` + head(p, 2, "The answer, step by step, and the presenting notes.");
    const eq = equation(p) + " = " + p.answer, size = Math.min(50, Math.floor(700 / (eq.length * 0.7)));
    o += rect(50, 170, 750, 56, { rx: 16, w: 4 }) + text(425, 170 + 39, eq, { size: Math.min(size, 38), weight: 700, anchor: "middle" });
    o += text(425, 246, "Check (for the presenter): " + arabic(p), { size: 17, weight: 600, fill: "#444", anchor: "middle" });
    // key
    [[PART[1], "break apart / get ready"], [PART[2], "take away"], [PART[3], "the right form"]].forEach(([c, t], i) => {
      const x = 90 + i * 240; o += rect(x, 258, 22, 16, { rx: 4, fill: c, w: 1.6 }) + text(x + 30, 271, t, { size: 15, weight: 600 });
    });
    const notesTop = 960, lay = layoutSteps(p, 284, notesTop - 52);
    let stepNo = 0;
    for (const b of lay.bands) {
      o += rect(lay.X0, b.y0, lay.X1 - lay.X0, b.end - b.y0, { rx: 12, fill: PART[b.part], w: 1.8 }) + text(lay.X0 + 12, b.y0 + 17, b.title, { size: 14, weight: 800, fill: "#2b2540" });
      for (const r of b.rows) {
        o += rect(lay.X0 + 6, r.y, lay.X1 - lay.X0 - 12, r.h, { rx: 8, fill: "#fff", w: 1.4 });
        const yc = r.y + r.h / 2;
        o += circle(lay.X0 + 22, yc, 9, { fill: TILE.M, w: 1.4 }) + text(lay.X0 + 22, yc + 4, String(++stepNo), { size: 11, weight: 800, anchor: "middle" });
        const top0 = yc - r.lines.length * r.capLH / 2;
        r.lines.forEach((l, i) => { o += text(lay.X0 + 38, top0 + (i + 0.8) * r.capLH, l, { size: r.capSize, weight: 600, fill: "#2b2540" }); });
        o += eqLine(r.e, lay.X1 - 12, yc, r.u).svg;
      }
    }
    // the same sum by column, in one line
    const col = fit("By column, ones first:  " + columns(p), 730, 13).slice(0, 2);
    col.forEach((l, i) => { o += text(60, notesTop - 30 + i * 16, l, { size: 13, weight: 600, fill: "#333" }); });
    // presenting notes
    o += rect(50, notesTop, 750, 102, { rx: 16, w: 3 });
    let y = notesTop + 24;
    for (const [label, t] of [["Slow down", p.watch], ["Why it is fun", p.why]]) {
      o += text(70, y, label + ":", { size: 16, weight: 700 });
      const ls = fit(t, 600, 15).slice(0, 2); ls.forEach((l, i) => { o += text(178, y + i * 18, l, { size: 15, weight: 500 }); });
      y += Math.max(1, ls.length) * 18 + 8;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="8.5in" height="11in">${o}${foot(p, 2)}</svg>`;
  }

  root.LKG_ROMAN_SHEETS = { sheets, find, front, back, pages: p => [front(p), back(p)], equation, valueOf, hookLines };
})(typeof window !== "undefined" ? window : globalThis);
