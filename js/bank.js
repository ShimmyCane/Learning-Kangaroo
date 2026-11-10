/* The worksheets: lookups, the levels, the review reasons and the two tracks' children.
   Levels: k = Kindergarten (Joey), g2 = Grade 2 (Roo). The home page, bulk print and answers show the current
   sheets (not retired) by default. Retired sheets are the archive: kept in the file, reached from ⚙️ Settings
   with ?level=archive, still printable and markable, never on the home page. */
(function (root) {
  "use strict";
  const LEVELS = { tk: "TK and younger", k: "Kindergarten", g2: "Grade 2", g3: "Grade 3", g4: "Grade 4", g5: "Grade 5" };
  const CURRENT = ["k", "g2", "g3", "g4", "g5"];
  const VIEWS = { current: CURRENT, all: Object.keys(LEVELS) };
  const every = () => root.LKG_SHEETS || [];
  // sheets(view): "current" (default), "archive" (retired sheets), "all", or one level such as "k"
  const sheets = (view = "current") => {
    if (view === "archive") return every().filter(s => s.retired);
    const ok = VIEWS[view] || (LEVELS[view] ? [view] : CURRENT);
    return every().filter(s => !s.retired && ok.includes(s.level));
  };
  const viewOf = param => (param === "archive" || VIEWS[param] || LEVELS[param]) ? param : "current";
  const find = code => every().find(s => s.code === String(code || "").toUpperCase().replace(/^LK-/, "")) || null;
  const REASONS = [["wrong", "❌ An answer is wrong"], ["hard", "😣 Too hard"], ["easy", "😴 Too easy"], ["unclear", "🤔 Hard to understand"], ["ugly", "🎨 Picture is unclear"], ["other", "📝 Something else"]];
  const WHO = { J: "younger", R: "older", W: "older", F: "older", B: "older" };
  root.BANK = { sheets, find, viewOf, LEVELS, REASONS, WHO };
})(window);
