#!/usr/bin/env python3
"""Tap-to-answer overlay on a worksheet's own drawing.

The worksheet stays exactly as it prints: the page SVGs come from js/kangaroo.js (through
tools/export_sheet.js). Transparent buttons sit on the answer boxes A-E, so the child taps the
letter on the paper. Right and wrong marks are drawn over the same boxes. Nothing is printed
differently; the overlay is a separate HTML file.

Usage:
  python3 tools/overlay.py J20                  # writes overlay/LK-J20.html
  python3 tools/overlay.py J20 -o some/path.html

Needs node (the worksheet engine is JavaScript) and nothing else.
"""
import argparse
import html
import json
import pathlib
import subprocess
import sys
import xml.etree.ElementTree as ET

ROOT = pathlib.Path(__file__).resolve().parent.parent
W, H = 850, 1100            # one page, in the engine's units
BOX_W, BOX_H = 126, 78      # an answer box as kangaroo.js draws it
PAD = 4                     # the tap area is a little bigger than the box
LETTERS = "ABCDE"
TEMPLATE = pathlib.Path(__file__).resolve().parent / "overlay_template.html"


def load_sheet(code):
    run = subprocess.run(
        ["node", str(ROOT / "tools" / "export_sheet.js"), code],
        cwd=ROOT, capture_output=True, text=True,
    )
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


def build(sheet):
    pages = []
    questions = sheet["questions"]
    qi = 0
    for svg in sheet["pages"]:
        rows = answer_rows(svg)
        boxes = []
        for row in rows:
            if qi >= len(questions):
                sys.exit("More answer rows than questions")
            q = questions[qi]
            letter_index = LETTERS.index(q["answer"])
            cells = []
            for k, (x, y) in enumerate(row):
                cells.append({
                    "left": pct(x - PAD, W), "top": pct(y - PAD, H),
                    "width": pct(BOX_W + 2 * PAD, W), "height": pct(BOX_H + 2 * PAD, H),
                    "q": qi, "k": k,
                })
            boxes.append({"cells": cells, "answer": letter_index})
            qi += 1
        # the drawn page, without its fixed inch size, so it scales to the screen
        art = svg.replace('width="8.5in" height="11in"', 'class="art"', 1)
        pages.append({"svg": art, "boxes": boxes})
    if qi != len(questions):
        sys.exit(f"Found {qi} answer rows for {len(questions)} questions")

    data = [
        {"id": q["id"], "points": q["points"], "answer": LETTERS.index(q["answer"]), "why": q["why"]}
        for q in questions
    ]
    return {
        "code": sheet["code"],
        "title": sheet["title"],
        "pages": pages,
        "data": data,
    }


def render(built):
    page_blocks = []
    for n, p in enumerate(built["pages"], start=1):
        hits = []
        for row in p["boxes"]:
            for c in row["cells"]:
                hits.append(
                    f'<button class="hit" type="button" data-q="{c["q"]}" data-k="{c["k"]}" '
                    f'aria-pressed="false" aria-label="Question {c["q"] + 1}, answer {LETTERS[c["k"]]}" '
                    f'style="left:{c["left"]}%;top:{c["top"]}%;width:{c["width"]}%;height:{c["height"]}%"></button>'
                )
        page_blocks.append(
            f'<section class="paper" aria-label="Page {n}">{p["svg"]}'
            f'<div class="hits">{"".join(hits)}</div>'
            f'<div class="marks" data-page="{n}"></div></section>'
        )
    replacements = {
        "__TITLE__": html.escape(f'Learning Kangaroo #LK-{built["code"]}'),
        "__HEAD__": html.escape(f'Learning Kangaroo #LK-{built["code"]} · {built["title"]}'),
        "__PAGES__": "\n".join(page_blocks),
        "__DATA__": json.dumps(built["data"], ensure_ascii=False),
        "__LETTERS__": json.dumps(list(LETTERS)),
    }
    out = TEMPLATE.read_text(encoding="utf-8")
    for key, value in replacements.items():
        out = out.replace(key, value)
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("code", help="worksheet code, for example J20 (LK- prefix allowed)")
    ap.add_argument("-o", "--out", help="output file (default overlay/LK-<code>.html)")
    args = ap.parse_args()
    code = args.code.upper().removeprefix("LK-")
    built = build(load_sheet(code))
    out = pathlib.Path(args.out) if args.out else ROOT / "overlay" / f"LK-{code}.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(render(built), encoding="utf-8")
    print(f"Wrote {out}")


if __name__ == "__main__":
    main()
