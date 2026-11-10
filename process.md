# Learning Kangaroo — Process

**Write → check → print → mark → evaluate → write more.**

1. **Write.** Add a worksheet to `data/questions.js` (`J4`, `R4` …): four questions, 3 / 4 / 5 points, five choices, the answer letter, `calc` (the answer worked out from the picture's numbers where possible), `why` (one line for the key). Spread the answer letters; the checker prints the count.
2. **Pictures.** Use a picture kind from `ART` in `js/kangaroo.js`, or add one. Pictures must not give the answer away (e.g. show one jump, not all three).
3. **Check.** `node tools/check_sheets.js` must pass. Then look at both pages (`sheet.html?code=…`) and go through `qc.md`.
4. **Print.** `pack.html`: choose worksheets and copies, turn on two-sided in the print box. Portrait flips on the long edge; if your printer flips on the short edge, choose that and the backs are turned for you.
5. **Mark.** `answers.html`: ✅ ❌ ➖ for each question. Joey marks count for the younger child, Roo for the older.
6. **Evaluate.** Look at which kinds were wrong or skipped. Flag a worksheet (🚩 on its page) if a question was unclear or a picture misleading. Write the next worksheets around what's just out of reach.
