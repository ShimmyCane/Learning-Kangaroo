# Math Kangaroo levels: what we could learn (round 2 research)

**Date:** 2026-11-10 · **Asked for:** look at a few past Math Kangaroo papers for K–5th grade, understand their approach, and set the levels: Joey at kindergarten, Roo at 2nd grade.

**Rule kept:** we study the approach, not the questions. Nothing from a real paper is copied into this folder or into `data/questions.js`. Every question in the new sheets is our own.

## What we could not do

Every page fetch failed at the network level (DNS, `ENOTFOUND`) in this session:

- `mathkangaroo.org` (the official free question samples)
- `kaplandm.github.io` (a 2016 Levels 1–2 sample PDF)
- `www.cuemath.com`, `www.wukongsch.com`, `www.thethinkacademy.com`, `www.98thpercentile.com`, `www.lingoace.com`

So **no past paper was read**. What follows comes from search-result snippets only, which is weaker. To read the papers, allow those hosts in the environment's network settings and redo this step.

## What the snippets said (unverified against the official rules)

Sources (search results): [Cuemath, past papers guide](https://www.cuemath.com/blog/math-kangaroo-past-papers/), [Wukong, 2025 guide](https://www.wukongsch.com/blog/en/math-learning/17470), [Math Kangaroo USA free samples](https://mathkangaroo.org/mks/practice/free-question-samples/), [2016 Levels 1–2 sample](https://kaplandm.github.io/FVE/contest_MK_sample_2016.pdf).

- **Level pairs:** early levels are shared by two grades: grades 1–2 take one paper, grades 3–4 another, and so on. Kindergarten children sit the grade 1 paper.
- **Size:** about 24 questions in 75 minutes for grades 1–4 (30 for grades 5 and up).
- **Points:** three tiers. Questions 1–8 are worth 3, 9–16 are worth 4, and 17–24 are worth 5. Our sheets copy that: 2 questions a page, 4 a sheet, points 3 / 4 / 5 as in the contest.
- **Answers:** five choices, one correct. Sources disagree on wrong-answer scoring (none, a quarter-point deduction, or a full deduction). We do not score that; we mark right / wrong / skipped on our own key.
- **Style:** pictures, a little story, and wrong choices that come from common slips. Harder questions use a trick or a pattern, not more steps.

## How this shapes the new sheets

| Level | Joey (kindergarten) | Roo (grade 2) |
|---|---|---|
| Numbers | counting on from 10, the number after / before, missing numbers to 15 | adding and taking away to 100 with tens and ones, skip counting by 2s, 5s, 10s |
| Shapes and space | shape patterns with two shapes that repeat, counting shapes in a picture | counting squares in a shape, which shape has 3 sides, left / middle / right |
| Money and time | (none yet) | coins, the change left after buying, the clock three hours on |
| Logic | more / fewer, how many more | working backwards (add, then take away), who is in the middle |
| Points | 3 / 3 / 4 / 5 or 3 / 4 / 4 / 5 on each sheet | the same mix |

Each sheet has one 5-point question that needs a trick (two steps, a comparison, or a pattern). The old TK sheets had mostly one-step questions, which is why they felt too easy.

## Open items

- Read two or three real Levels 1–2 papers once the hosts are allowed, and check the new sheets against their question types (not their wording).
- Confirm the official wrong-answer rule. We do not use one.
- Check whether grade 2 should get a clock to the half hour. Today the clock stays on the hour.

## Where the sheets are

- New: `J4`–`J6` (Joey, kindergarten) and `R4`–`R6` (Roo, grade 2) in `data/questions.js`, level `k` and `g2`.
- Old: `J1`–`J3` and `R1`–`R3`, now level `tk` (TK and younger). Not deleted, not printed by default. Reached from ⚙️ Settings → 📦 TK and younger worksheets (`index.html?level=tk`), with the matching answers at `answers.html?level=tk`.

## Round 3 (2026-11-10): archive and the new sets

- The 12 earlier sheets (`J1`–`J6`, `R1`–`R6`) are retired (`retired: true`), so they are off the home page and kept in the file. They are reached from ⚙️ Settings → 🗄️ Archive (`index.html?level=archive`, `answers.html?level=archive`).
- The new sets came in as 9 Joey (kindergarten) and 9 Roo (grade 2) sheets, renumbered to `J7`–`J15` and `R7`–`R15` so no code or question id is reused.
- The answer letters were rotated to spread them across A–E (the picture-labelled questions keep their order).

## Round 3b: review and repack

- Flagged questions were fixed where the fix was clear (a drawn jump that gave the answer was removed; text and picture were made to agree). None were discarded for that reason.
- The weakest eight were culled, four per track: one-step sums worth five points, a race whose picture gave the order, and a farm question that repeated an archived one.
- The 64 remaining questions are packed into full sheets: Joey `J16`–`J23` (kindergarten), Roo `R16`–`R23` (grade 2). Every question has a new id. The sheets from last round (`J7`–`J15`, `R7`–`R15`) are retired.
- Points: only five 5-point questions remain in the Joey set, so Joey sheets are 3-4-4-4 or 3-4-4-5 rather than the usual mix. Worth a look.

## Round 4: grades 3–5 (calibrated to the official samples)

- The official sample site is now reachable (`mathkangaroo.org` added to the environment's allowed hosts). Sample papers for 2022–2026 were read for calibration. Questions were not copied.
- Grades 3–4 share one paper; grades 5–6 share another. The grade 3 and 4 sets follow the 3–4 paper and the grade 5 set follows the 5–6 paper.
- New tracks: Wallaby (grade 3, `W1`–`W4`), Flyer (grade 4, `F1`–`F4`), Boomer (grade 5, `B1`–`B4`). Sixteen questions per grade.
- Our new sets are still about half the official reading load, and the engine cannot draw cut-and-fold or reflection pictures yet. See `research/grades-3-5-review.md`.
- Question text beside a picture is limited to 3 lines; a question without a picture may run to 7 lines.
