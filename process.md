# Learning Kangaroo — Process

**Write → check → print → mark → evaluate → write more.**

1. **Write.** Add a worksheet to `data/questions.js` (`J4`, `R4` …): four questions, 3 / 4 / 5 points, five choices, the answer letter, `calc` (the answer worked out from the picture's numbers where possible), `why` (one line for the key). Spread the answer letters; the checker prints the count.
2. **Pictures.** Use a picture kind from `ART` in `js/kangaroo.js`, or add one. Pictures must not give the answer away (e.g. show one jump, not all three).
2b. **Hints.** For every new question, add two hints to `data/hints.js`, keyed by the question id (`"J21-1": [hint 1, hint 2]`). Hint 1 points at the method; hint 2 is more specific. Never give the letter or the final number. `node tools/check_sheets.js` lists any active question without hints; a question that has none is flagged, and the question-building skill (to be written) will add this step.
3. **Check.** `node tools/check_sheets.js` must pass (it lists any active question still without hints). Then look at both pages (`sheet.html?code=…`) and go through `qc.md`.
4. **Print.** `pack.html`: choose worksheets and copies, turn on two-sided in the print box. Portrait flips on the long edge; if your printer flips on the short edge, choose that and the backs are turned for you.
5. **Mark.** `answers.html`: ✅ ❌ ➖ for each question. Joey marks count for the younger child, Roo for the older. (Digital practice: `tools/overlay/README.md`. It has no wrong answers, only hints, and records completion per child.)
6. **Evaluate.** Look at which kinds were wrong or skipped. Flag a worksheet (🚩 on its page) if a question was unclear or a picture misleading. Write the next worksheets around what's just out of reach.
