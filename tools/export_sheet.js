// Prints one worksheet as JSON: its two page SVGs (drawn by js/kangaroo.js, the same drawing the site prints)
// and the answers. Used by tools/overlay.py. Usage: node tools/export_sheet.js J20
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ROOT = path.resolve(__dirname, "..");
const code = String(process.argv[2] || "").toUpperCase().replace(/^LK-/, "");

const sandbox = { console };
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const file of ["js/kangaroo.js", "data/questions.js"]) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), "utf8"), sandbox, { filename: file });
}
const sheet = (sandbox.LKG_SHEETS || []).find(s => s.code === code);
if (!sheet) { console.error("No worksheet " + code); process.exit(1); }
const out = {
  code: sheet.code,
  title: sheet.title,
  pages: sandbox.LKG.pages(sheet),
  questions: sheet.questions.map(q => ({
    id: q.id,
    points: q.points,
    answer: q.answer,
    why: q.why,
    choices: q.choices.map(c => (typeof c === "object" ? c.see : c)),
  })),
};
process.stdout.write(JSON.stringify(out));
