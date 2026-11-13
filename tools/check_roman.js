#!/usr/bin/env node
/* Learning Kangaroo: check the Roman numerals page before printing.
   - 25 problems: 5 straight (two terms), 5 with one more step (three terms), 15 candidates; ten chosen, numbered 1–10
   - every answer is re-worked here with its own arithmetic (it does not trust the engine that made the data)
   - the answer is in simplest form, between 1 and 3999; no step goes below one
   - the straight five have no splits; every problem has worked steps (way 1 and way 2)
   - the ten sheets draw (both sides), fit on the page, have the code at the top and no answer on the front
   Usage: node tools/check_roman.js */
const fs = require("fs"), path = require("path"), vm = require("vm");
const dir = path.join(__dirname, "..");
const ctx = { console }; ctx.window = ctx; ctx.globalThis = ctx; vm.createContext(ctx);
for (const f of ["js/kangaroo.js", "data/roman.js", "js/roman.js"]) vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
const P = ctx.LKG_ROMAN.problems, S = ctx.LKG_ROMAN_SHEETS, bad = [];
const V = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
const val = t => [...t].reduce((n, c, i) => n + (V[c] < (V[t[i + 1]] || 0) ? -V[c] : V[c]), 0);
const SIMPLE = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
const roman = n => SIMPLE.reduce((s, [v, r]) => { while (n >= v) { s += r; n -= v; } return s; }, "");
const say = (p, m) => bad.push(p.id + ": " + m);
const count = g => P.filter(p => p.group === g).length;
if (P.length !== 25) bad.push("needs 25 problems (has " + P.length + ")");
if (count("straight") !== 5 || count("step") !== 5 || count("pick") !== 15) bad.push("needs 5 straight, 5 step and 15 candidates");
const tops = P.filter(p => p.top).map(p => p.top).sort((a, b) => a - b).join();
if (tops !== "1,2,3,4,5,6,7,8,9,10") bad.push("the ten chosen must be numbered 1–10 (has " + tops + ")");
const seen = new Set();
for (const p of P) {
  if (seen.has(p.id)) say(p, "duplicate id"); seen.add(p.id);
  const key = p.terms.join(p.ops.join(""));
  if (seen.has(key)) say(p, "same problem twice"); seen.add(key);
  if (p.group === "straight" && p.terms.length !== 2) say(p, "a straight problem has two numbers");
  if (p.group === "straight" && p.ops[0] !== "-") say(p, "a straight problem takes one big number from another");
  if (p.group === "straight" && p.splits) say(p, "a straight problem needs no splits");
  if (p.group === "step" && p.terms.length !== 3) say(p, "a step problem has three numbers");
  if (p.group === "pick" && ![2, 3].includes(p.terms.length)) say(p, "unexpected number of terms");
  if (p.group === "straight" && Math.min(...p.terms.map(t => val(t))) < 700) say(p, "a straight problem should start and subtract big numbers");
  let run = val(p.terms[0]);
  for (let i = 1; i < p.terms.length; i++) { run += (p.ops[i - 1] === "+" ? 1 : -1) * val(p.terms[i]); if (run < 1) say(p, "goes below one on the way"); }
  p.terms.forEach(t => { if (roman(val(t)) !== t) say(p, t + " is not in simplest form"); });
  if (run !== p.value) say(p, `value ${p.value} but worked out ${run}`);
  if (run < 1 || run > 3999) say(p, "answer out of range");
  if (roman(run) !== p.answer) say(p, `answer ${p.answer} but worked out ${roman(run)}`);
  if (!p.way1.length || !p.way2.length) say(p, "no worked steps");
  if (!p.eqs1 || p.eqs1.length !== p.way1.length) say(p, "the step tiles do not match the steps");
  if (p.way1.concat(p.way2).some(s => /\d/.test(s))) say(p, "a worked step shows an Arabic digit");
  if (p.top) {
    ["hook", "watch", "why", "code"].forEach(k => { if (!p[k]) say(p, "no " + k); });
    if (/\d/.test(p.hook)) say(p, "the hook shows an Arabic digit (front of the sheet)");
    if (S.hookLines(p).length > 2) say(p, "the hook is longer than two lines on the front");
    if (p.top !== Number(p.code.slice(2))) say(p, "code does not match the sheet number");
  }
}
for (const p of S.sheets()) {
  try {
    const pg = S.pages(p), f = pg[0];
    if (pg.length % 2) say(p, "an odd number of pages: it will not print two-sided cleanly");
    if (pg.length > 6) say(p, "more than six pages");
    pg.forEach((svg, i) => { const n = i + 1;
      if (!svg.includes("Learning Kangaroo #LK-" + p.code)) say(p, "page " + n + " has no code at the top");
      if (/NaN|undefined/.test(svg)) say(p, "page " + n + " has NaN or undefined");
      if (!svg.includes("page " + n + " of " + pg.length)) say(p, "page " + n + " has the wrong page count in the footer");
      const sizes = [...svg.matchAll(/font-size="([\d.]+)"/g)].map(m => +m[1]);
      if (Math.min(...sizes) < 11) say(p, "page " + n + " has text smaller than 11");
    });
    if (f.includes(">" + p.answer + "<")) say(p, "the answer is on the front");
    if (/answer|Answer/.test(f.replace("Say the answer, then pause", ""))) say(p, "the front mentions the answer");
  } catch (e) { say(p, "does not draw: " + e.message); }
}
if (bad.length) { console.log("❌ " + bad.length + " problem(s):\n" + bad.join("\n")); process.exit(1); }
console.log(`✅ ${P.length} problems re-worked and right. ${S.sheets().length} sheets (${S.sheets().reduce((n, p) => n + S.pages(p).length, 0)} pages) draw and fit. Pages per sheet: ${S.sheets().map(p => S.pages(p).length).join(' ')}. Splits/merges of the ten: ${S.sheets().map(p => p.splits + "/" + p.merges).join(" ")}`);
