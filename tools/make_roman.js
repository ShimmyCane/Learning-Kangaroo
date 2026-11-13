#!/usr/bin/env node
/* Learning Kangaroo: make data/roman.js (the 25 Roman numeral problems and their worked solutions).
   The worked steps come from the Roman Numerals tool's engine (sibling repo: ../../Roman-Numerals/roman.js, or pass a path).
   That engine is a TEACHING MODEL (split into pieces, cross out, merge), not a documented Roman method.
   Run this only when the problem list changes. The output is committed, so the page needs no other repo.
   Usage: node tools/make_roman.js [path/to/roman.js] */
const fs = require("fs"), path = require("path");
const R = require(path.resolve(process.argv[2] || path.join(__dirname, "..", "..", "Roman-Numerals", "roman.js")));

// The 25, in page order. g: straight (5), step (5), pick (15 candidates). top = the sheet number (1–10) of the ten chosen.
// hook: one line, no Arabic digits. watch: the moment to slow down. why: what is elegant or funny.
const LIST = [
  { g: "straight", e: "MMMDCCLXXXVIII - MCCXXIII" },
  { g: "straight", e: "MMDCCCLXXXVIII - MDCCXXXV" },
  { g: "straight", e: "MMMDCCCLXXXII - MMDCCLXXI" },
  { g: "straight", e: "MMMDCCCLXXXVII - MMDCCCXXXV" },
  { g: "straight", e: "MMDCCLXXVII - MDLXXV" },
  { g: "step", e: "MMDCCLXXVII - MDLXXV + CCXXV" },
  { g: "step", e: "MMMDCCCLXXXII - MMDCCLXXI - XI" },
  { g: "step", e: "MMDCCCLXXXVIII - MDCCXXXV + XLVII" },
  { g: "step", e: "MMMDCCLXXVIII - MCCCXXV + DCCL" },
  { g: "step", e: "MMMCCXXII - MCXI - DCCXI" },
  { g: "pick", top: 4, e: "MCMXCIX + I",
    hook: "One tiny I walks up to a long row of letters and knocks the whole row over, like dominoes.",
    watch: "Say the count out loud at every merge: five I's, then two V's, then five X's. Let your voice climb.",
    why: "Messy to start (three short forms to open), then each merge sets off the next one and it all ends as two letters." },
  { g: "pick", top: 5, e: "MM - I",
    hook: "Take one little I out of two thousand and everything falls apart!",
    watch: "Go slowly. Each trade breaks one letter into smaller ones. It takes six trades before the I can leave.",
    why: "Three letters to start, and the answer is long. The reverse of the dominoes: all splits and no merges, then the short forms come back." },
  { g: "pick", top: 2, e: "DCCCLXXXVIII + CXII",
    hook: "The longest numeral under a thousand meets its secret partner.",
    watch: "No splits at all. The surprise is the chain of merges at the end. Pause before you say the answer.",
    why: "Sixteen letters go in and one comes out. Eight hundred eighty-eight needs just one hundred twelve to make a thousand." },
  { g: "pick", top: 6, e: "CDXLIV + DLVI",
    hook: "A numeral made only of short forms (CD, XL and IV) meets a partner that undoes every one.",
    watch: "Open the three short forms from the right, one at a time. Point at each pair as you split it.",
    why: "Three splits, then six merges in a row. The two numbers fit together exactly, and they make one letter." },
  { g: "pick", e: "MMMCMXCIX - CMXCIX" },
  { g: "pick", top: 3, e: "MMMDCCCLXXXVIII - DCCCLXXXVIII",
    hook: "The longest numeral loses nearly all of itself and keeps only its crown.",
    watch: "Everything crosses out in one move. Read the letters you cross out, so the listener can follow.",
    why: "Twenty-seven letters in the problem, three left. No splits and no merges, only crossing out." },
  { g: "pick", top: 7, e: "XLIX + XLIX + II",
    hook: "Two numbers that are each one short of fifty, plus two pennies. Can they sneak up to one hundred?",
    watch: "There are two sums, one after the other. Say the answer to the first sum before you start the second.",
    why: "Three numbers and ten letters become one letter. Every short form gets opened and the merges rebuild it." },
  { g: "pick", top: 1, e: "XXXIX + XI",
    hook: "Thirty-nine and eleven look nothing alike, but together they make a number with a single letter.",
    watch: "Only one short form to open (IX). Take your time and say each step in a full sentence.",
    why: "The gentlest merge chain: I's, then V's, then X's, and L at the end." },
  { g: "pick", top: 10, e: "MDCCLXXVI - MCDXCII",
    hook: "Columbus sails (MCDXCII). The United States declares independence (MDCCLXXVI). How many years in between?",
    watch: "Four trades. Say why each is needed: not enough I's, then not enough X's, then not enough C's.",
    why: "Two famous years, and the answer is a little untidy until IIII turns into IV at the very end." },
  { g: "pick", top: 8, e: "MMMCMXCIX - MMMCMXCVIII",
    hook: "The biggest Roman numeral we write, take away one less than itself. Two giants and a tiny gap.",
    watch: "Cross out the long shared start in one move: three M's, CM and XC. The gap is only the last letters.",
    why: "Twenty letters in the problem and one left. Messy to look at, elegant to finish." },
  { g: "pick", e: "DCCLXXVII + CCXXIII" },
  { g: "pick", e: "MMMCCCXXXIII - CCCXXXIII" },
  { g: "pick", e: "XCIX - XLIX" },
  { g: "pick", top: 9, e: "MMXXVI - MCMXCIX",
    hook: "Take MCMXCIX, the last year before two thousand, away from this year. How long has it been?",
    watch: "Nineteen steps: slow and steady wins. Group them out loud: first the I's, then the X's, then the C's.",
    why: "It starts with a quick cross-out and then needs six trades. The answer is tiny and tidy." },
  { g: "pick", e: "XCIX + I" },
];

const SPLIT = /^Not enough|short way to write|is the same as/, MERGE = /make one/;
const sign = op => (op === "+" ? "+" : "−");
function parts(e) { const p = R.parse(e); if (p.error) throw new Error(e + ": " + p.error); return p; }

const CODE = { normal: "n", cross: "c", gone: "g", new: "w" };
const tiles = list => list.map(t => [t.ch, CODE[t.st] || "n"]);
function way1(terms, ops) {            // split, cross out, merge: one pair at a time
  const ts = terms.slice(), os = ops.slice(), out = [], eqs = [], first = ts.length > 2;
  let sum = 0;
  while (ts.length > 1) {
    const k = R.pairToWork(ts, os), a = ts[k], b = ts[k + 1], op = os[k];
    const plan = op === "+" ? R.addEquation([a, b]) : R.takeAwayEquation(a, b);
    sum++;
    if (first) { out.push("§ " + a + " " + sign(op) + " " + b); eqs.push(null); }
    plan.steps.forEach(s => {
      out.push(s.label);
      const e = s.eq;   // the tiles at this step: parts crossed out (c), replaced (g) or new (w)
      eqs.push({ sum: first ? sum : 0, part: s.part, name: s.partName, focus: e.focus || "",
        items: e.items.map(it => it.kind === "op" ? ["op", it.text] : ["num", tiles(it.tiles)]),
        right: e.result ? null : e.right === "ask" ? "ask" : tiles(e.right), result: e.result || "" });
    });
    ts.splice(k, 2, plan.result); os.splice(k, 1);
  }
  return { out, eqs };
}
function way2(terms, ops) {            // by column, like a counting board
  const r = R.calculate(terms, ops);
  return r.steps.map(s => s.text).filter(t => t && !/^The whole problem|^Line up the columns/.test(t));
}

const problems = LIST.map((x, i) => {
  const { terms, ops } = parts(x.e);
  const value = terms.reduce((s, t, k) => (k ? s + (ops[k - 1] === "+" ? 1 : -1) * R.lenientValue(t) : R.lenientValue(t)), 0);
  const answer = R.toRoman(value), W1 = way1(terms, ops), w1 = W1.out, labels = w1.filter(t => !t.startsWith("§"));
  const o = {
    id: "R" + String(i + 1).padStart(2, "0"), group: x.g, terms, ops, answer, value,
    splits: labels.filter(t => SPLIT.test(t)).length, merges: labels.filter(t => MERGE.test(t)).length,
    letters: terms.join("").length, way1: w1, eqs1: W1.eqs, way2: way2(terms, ops),
  };
  if (x.top) Object.assign(o, { top: x.top, code: "RN" + x.top, hook: x.hook, watch: x.watch, why: x.why });
  return o;
});

const text = "/* Learning Kangaroo: the Roman numerals page. 25 of our own problems, their worked solutions, and the ten chosen for presenting.\n"
  + "   Made by tools/make_roman.js from the Roman Numerals tool's engine (a teaching model: split, cross out, merge). Do not edit by hand. */\n"
  + "window.LKG_ROMAN = " + JSON.stringify({ problems }, (k, v) => v, 0).replace(/\{"id"/g, "\n{\"id\"") + ";\n";
fs.writeFileSync(path.join(__dirname, "..", "data", "roman.js"), text);
console.log("wrote data/roman.js:", problems.length, "problems,", problems.filter(p => p.top).length, "chosen");
problems.forEach(p => console.log(p.id, p.group.padEnd(8), (p.top ? "★" + p.top : " ").padEnd(3), p.terms.map((t, i) => (i ? sign(p.ops[i - 1]) + " " : "") + t).join(" "), "=", p.answer, "| splits", p.splits, "merges", p.merges, "way1", p.way1.length, "way2", p.way2.length));
