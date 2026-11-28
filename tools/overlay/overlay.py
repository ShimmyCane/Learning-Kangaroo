#!/usr/bin/env python3
"""Tap-to-answer overlay on a worksheet's own drawing.

The worksheet stays as it prints: the page SVGs come from js/kangaroo.js (through export_sheet.js).
Transparent buttons sit on the answer boxes A-E. There are no wrong answers: a wrong tap gets a
hint, and the child picks again. The right tap shows the explanation.

Hints come from data/hints.js (two per question, easiest first, no letter given away). If a
question has none, the picture kind (a tree, a farm, a number line ...) and then a general hint
are used, so every question still has a way in.

A right tap turns the box green with no pop-up. Tapping the right box again shows the explanation.
Nothing is scored or summarised on the paper. The child is picked from the family list in the
database (js/config.js); when the sheet is done, the completion is saved for that child.

Usage:
  python3 tools/overlay/overlay.py J20                 # writes tools/overlay/out/LK-J20.html
  python3 tools/overlay/overlay.py J20 --demo          # fixed sample children, no database
  python3 tools/overlay/overlay.py J20 -o some.html

Needs node (the worksheet engine is JavaScript). See README.md in this folder.
"""
import argparse
import html
import json
import pathlib
import subprocess
import sys
import xml.etree.ElementTree as ET

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent.parent                    # the repo
EXPORT = HERE / "export_sheet.js"
TEMPLATE = HERE / "overlay_template.html"
DEFAULT_OUT = HERE / "out"

W, H = 850, 1100            # one page, in the engine's units
BOX_W, BOX_H = 126, 78      # an answer box as kangaroo.js draws it
PAD = 4                     # the tap area is a little bigger than the box
LETTERS = "ABCDE"
MAX_HINTS = 3

# Used when a question has no hints of its own. Keyed by the picture kind in data/questions.js.
PICTURE_HINTS = {
    "tree": "Point to each one as you count it, so none is missed or counted twice.",
    "sequence": "Look at how much it goes up or down each step. Keep that same change going.",
    "roos": "Compare the heights. Look for the one the question is asking about.",
    "addBalls": "Count the balls in each group first, then put the groups together.",
    "shapeMix": "Look at the sides and corners of each shape. Count only the kind the question asks for.",
    "numberLine": "Start on the number the kangaroo is on. Move one number at a time along the line.",
    "cupcakes": "Count the cupcakes in one row first, then count the rows.",
    "flowers": "Count the petals on one flower at a time, all the way around it.",
    "dice": "Count the dots on each die. Then add them up if the question asks for a total.",
    "die": "Count the dots on the die. Each dot is one.",
    "squares": "Count the small squares one row at a time.",
    "cells": "Count the small squares that make up the shape, one row at a time.",
    "line": "Start at the first kangaroo. Count the places from there to the one the question asks about.",
    "clock": "The short hand shows the hour. Find the number it points to.",
    "coins": "Add the coins one group at a time, starting with the biggest coins.",
    "balance": "Look at which side is lower. The heavier side goes down.",
    "splitTriangle": "Look at the big shape first, then find the smaller pieces inside it.",
    "farm": "Look only at the animals the question asks about. Count those, and skip the rest.",
    "growing": "Look at how the picture grows from one step to the next. What comes next?",
    "names": "Write the order down from front to back, using one clue at a time.",
    "missing": "Look at the numbers before and after the gap. How much does the list go up each time?",
}
GENERAL_HINT = "Read the question once more, slowly. What is it asking you to find?"


def load_sheet(code):
    run = subprocess.run(["node", str(EXPORT), code], cwd=ROOT, capture_output=True, text=True)
    if run.returncode:
        sys.exit(run.stderr.strip() or f"Could not export {code}")
    return json.loads(run.stdout)


def answer_rows(svg):
    """The answer rows on one page, top to bottom. Each row is five (x, y) boxes, A to E."""
    rows = {}
    for el in ET.fromstring(svg).iter():
        if el.tag.endswith("rect") and el.get("width") == str(BOX_W) and el.get("height") == str(BOX_H) and el.get("rx") == "12":
            rows.setdefault(float(el.get("y")), []).append(float(el.get("x")))
    out = []
    for y in sorted(rows):
        xs = sorted(rows[y])
        if len(xs) != len(LETTERS):
            sys.exit(f"Expected five answer boxes in a row, found {len(xs)}")
        out.append([(x, y) for x in xs])
    return out


def pct(v, of):
    return round(v / of * 100, 3)


def hints_for(q):
    """The question's own hints, then the picture's hint, then the general one. Never repeats, never more than MAX_HINTS."""
    listed = [h for h in q.get("hints", []) if h]
    fallback = [PICTURE_HINTS.get(q.get("art")), GENERAL_HINT]
    out = []
    for h in listed + fallback:
        if h and h not in out:
            out.append(h)
    return out[:MAX_HINTS]


DEMO_CHILDREN = [{"id": "demo-1", "name": "Child one"}, {"id": "demo-2", "name": "Child two"}]


def build(sheet):
    pages = []
    questions = sheet["questions"]
    qi = 0
    for svg in sheet["pages"]:
        boxes = []
        for row in answer_rows(svg):
            if qi >= len(questions):
                sys.exit("More answer rows than questions")
            cells = [
                {
                    "left": pct(x - PAD, W), "top": pct(y - PAD, H),
                    "width": pct(BOX_W + 2 * PAD, W), "height": pct(BOX_H + 2 * PAD, H),
                    "q": qi, "k": k,
                }
                for k, (x, y) in enumerate(row)
            ]
            boxes.append(cells)
            qi += 1
        # the drawn page, without its fixed inch size, so it scales to the screen
        pages.append({"svg": svg.replace('width="8.5in" height="11in"', 'class="art"', 1), "boxes": boxes})
    if qi != len(questions):
        sys.exit(f"Found {qi} answer rows for {len(questions)} questions")

    data = [
        {
            "id": q["id"],
            "answer": LETTERS.index(q["answer"]),
            "hints": hints_for(q),
            "why": q["why"],
        }
        for q in questions
    ]
    return {"code": sheet["code"], "title": sheet["title"], "pages": pages, "data": data}


def render(built, children, out):
    page_blocks = []
    for n, p in enumerate(built["pages"], start=1):
        hits = [
            f'<button class="hit" type="button" data-q="{c["q"]}" data-k="{c["k"]}" aria-pressed="false" '
            f'aria-label="Question {c["q"] + 1}, answer {LETTERS[c["k"]]}" '
            f'style="left:{c["left"]}%;top:{c["top"]}%;width:{c["width"]}%;height:{c["height"]}%"></button>'
            for row in p["boxes"] for c in row
        ]
        page_blocks.append(
            f'<section class="paper" aria-label="Page {n}">{p["svg"]}'
            f'<div class="hits">{"".join(hits)}</div><div class="marks"></div></section>'
        )
    replacements = {
        "__TITLE__": html.escape(f'Learning Kangaroo #LK-{built["code"]}'),
        "__HEAD__": html.escape(f'Learning Kangaroo #LK-{built["code"]} · {built["title"]}'),
        "__PAGES__": "\n".join(page_blocks),
        "__DATA__": json.dumps(built["data"], ensure_ascii=False),
        "__CODE__": built["code"],
        "__CHILDREN__": json.dumps(children, ensure_ascii=False) if children is not None else "null",
        "__CONFIG_SRC__": config_src(out),
    }
    out = TEMPLATE.read_text(encoding="utf-8")
    for key, value in replacements.items():
        out = out.replace(key, value)
    return out


def config_src(out):
    """The path from the output page to js/config.js (the page reads the database settings from there)."""
    import os
    return pathlib.Path(os.path.relpath(ROOT / "js" / "config.js", out.resolve().parent)).as_posix()


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("code", help="worksheet code, for example J20 (LK- prefix allowed)")
    ap.add_argument("-o", "--out", help="output file (default tools/overlay/out/LK-<code>.html)")
    ap.add_argument("--demo", action="store_true", help="use two sample children and no database (for previews)")
    args = ap.parse_args()
    code = args.code.upper().removeprefix("LK-")
    built = build(load_sheet(code))
    out = pathlib.Path(args.out) if args.out else DEFAULT_OUT / f"LK-{code}.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(render(built, DEMO_CHILDREN if args.demo else None, out), encoding="utf-8")
    print(f"Wrote {out}")


if __name__ == "__main__":
    main()
