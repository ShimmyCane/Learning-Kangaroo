#!/usr/bin/env node
/* Learning Kangaroo: check every worksheet before printing.
   - every worksheet has 4 questions (2 a page, front and back), ids unique, 3–5 points
   - every question has 5 different choices and an answer letter A–E
   - the worked-out answer (calc) matches the chosen letter, and matches exactly one choice
   - the question text fits in 3 lines; the picture kind exists; both pages draw
   - pages match tools/fingerprints.json (--update only when a change to a printed sheet is intended)
   Usage: node tools/check_sheets.js [--update] */
const fs = require("fs"), path = require("path"), vm = require("vm"), crypto = require("crypto");
const dir = path.join(__dirname, "..");
const ctx = { console }; ctx.window = ctx; ctx.globalThis = ctx; vm.createContext(ctx);
for (const f of ["js/kangaroo.js", "data/questions.js"]) vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
const { LKG, LKG_SHEETS } = ctx;
const FP = path.join(__dirname, "fingerprints.json");
const fps = fs.existsSync(FP) ? JSON.parse(fs.readFileSync(FP, "utf8")) : {};
const update = process.argv.includes("--update");
const key = c => (c && typeof c === "object") ? String(c.shape || c.dots || c.see) : String(c);
const problems = [], ids = new Set(), out = {}, letters = {};
for (const s of LKG_SHEETS) {
  const say = m => problems.push("LK-" + s.code + ": " + m);
  const live = s.questions.filter(q => !q.retired);
  if (live.length !== 4) say("needs 4 questions (has " + live.length + ")");
  for (const q of live) {
    const sq = m => say(q.id + " " + m);
    if (ids.has(q.id)) sq("duplicate id"); ids.add(q.id);
    if (![3, 4, 5].includes(q.points)) sq("points must be 3, 4 or 5");
    if (!Array.isArray(q.choices) || q.choices.length !== 5) { sq("needs 5 choices"); continue; }
    if (new Set(q.choices.map(key)).size !== 5) sq("two choices are the same");
    const i = "ABCDE".indexOf(q.answer);
    if (i < 0) { sq("answer must be A–E"); continue; }
    letters[q.answer] = (letters[q.answer] || 0) + 1;
    if (typeof q.calc !== "function") sq("no calc (worked-out answer)");
    else {
      const v = String(q.calc(q));
      if (key(q.choices[i]) !== v) sq(`answer ${q.answer} is "${key(q.choices[i])}" but the worked-out answer is "${v}"`);
      if (q.choices.filter(c => key(c) === v).length !== 1) sq("the worked-out answer is not exactly one of the choices");
    }
    if (!q.why) sq("no explanation for the answer key");
    if (q.text.length > 46 * 3) sq("question text is longer than 3 lines");
    if (q.art && !LKG.ART[q.art.kind]) sq("unknown picture " + q.art.kind);
  }
  try {
    LKG.pages(s).forEach((svg, n) => {
      if (!svg.includes(LKG.NAME + " #LK-" + s.code)) say("page " + (n + 1) + " has no code at the top");
      if (/NaN|undefined/.test(svg)) say("page " + (n + 1) + " has NaN or undefined in the drawing");
      if (/>[A-E] ?[✓✔]|answer:/i.test(svg)) say("page " + (n + 1) + " shows an answer");
      const fp = crypto.createHash("sha1").update(svg).digest("hex").slice(0, 12), k = "LK-" + s.code + "/" + (n + 1);
      out[k] = fp;
      if (fps[k] && fps[k] !== fp && !update) say("page " + (n + 1) + " changed since it was printed (run with --update if that is intended)");
    });
  } catch (e) { say("does not draw: " + e.message); }
}
if (!problems.length && (update || !fs.existsSync(FP))) { fs.writeFileSync(FP, JSON.stringify(Object.assign(fps, out), null, 1) + "\n"); console.log("fingerprints written"); }
if (problems.length) { console.log("❌ " + problems.length + " problem(s):\n" + problems.join("\n")); process.exit(1); }
console.log(`✅ ${LKG_SHEETS.length} worksheets, ${ids.size} questions pass. Answer letters: ${"ABCDE".split("").map(l => l + " " + (letters[l] || 0)).join(" · ")}`);
