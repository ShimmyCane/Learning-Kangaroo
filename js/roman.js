/* Learning Kangaroo: the Roman numerals presenting sheets.
   Ten chosen problems (data/roman.js, made by tools/make_roman.js), each one sheet printed on both sides, Letter portrait, black and white.
   Front = the problem, Kip's hook, a guess line, a work area and a presenting checklist (no answer).
   Back = the answer, the worked steps (two ways) and presenting notes: the page for the presenter, not the one to hand out first.
   The steps are a teaching model (split, cross out, merge), not a documented Roman method. */
(function (root) {
  "use strict";
  const { W, H, NAME, draw } = root.LKG;
  const { rect, text, wrap, path, kangaroo, INK, GREY, LIGHT } = draw;
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

  // Back: the steps in the biggest size that fits above the notes. One column when there is room, else two side by side.
  function layoutSteps(p, top, bottom) {
    // One block of numbered steps starting at y0; returns where it ends.
    const block = (out, size, title, steps, x0, w, y0) => {
      const lh = Math.round(size * 1.28); let y = y0, k = 0;
      out.push({ y: y + 6, title, x: x0, w }); y += 32;
      for (const raw of steps) {
        const s = trim(raw);
        if (s.startsWith("§")) { y += 4; out.push({ y: y + size, head: "Sum: " + s.slice(1).trim(), x: x0 }); y += lh + 2; continue; }
        const ls = fit(s, w - 34, size);
        out.push({ y: y + size, num: ++k, x: x0 });
        ls.forEach((l, i) => out.push({ y: y + size + i * lh, line: l, x: x0 + 34 }));
        y += ls.length * lh + 3;
      }
      return y + 10;
    };
    const T1 = "Way 1 · split, cross out, merge", T2 = "Way 2 · by column, ones first";
    for (const [cols, sizes] of [[1, [19, 18, 17, 16]], [2, [17, 16, 15, 14, 13]]]) {
      for (const size of sizes) {
        const items = [];
        const end = cols === 1
          ? block(items, size, T2, p.way2, 60, 730, block(items, size, T1, p.way1, 60, 730, top))
          : Math.max(block(items, size, T1, p.way1, 60, 410, top), block(items, size, T2, p.way2, 490, 300, top));
        if (end <= bottom) return { size, items, end };
      }
    }
    throw new Error(p.code + ": the steps do not fit on the back");
  }
  function back(p) {
    let o = `<rect width="${W}" height="${H}" fill="#fff"/>` + head(p, 2, "The answer and the presenting notes.");
    const eq = equation(p) + " = " + p.answer, size = Math.min(50, Math.floor(700 / (eq.length * 0.7)));
    o += rect(50, 172, 750, 76, { rx: 20, w: 4 }) + text(425, 172 + 50, eq, { size, weight: 700, anchor: "middle" });
    o += text(425, 272, "Check (for the presenter): " + arabic(p), { size: 18, weight: 600, fill: "#444", anchor: "middle" });
    const notesTop = 872, lay = layoutSteps(p, 286, notesTop - 12);
    for (const it of lay.items) {
      if (it.title) o += text(it.x, it.y + 18, it.title, { size: 22, weight: 700 }) + path([[it.x, it.y + 26], [it.x + it.w - 10, it.y + 26]], { w: 1.5, c: GREY });
      else if (it.head) o += text(it.x, it.y, it.head, { size: lay.size, weight: 700 });
      else if (it.num) o += text(it.x, it.y, it.num + ".", { size: lay.size, weight: 700, fill: "#444" });
      else o += text(it.x, it.y, it.line, { size: lay.size, weight: 500 });
    }
    // when the steps are short there is room for a practice tracker
    if (lay.end < notesTop - 150) {
      const ty = notesTop - 128;
      o += rect(50, ty, 750, 108, { rx: 20, w: 3, dash: "12 8" }) + text(72, ty + 34, "Practice tracker", { size: 21, weight: 700 });
      ["Take 1", "Take 2", "Take 3"].forEach((t, i) => { o += rect(72 + i * 150, ty + 52, 23, 23, { rx: 5, w: 3 }) + text(104 + i * 150, ty + 71, t, { size: 24, font: "hand", weight: 400 }); });
      ["Loud enough?", "Slow enough?", "Looked up?"].forEach((t, i) => { o += rect(72 + i * 230, ty + 82, 23, 23, { rx: 5, w: 3 }) + text(104 + i * 230, ty + 101, t, { size: 24, font: "hand", weight: 400 }); });
    }
    // presenting notes
    o += rect(50, notesTop, 750, 184, { rx: 20, w: 3 });
    let y = notesTop + 32;
    for (const [label, s] of [["Open with", p.hook], ["Slow down", p.watch], ["Why it is fun", p.why]]) {
      o += text(72, y, label + ":", { size: 19, weight: 700 });
      const ls = fit(s, 570, 18).slice(0, 2); ls.forEach((l, i) => { o += text(206, y + i * 22, l, { size: 18, weight: 500 }); });
      y += Math.max(1, ls.length) * 22 + 12;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="8.5in" height="11in">${o}${foot(p, 2)}</svg>`;
  }

  root.LKG_ROMAN_SHEETS = { sheets, find, front, back, pages: p => [front(p), back(p)], equation, valueOf, hookLines };
})(typeof window !== "undefined" ? window : globalThis);
