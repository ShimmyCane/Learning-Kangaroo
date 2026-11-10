# Learning Kangaroo — Schematic

**Track:** A. Family play. The worksheets are the product; the pages pick, check, print and record results.
**Status:** Round 1 — 6 worksheets (3 per track), 24 questions. Not printed or tried yet.
**Platform:** plain HTML/CSS/JS, no build, GitHub Pages (inside Felix-Maze for now). Letter portrait, black and white, two-sided.
**Conversation:** `convo/convo v0.1.md`

## Purpose

Practice in the style of the Math Kangaroo contest: a picture, a little story, five choices, and questions worth 3, 4 or 5 points. Two tracks so each child has their own level. Start small (3 worksheets each), try them, evaluate with right/wrong marks, then write more.

## Tracks

| Track | Code | For | Kinds of questions |
|---|---|---|---|
| Joey | J1–J3 | the younger child | counting, shapes, what comes next, tallest / most, adding and taking away within 10, a jump on a number line |
| Roo | R1–R3 | the older child | position in a line, counting squares and triangles, clocks, repeated steps, missing numbers, balance scales, halves, legs on a farm, growing patterns, taller / shorter logic |

## The worksheet

- One sheet of paper: **front** = questions 1–2, **back** = questions 3–4. Two questions a page, so there is room to think and draw.
- Each page: "Learning Kangaroo #LK-J1 · front/back", Name ____, Kip the kangaroo with the track and title, then two question boxes.
- Each question box: number, points, the question (hand font, up to 3 lines), a picture, five answer boxes A–E. The child circles the letter.
- Footer: code, page 1 or 2 of 2, track, "our own questions in the Math Kangaroo style".

## Pages

| Page | What it does |
|---|---|
| `index.html` | Home: the two tracks with their worksheets (front page as the picture), 🖨️ Print in bulk, ✅ Answers and results |
| `sheet.html?code=J1` | Front and back side by side, ◀ ▶, 🖨️ Print (two-sided), 🚩 Flag with a reason and a note |
| `pack.html` | Pick worksheets and copies, long- or short-edge flip; two-sided always. Flagged worksheets left out |
| `answers.html` | The key with a short why for each answer (prints on its own), and ✅ ❌ ➖ marks per question, totals per worksheet |

## Engine

| File | What it holds |
|---|---|
| `js/kangaroo.js` | Drawing helpers, Kip (our kangaroo), pictures (tree, sequence, number line, clock, dice, balance, farm, growing squares …), the question box and the page |
| `data/questions.js` | The worksheets and their questions: text, picture, choices, answer, calc, why |
| `js/app.js` | ⚙️ drawer, errors, reviews + sync, two-sided printing (shared with Learning to Draw) |
| `tools/check_sheets.js` | The checker |

## Data

Supabase **Family** project, app `learning-kangaroo`, table `lkg_reviews`: flags (per worksheet), results (per question: 1 right, 0 wrong, empty skipped, with "younger"/"older"), prints. Kept on the device first, synced when signed in. **SQL written, not applied.**
