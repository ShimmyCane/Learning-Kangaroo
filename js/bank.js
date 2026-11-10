/* The worksheets: lookups, the review reasons and the two tracks' children. */
(function (root) {
  "use strict";
  const sheets = () => (root.LKG_SHEETS || []).filter(s => !s.retired);
  const find = code => sheets().find(s => s.code === String(code || "").toUpperCase().replace(/^LK-/, "")) || null;
  const REASONS = [["wrong", "❌ An answer is wrong"], ["hard", "😣 Too hard"], ["easy", "😴 Too easy"], ["unclear", "🤔 Hard to understand"], ["ugly", "🎨 Picture is unclear"], ["other", "📝 Something else"]];
  const WHO = { J: "younger", R: "older" };
  root.BANK = { sheets, find, REASONS, WHO };
})(window);
