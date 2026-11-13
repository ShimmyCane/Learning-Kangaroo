# Learning Kangaroo — Claude Code pointer

Purpose: Math Kangaroo-style worksheets for the kids, our own questions, two tracks (Joey = younger, Roo = older). One worksheet = one sheet of paper, two-sided, two questions a page. Lives inside the Felix Maze repo for now; self-contained so it can move to its own repo later.

- Design: `schematic.md` · Process (write → check → review → print): `process.md` · Quality check: `qc.md` · Goals: `todo.md`
- Q&A history: `convo/` (never compact; start a new version instead)
- AI notes: `04 AI/brief.md` and `04 AI/lessons.md`
- Shared conventions: the Index repo's root `CLAUDE.md` (public repo, privacy) and its `02 Refs/Skills/`

How to run: open `index.html` (works from the file or GitHub Pages). One worksheet: `sheet.html?code=J1`. Answer key and results: `answers.html`.
Roman numerals (its own page, `roman.html`, apart from the tracks): 25 problems and solutions in `data/roman.js`, ten two-sided presenting sheets (`js/roman.js`, codes `LK-RN1`–`RN10`; two or four pages each, always even; the pages after the front have the answer, for the presenter, drawn in colour like the Roman Numerals tool at one fixed letter size: a deliberate exception to black and white). Made by `node tools/make_roman.js` from the Roman Numerals repo's engine (a teaching model); check with `node tools/check_roman.js`.
Check: `node tools/check_sheets.js` (4 questions each, 5 different choices, the worked-out answer matches the letter, pages draw, fingerprints; `--update` only when a change to a printed sheet is intended).

Rules:
- Letter portrait, black and white, two-sided. "Learning Kangaroo #LK-code" at the top of both pages. **No answers on the kids' pages**; the key is `answers.html`.
- Our own questions only, in the contest's style. Never copy questions from real Math Kangaroo papers. Attribute the style: the home page says where the contest comes from.
- Every question has `calc` (the answer worked out) so the checker can prove the letter is right.
- No names or ages of the kids; the tracks are Joey and Roo, the data says "younger" / "older". Characters are our own kangaroos Kip, Bo and Pip.
- Retire, don't delete: a replaced question or worksheet gets `retired: true`; ids are never reused.
- Supabase: Family project, app `learning-kangaroo`, table `lkg_reviews` (`supabase/001_reviews.sql`). Not applied yet.
