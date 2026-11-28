# Tap-to-answer overlay: how it works

A worksheet stays exactly as it prints. This workflow puts answer buttons on top of its A–E boxes,
so a child taps the letter on the paper. There are no wrong answers: a wrong tap gets a hint, and
the child picks again. The right tap shows the explanation.

## Files

| File | What it does |
|---|---|
| `overlay.py` | The generator. Reads one worksheet, writes one HTML page. |
| `export_sheet.js` | Prints one worksheet as JSON (its page drawings, answers, hints, picture kind). Run by `overlay.py` through node. |
| `overlay_template.html` | The page design: layout, colours, hint bar, tap logic. Edit this, not the output. |
| `example-LK-J20.html` | A finished example (J20). Open it in a browser to see the behaviour. |
| `../../data/hints.js` | The hints for every question, keyed by id. |
| `../../supabase/002_done_per_child.sql` | The proposed database change for completions (not applied). |
| `out/` | Where generated pages go (`out/LK-<code>.html`). |

## Run it

```bash
python3 tools/overlay/overlay.py J20          # writes tools/overlay/out/LK-J20.html
python3 tools/overlay/overlay.py J20 -o x.html
```

Needs `node` (the worksheet engine is JavaScript). Nothing else.

## Where hints live

All hints are in `data/hints.js`, keyed by question id:

```js
window.LKG_HINTS = {
  "J20-1": ["Two kinds of animal are on the farm. Pick out only one kind to count.",
            "The hens are the birds. Touch each hen once as you count it, then find that number in the choices."],
};
```

Rules for hints (also in `process.md`, step 2b):

- **Two per question, easiest first.** Hint 1 points at the method; hint 2 is more specific.
- **Never give the letter or the final number.**
- **Plain words** a child can read; name the picture the way it looks.
- `node tools/check_sheets.js` lists every active question without two hints. Retired sheets are not checked.

If a question has no hints, the overlay still shows a picture hint (`PICTURE_HINTS` in `overlay.py`: tree, farm, number line, clock …) and then a general one. A question is never left without a way in, but the checker flags it so the hints get written.

## What the child sees

- **Right answer:** the box turns green with a tick. No pop-up.
- **Right answer tapped again:** the explanation pops up. Close it to go on.
- **Wrong answer:** nothing is marked wrong. The box gets a dashed grey outline and the hint bar shows the next hint for that question. Tapping another letter, or the same one again, moves to the next hint.
- **No score and no summary** on the paper.
- **Who is doing it:** the bottom bar lists the family members (from the database). Pick one. When all four are found, the completion is saved for that child, and their name gets a tick on the next view.

## Question-building hook

There is no question-building skill in this repo yet. Until there is, the hook is `process.md` step 2b and the checker's hint warning: a new active question with no hints is flagged. The skill will write the hints as part of building the question.

## Changing the look or behaviour

- Colours and layout: the `:root` tokens and CSS in `overlay_template.html`.
- Tap rules and wording: the script at the bottom of `overlay_template.html`.
- Picture-kind hints: `PICTURE_HINTS` in `overlay.py`.
- After any change, regenerate and test (see below).

## Test

1. `python3 tools/overlay/overlay.py J20 --demo`
2. Open the file. Tap a wrong letter: a hint appears, nothing turns red.
3. Tap the right letter: a green tick, no pop-up. Tap it again: the explanation pops up.
4. Pick a child, then solve all four: the bar says it was saved.
5. Check the sheets still pass, and see which active questions still lack hints: `node tools/check_sheets.js`.

## Using this in another repo

Copy this folder. Then change only what the other repo's engine needs:

- `export_sheet.js`: load that repo's drawing and question data instead of `js/kangaroo.js` and `data/questions.js`.
- `overlay.py`: the box size (`BOX_W`, `BOX_H`), the page size (`W`, `H`) and the rounded-corner value (`rx="12"`) must match how that repo draws its answer boxes. `answer_rows` finds the boxes by those values.

The overlay, the hint logic and the template carry over unchanged.

## Database

- The family list is read from `family_members`, and completions are written to `lkg_reviews` (kind `done`, `who` = the family member's id). Settings come from `js/config.js`, the same as the rest of the site.
- Both need a signed-in family session (the row-level security rules). Without it the picker says the list is not available.
- The completion table change is in `supabase/002_done_per_child.sql`. **It is not applied yet.** Until it is, completions are kept on the device and the page says so.
- `python3 tools/overlay/overlay.py J20 --demo` builds a preview with two sample children and no database. The mock-up artifact was made this way.

## Notes

- The answers are in the page source. That is fine for practice, not for a secret test.
- The page makes no network calls except the database ones above and the Supabase library.
