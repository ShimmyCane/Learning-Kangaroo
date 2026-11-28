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
| `out/` | Where generated pages go (`out/LK-<code>.html`). |

## Run it

```bash
python3 tools/overlay/overlay.py J20          # writes tools/overlay/out/LK-J20.html
python3 tools/overlay/overlay.py J20 -o x.html
```

Needs `node` (the worksheet engine is JavaScript). Nothing else.

## How a question gets its hints

Each question can carry its own hints in `data/questions.js`, easiest first:

```js
{ id: "J20-1", hints: [
    "Two kinds of animal are on the farm. Pick out only one kind to count.",
    "The hens are the birds. Touch each hen once as you count it, then find that number in the choices."
  ], points: 3, text: "...", art: {...}, choices: [...], answer: "E", calc: () => 3, why: "..." },
```

Rules for hints:

- **Never give the letter away.** Point at the method, not the answer.
- **Easiest first.** The first hint is a nudge; the next is more specific.
- **Two or three is enough.** The overlay uses at most three.
- Hints do not change the printed drawing, so the sheet checker still passes.

If a question has no hints of its own, the overlay fills them in:

1. the question's own hints,
2. a hint for its picture kind (`PICTURE_HINTS` in `overlay.py`: tree, farm, number line, clock …),
3. a general hint ("Read the question once more, slowly …").

So every question always has a way in. Add hints to a question when the picture hint is not enough.

## What the child sees

- Tap a letter. Right: the box turns green with a tick, the explanation shows, and the question locks.
- Wrong: the box gets a dashed grey outline, and the hint bar shows the next hint for that question.
  Tapping another letter, or the same one again, moves to the next hint.
- The bottom bar counts solved questions. When all are solved, a summary shows how many were right on the first try, with the explanations.

## Changing the look or behaviour

- Colours and layout: the `:root` tokens and CSS in `overlay_template.html`.
- Tap rules and wording: the script at the bottom of `overlay_template.html`.
- Picture-kind hints: `PICTURE_HINTS` in `overlay.py`.
- After any change, regenerate and test (see below).

## Test

1. `python3 tools/overlay/overlay.py J20`
2. Open the file. Tap a wrong letter: a hint appears, nothing turns red.
3. Tap the right letter: a green tick, the explanation, the question locks.
4. Solve all four: the summary appears.
5. Check the sheet still passes: `node tools/check_sheets.js`.

## Using this in another repo

Copy this folder. Then change only what the other repo's engine needs:

- `export_sheet.js`: load that repo's drawing and question data instead of `js/kangaroo.js` and `data/questions.js`.
- `overlay.py`: the box size (`BOX_W`, `BOX_H`), the page size (`W`, `H`) and the rounded-corner value (`rx="12"`) must match how that repo draws its answer boxes. `answer_rows` finds the boxes by those values.

The overlay, the hint logic and the template carry over unchanged.

## Notes

- The answers are in the page source. That is fine for practice, not for a secret test.
- The page works offline; it has no network calls.
