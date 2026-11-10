# Learning Kangaroo — brief (for Claude)

**What it is:** Math Kangaroo-style worksheets (our own questions), two tracks (Joey younger, Roo older), one sheet = two pages = four questions. Folder `learning-kangaroo/` inside the Felix-Maze repo, self-contained.

**State (2026-11-09, round 1):**
- 6 worksheets / 24 questions in `data/questions.js`; `tools/check_sheets.js` passes; answer letters A3 B5 C6 D6 E4.
- Pages: home, sheet, pack, answers (key + results). Smoke-tested offline at 390 and 1024 px.
- **Database not applied** (same as Learning to Draw: the Supabase tool's confirmation wasn't answered). SQL and the rolled-back test are in `supabase/`.

**Decisions:**
- No answers on the kids' pages; `answers.html` holds the key.
- `calc` on every question; the checker compares it with the letter.
- Kip, Bo and Pip are our own kangaroos (the first drawing looked like a bird; redrawn with long ears, big foot, thick tail).

**Open questions:** `convo/convo v0.1.md`.
