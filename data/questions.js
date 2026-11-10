/* Learning Kangaroo: the worksheets. Our own questions, written in the style of the Math Kangaroo contest
   (pictures, a story, five choices, 3 / 4 / 5 points). Never copied from a real paper.
   One worksheet = one sheet of paper, two-sided: questions 1–2 on the front, 3–4 on the back.
   J = Joey (younger) track, R = Roo (older) track. Characters: Kip, Bo and Pip (our own kangaroos).
   Each question: text, art (a picture from js/kangaroo.js), five choices, answer (A–E), why (for the answer key),
   and calc: the answer worked out, which tools/check_sheets.js compares with the chosen letter.
   Retire, don't delete: a replaced question gets retired: true and its id is never reused. */
window.LKG_SHEETS = [
  { code: "J1", title: "Count and pattern", questions: [
    { id: "J1-1", points: 3, text: "How many apples are on the tree?", art: { kind: "tree", n: 7 }, choices: [5, 6, 7, 8, 9], answer: "C", calc: () => 7, why: "Count them one by one: 7 apples." },
    { id: "J1-2", points: 3, text: "What comes next?", art: { kind: "sequence", items: ["circle", "triangle", "circle", "triangle", "circle"] }, choices: [{ shape: "square" }, { shape: "triangle" }, { shape: "circle" }, { shape: "star" }, { shape: "heart" }], answer: "B", calc: () => "triangle", why: "Circle, triangle, circle, triangle … after a circle comes a triangle." },
    { id: "J1-3", points: 4, text: "Which kangaroo is the tallest?", art: { kind: "roos", heights: [55, 70, 62, 88, 48] }, choices: [{ see: "A" }, { see: "B" }, { see: "C" }, { see: "D" }, { see: "E" }], answer: "D", calc: () => "D", why: "D reaches highest." },
    { id: "J1-4", points: 4, text: "Kip has 3 balls. He finds 2 more. How many balls does Kip have now?", art: { kind: "addBalls", a: 3, b: 2 }, choices: [2, 3, 4, 5, 6], answer: "D", calc: () => 3 + 2, why: "3 and 2 more make 5." }
  ] },
  { code: "J2", title: "Shapes and jumps", questions: [
    { id: "J2-1", points: 3, text: "How many triangles are in the picture?", art: { kind: "shapeMix", list: [["triangle", 12, 35], ["circle", 30, 60], ["square", 46, 30], ["triangle", 62, 65], ["circle", 78, 32], ["triangle", 92, 62], ["square", 22, 82, 22], ["circle", 50, 80, 20], ["triangle", 84, 90, 22]] }, choices: [3, 4, 5, 6, 9], answer: "B", calc: a => a.art.list.filter(s => s[0] === "triangle").length, why: "Count only the shapes with 3 sides: 4." },
    { id: "J2-2", points: 3, text: "Which shape has exactly 4 corners?", art: null, choices: [{ shape: "circle" }, { shape: "triangle" }, { shape: "oval" }, { shape: "square" }, { shape: "pentagon" }], answer: "D", calc: () => "square", why: "A square has 4 corners. A triangle has 3, a pentagon 5, circles and ovals none." },
    { id: "J2-3", points: 4, text: "Kip jumps 2 steps each time. He starts at 0. Where is he after 3 jumps?", art: { kind: "numberLine", max: 10, jumps: [[0, 2]], kip: 0 }, choices: [3, 5, 6, 7, 8], answer: "C", calc: () => 2 * 3, why: "0 → 2 → 4 → 6." },
    { id: "J2-4", points: 5, text: "There were 5 cupcakes. Kip ate the ones with an X. How many are left?", art: { kind: "cupcakes", n: 5, eaten: 2 }, choices: [3, 2, 7, 5, 4], answer: "A", calc: () => 5 - 2, why: "5 take away 2 is 3." }
  ] },
  { code: "J3", title: "Look closely", questions: [
    { id: "J3-1", points: 3, text: "Which flower has the most petals?", art: { kind: "flowers", petals: [5, 8, 4, 6, 7] }, choices: [{ see: "A" }, { see: "B" }, { see: "C" }, { see: "D" }, { see: "E" }], answer: "B", calc: a => "ABCDE"[a.art.petals.indexOf(Math.max(...a.art.petals))], why: "B has 8 petals, more than any other." },
    { id: "J3-2", points: 4, text: "How many dots are there on both dice together?", art: { kind: "dice", a: 4, b: 3 }, choices: [5, 6, 8, 9, 7], answer: "E", calc: a => a.art.a + a.art.b, why: "4 dots and 3 dots make 7." },
    { id: "J3-3", points: 4, text: "What comes next?", art: { kind: "sequence", items: [1, 2, 3] }, choices: [{ dots: 2 }, { dots: 5 }, { dots: 4 }, { dots: 3 }, { dots: 6 }], answer: "C", calc: () => 4, why: "1 dot, 2 dots, 3 dots … one more each time: 4." },
    { id: "J3-4", points: 5, text: "How many squares can you find? Look for a big one too!", art: { kind: "squares", n: 2 }, choices: [5, 4, 8, 3, 6], answer: "A", calc: () => 4 + 1, why: "4 small squares and 1 big one around them: 5." }
  ] },
  { code: "R1", title: "Lines and clocks", questions: [
    { id: "R1-1", points: 3, text: "Kangaroos stand in a line. Kip is 3rd from the front and 4th from the back. How many kangaroos are in the line?", art: { kind: "line", label: "Kip" }, choices: [7, 12, 5, 8, 6], answer: "E", calc: () => 3 + 4 - 1, why: "2 in front of Kip, Kip, 3 behind: 2 + 1 + 3 = 6. (3 + 4 counts Kip twice.)" },
    { id: "R1-2", points: 3, text: "How many small squares make this shape?", art: { kind: "cells", cells: [[0, 0], [0, 1], [1, 1], [0, 2], [1, 2], [2, 2], [3, 2], [3, 1]] }, choices: [6, 7, 8, 9, 10], answer: "C", calc: a => a.art.cells.length, why: "Count row by row: 1 + 3 + 4 = 8." },
    { id: "R1-3", points: 4, text: "The clock shows 3 o'clock. What time will it show 4 hours later?", art: { kind: "clock", h: 3 }, choices: ["5 o'clock", "6 o'clock", "8 o'clock", "7 o'clock", "1 o'clock"], answer: "D", calc: () => (3 + 4) + " o'clock", why: "4, 5, 6, 7: four hours after 3 is 7 o'clock." },
    { id: "R1-4", points: 5, text: "Kip hops 3 steps forward, then 1 step back. He does this 4 times. How far from 0 is he?", art: { kind: "numberLine", max: 12, jumps: [[0, 3], [3, 2]], kip: 0 }, choices: [8, 4, 12, 6, 10], answer: "A", calc: () => 4 * (3 - 1), why: "Each time he ends 2 steps further on: 2, 4, 6, 8." }
  ] },
  { code: "R2", title: "Numbers and scales", questions: [
    { id: "R2-1", points: 3, text: "Which number is missing?", art: { kind: "missing", list: [2, 4, 6, null, 10] }, choices: [7, 9, 8, 12, 5], answer: "C", calc: () => 8, why: "Counting by 2s: 2, 4, 6, 8, 10." },
    { id: "R2-2", points: 4, text: "How many balls weigh the same as 3 cubes?", art: { kind: "balance" }, choices: [3, 5, 9, 4, 6], answer: "E", calc: () => 3 * 2, why: "Each cube is 2 balls, so 3 cubes are 2 + 2 + 2 = 6 balls." },
    { id: "R2-3", points: 4, text: "How many triangles are in this picture?", art: { kind: "splitTriangle" }, choices: [2, 3, 4, 1, 5], answer: "B", calc: () => 2 + 1, why: "2 small triangles, and the big one made of both: 3." },
    { id: "R2-4", points: 5, text: "Kip has 10 coins. He gives half of them to Bo. Then he finds 2 more. How many coins does Kip have now?", art: { kind: "coins", n: 10 }, choices: [5, 12, 8, 7, 6], answer: "D", calc: () => 10 / 2 + 2, why: "Half of 10 is 5. 5 and 2 more make 7." }
  ] },
  { code: "R3", title: "Think it through", questions: [
    { id: "R3-1", points: 3, text: "On a die, the numbers on opposite faces add up to 7. Which number is on the face opposite the 2?", art: { kind: "die", n: 2 }, choices: [1, 3, 4, 6, 5], answer: "E", calc: () => 7 - 2, why: "2 + 5 = 7." },
    { id: "R3-2", points: 4, text: "On a farm there are 3 hens and 2 dogs. How many legs are there in all?", art: { kind: "farm", hens: 3, dogs: 2 }, choices: [10, 14, 12, 16, 20], answer: "B", calc: a => a.art.hens * 2 + a.art.dogs * 4, why: "Hens: 2 + 2 + 2 = 6. Dogs: 4 + 4 = 8. 6 + 8 = 14." },
    { id: "R3-3", points: 4, text: "The pictures grow by the same amount each time. How many squares will picture 4 have?", art: { kind: "growing", counts: [1, 3, 5] }, choices: [6, 8, 9, 7, 10], answer: "D", calc: a => a.art.counts[2] + (a.art.counts[1] - a.art.counts[0]), why: "1, 3, 5: two more each time, so 7." },
    { id: "R3-4", points: 5, text: "Kip is taller than Bo. Bo is taller than Pip. Who is the shortest?", art: { kind: "names", names: ["Kip", "Bo", "Pip"] }, choices: ["Kip", "Bo", "Pip", "All the same", "Can't tell"], answer: "C", calc: () => "Pip", why: "Kip > Bo > Pip, so Pip is the shortest." }
  ] }
];
