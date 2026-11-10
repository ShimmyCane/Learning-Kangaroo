/* Learning Kangaroo: the worksheets. Our own questions, written in the style of the Math Kangaroo contest
   (pictures, a story, five choices, 3 / 4 / 5 points). Never copied from a real paper.
   One worksheet = one sheet of paper, two-sided: questions 1–2 on the front, 3–4 on the back.
   J = Joey (younger) track, R = Roo (older) track. Characters: Kip, Bo and Pip (our own kangaroos).
   Each question: text, art (a picture from js/kangaroo.js), five choices, answer (A–E), why (for the answer key),
   and calc: the answer worked out, which tools/check_sheets.js compares with the chosen letter.
   Level: "tk" = TK and younger (J1–J3, R1–R3; kept behind ⚙️ Settings, index.html?level=tk),
   "k" = Kindergarten (J4–J6, Joey), "g2" = Grade 2 (R4–R6, Roo). The level is a label, not printed on the sheet.
   Retire, don't delete: a replaced question gets retired: true and its id is never reused. */
window.LKG_SHEETS = [
  { code: "J1", level: "tk", title: "Count and pattern", questions: [
    { id: "J1-1", points: 3, text: "How many apples are on the tree?", art: { kind: "tree", n: 7 }, choices: [5, 6, 7, 8, 9], answer: "C", calc: () => 7, why: "Count them one by one: 7 apples." },
    { id: "J1-2", points: 3, text: "What comes next?", art: { kind: "sequence", items: ["circle", "triangle", "circle", "triangle", "circle"] }, choices: [{ shape: "square" }, { shape: "triangle" }, { shape: "circle" }, { shape: "star" }, { shape: "heart" }], answer: "B", calc: () => "triangle", why: "Circle, triangle, circle, triangle … after a circle comes a triangle." },
    { id: "J1-3", points: 4, text: "Which kangaroo is the tallest?", art: { kind: "roos", heights: [55, 70, 62, 88, 48] }, choices: [{ see: "A" }, { see: "B" }, { see: "C" }, { see: "D" }, { see: "E" }], answer: "D", calc: () => "D", why: "D reaches highest." },
    { id: "J1-4", points: 4, text: "Kip has 3 balls. He finds 2 more. How many balls does Kip have now?", art: { kind: "addBalls", a: 3, b: 2 }, choices: [2, 3, 4, 5, 6], answer: "D", calc: () => 3 + 2, why: "3 and 2 more make 5." }
  ] },
  { code: "J2", level: "tk", title: "Shapes and jumps", questions: [
    { id: "J2-1", points: 3, text: "How many triangles are in the picture?", art: { kind: "shapeMix", list: [["triangle", 12, 35], ["circle", 30, 60], ["square", 46, 30], ["triangle", 62, 65], ["circle", 78, 32], ["triangle", 92, 62], ["square", 22, 82, 22], ["circle", 50, 80, 20], ["triangle", 84, 90, 22]] }, choices: [3, 4, 5, 6, 9], answer: "B", calc: a => a.art.list.filter(s => s[0] === "triangle").length, why: "Count only the shapes with 3 sides: 4." },
    { id: "J2-2", points: 3, text: "Which shape has exactly 4 corners?", art: null, choices: [{ shape: "circle" }, { shape: "triangle" }, { shape: "oval" }, { shape: "square" }, { shape: "pentagon" }], answer: "D", calc: () => "square", why: "A square has 4 corners. A triangle has 3, a pentagon 5, circles and ovals none." },
    { id: "J2-3", points: 4, text: "Kip jumps 2 steps each time. He starts at 0. Where is he after 3 jumps?", art: { kind: "numberLine", max: 10, jumps: [[0, 2]], kip: 0 }, choices: [3, 5, 6, 7, 8], answer: "C", calc: () => 2 * 3, why: "0 → 2 → 4 → 6." },
    { id: "J2-4", points: 5, text: "There were 5 cupcakes. Kip ate the ones with an X. How many are left?", art: { kind: "cupcakes", n: 5, eaten: 2 }, choices: [3, 2, 7, 5, 4], answer: "A", calc: () => 5 - 2, why: "5 take away 2 is 3." }
  ] },
  { code: "J3", level: "tk", title: "Look closely", questions: [
    { id: "J3-1", points: 3, text: "Which flower has the most petals?", art: { kind: "flowers", petals: [5, 8, 4, 6, 7] }, choices: [{ see: "A" }, { see: "B" }, { see: "C" }, { see: "D" }, { see: "E" }], answer: "B", calc: a => "ABCDE"[a.art.petals.indexOf(Math.max(...a.art.petals))], why: "B has 8 petals, more than any other." },
    { id: "J3-2", points: 4, text: "How many dots are there on both dice together?", art: { kind: "dice", a: 4, b: 3 }, choices: [5, 6, 8, 9, 7], answer: "E", calc: a => a.art.a + a.art.b, why: "4 dots and 3 dots make 7." },
    { id: "J3-3", points: 4, text: "What comes next?", art: { kind: "sequence", items: [1, 2, 3] }, choices: [{ dots: 2 }, { dots: 5 }, { dots: 4 }, { dots: 3 }, { dots: 6 }], answer: "C", calc: () => 4, why: "1 dot, 2 dots, 3 dots … one more each time: 4." },
    { id: "J3-4", points: 5, text: "How many squares can you find? Look for a big one too!", art: { kind: "squares", n: 2 }, choices: [5, 4, 8, 3, 6], answer: "A", calc: () => 4 + 1, why: "4 small squares and 1 big one around them: 5." }
  ] },
  { code: "R1", level: "tk", title: "Lines and clocks", questions: [
    { id: "R1-1", points: 3, text: "Kangaroos stand in a line. Kip is 3rd from the front and 4th from the back. How many kangaroos are in the line?", art: { kind: "line", label: "Kip" }, choices: [7, 12, 5, 8, 6], answer: "E", calc: () => 3 + 4 - 1, why: "2 in front of Kip, Kip, 3 behind: 2 + 1 + 3 = 6. (3 + 4 counts Kip twice.)" },
    { id: "R1-2", points: 3, text: "How many small squares make this shape?", art: { kind: "cells", cells: [[0, 0], [0, 1], [1, 1], [0, 2], [1, 2], [2, 2], [3, 2], [3, 1]] }, choices: [6, 7, 8, 9, 10], answer: "C", calc: a => a.art.cells.length, why: "Count row by row: 1 + 3 + 4 = 8." },
    { id: "R1-3", points: 4, text: "The clock shows 3 o'clock. What time will it show 4 hours later?", art: { kind: "clock", h: 3 }, choices: ["5 o'clock", "6 o'clock", "8 o'clock", "7 o'clock", "1 o'clock"], answer: "D", calc: () => (3 + 4) + " o'clock", why: "4, 5, 6, 7: four hours after 3 is 7 o'clock." },
    { id: "R1-4", points: 5, text: "Kip hops 3 steps forward, then 1 step back. He does this 4 times. How far from 0 is he?", art: { kind: "numberLine", max: 12, jumps: [[0, 3], [3, 2]], kip: 0 }, choices: [8, 4, 12, 6, 10], answer: "A", calc: () => 4 * (3 - 1), why: "Each time he ends 2 steps further on: 2, 4, 6, 8." }
  ] },
  { code: "R2", level: "tk", title: "Numbers and scales", questions: [
    { id: "R2-1", points: 3, text: "Which number is missing?", art: { kind: "missing", list: [2, 4, 6, null, 10] }, choices: [7, 9, 8, 12, 5], answer: "C", calc: () => 8, why: "Counting by 2s: 2, 4, 6, 8, 10." },
    { id: "R2-2", points: 4, text: "How many balls weigh the same as 3 cubes?", art: { kind: "balance" }, choices: [3, 5, 9, 4, 6], answer: "E", calc: () => 3 * 2, why: "Each cube is 2 balls, so 3 cubes are 2 + 2 + 2 = 6 balls." },
    { id: "R2-3", points: 4, text: "How many triangles are in this picture?", art: { kind: "splitTriangle" }, choices: [2, 3, 4, 1, 5], answer: "B", calc: () => 2 + 1, why: "2 small triangles, and the big one made of both: 3." },
    { id: "R2-4", points: 5, text: "Kip has 10 coins. He gives half of them to Bo. Then he finds 2 more. How many coins does Kip have now?", art: { kind: "coins", n: 10 }, choices: [5, 12, 8, 7, 6], answer: "D", calc: () => 10 / 2 + 2, why: "Half of 10 is 5. 5 and 2 more make 7." }
  ] },
  { code: "R3", level: "tk", title: "Think it through", questions: [
    { id: "R3-1", points: 3, text: "On a die, the numbers on opposite faces add up to 7. Which number is on the face opposite the 2?", art: { kind: "die", n: 2 }, choices: [1, 3, 4, 6, 5], answer: "E", calc: () => 7 - 2, why: "2 + 5 = 7." },
    { id: "R3-2", points: 4, text: "On a farm there are 3 hens and 2 dogs. How many legs are there in all?", art: { kind: "farm", hens: 3, dogs: 2 }, choices: [10, 14, 12, 16, 20], answer: "B", calc: a => a.art.hens * 2 + a.art.dogs * 4, why: "Hens: 2 + 2 + 2 = 6. Dogs: 4 + 4 = 8. 6 + 8 = 14." },
    { id: "R3-3", points: 4, text: "The pictures grow by the same amount each time. How many squares will picture 4 have?", art: { kind: "growing", counts: [1, 3, 5] }, choices: [6, 8, 9, 7, 10], answer: "D", calc: a => a.art.counts[2] + (a.art.counts[1] - a.art.counts[0]), why: "1, 3, 5: two more each time, so 7." },
    { id: "R3-4", points: 5, text: "Kip is taller than Bo. Bo is taller than Pip. Who is the shortest?", art: { kind: "names", names: ["Kip", "Bo", "Pip"] }, choices: ["Kip", "Bo", "Pip", "All the same", "Can't tell"], answer: "C", calc: () => "Pip", why: "Kip > Bo > Pip, so Pip is the shortest." }
  ] },
  { code: "J4", level: "k", title: "Counting and comparing", questions: [
    { id: "J4-1", points: 3, text: "Kip counts up from 10: 10, 11, 12, 13. Which number comes right after 15?", art: null, choices: [14, 20, 17, 18, 16], answer: "E", calc: () => 16, why: "15, then 16 comes next." },
    { id: "J4-2", points: 3, text: "Which number is missing?", art: { kind: "missing", list: [10, 11, null, 13, 14, 15] }, choices: [12, 13, 9, 15, 10], answer: "A", calc: () => 12, why: "10, 11, 12, 13 … counting up by ones: 12." },
    { id: "J4-3", points: 4, text: "Kip has the 4 coins shown. Bo has 2 more coins than Kip. How many coins does Bo have?", art: { kind: "coins", n: 4 }, choices: [2, 8, 6, 5, 4], answer: "C", calc: () => 4 + 2, why: "4 coins and 2 more make 6." },
    { id: "J4-4", points: 5, text: "Kip has 5 balls. Bo has 3 balls. Pip has as many balls as Kip and Bo together. How many balls does Pip have?", art: null, choices: [8, 5, 2, 15, 1], answer: "A", calc: () => 5 + 3, why: "Kip and Bo together: 5 + 3 = 8." }
  ] },
  { code: "J5", level: "k", title: "Shapes and patterns", questions: [
    { id: "J5-1", points: 3, text: "The shapes go circle, square, square, circle, square… What comes next?", art: { kind: "sequence", items: ["circle", "square", "square", "circle", "square"] }, choices: [{ shape: "triangle" }, { shape: "circle" }, { shape: "heart" }, { shape: "star" }, { shape: "square" }], answer: "E", calc: () => "square", why: "The pattern repeats every 3: circle, square, square." },
    { id: "J5-2", points: 4, text: "Kip draws a triangle, and next to it a square. How many corners do the two shapes have together?", art: null, choices: [5, 6, 9, 7, 8], answer: "D", calc: () => 3 + 4, why: "A triangle has 3 corners and a square 4: 7 together." },
    { id: "J5-3", points: 4, text: "How many circles are there?", art: { kind: "shapeMix", list: [["circle", 12, 40], ["square", 30, 70], ["circle", 48, 40], ["triangle", 66, 70], ["circle", 82, 40], ["square", 12, 85], ["circle", 58, 85], ["triangle", 88, 85]] }, choices: [6, 4, 3, 5, 2], answer: "B", calc: a => a.art.list.filter(s => s[0] === "circle").length, why: "Count only the round shapes: 4." },
    { id: "J5-4", points: 5, text: "Kip has 9 carrots. He gives 3 to Bo, then finds 2 more. Then he gives 1 to Pip. How many carrots does Kip have now?", art: null, choices: [7, 6, 5, 8, 11], answer: "A", calc: () => 9 - 3 + 2 - 1, why: "9 − 3 = 6, + 2 = 8, − 1 = 7." }
  ] },
  { code: "J6", level: "k", title: "Counting in the picture", questions: [
    { id: "J6-1", points: 3, text: "How many cupcakes are left? Don't count the ones with an X.", art: { kind: "cupcakes", n: 6, eaten: 2 }, choices: [2, 3, 6, 5, 4], answer: "E", calc: () => 6 - 2, why: "6 cupcakes, 2 with an X: 4 are left." },
    { id: "J6-2", points: 3, text: "Which flower has the fewest petals?", art: { kind: "flowers", petals: [4, 6, 3, 5, 2] }, choices: [{ see: "A" }, { see: "B" }, { see: "C" }, { see: "D" }, { see: "E" }], answer: "E", calc: a => "ABCDE"[a.art.petals.indexOf(Math.min(...a.art.petals))], why: "E has 2 petals, the fewest." },
    { id: "J6-3", points: 4, text: "How many animals are on the farm?", art: { kind: "farm", hens: 4, dogs: 1 }, choices: [4, 5, 6, 7, 9], answer: "B", calc: a => a.art.hens + a.art.dogs, why: "4 hens and 1 dog: 5 animals." },
    { id: "J6-4", points: 5, text: "Each picture has 2 more dots than the one before it. How many dots are in the empty box?", art: { kind: "sequence", items: [1, 3, 5] }, choices: [{ dots: 8 }, { dots: 7 }, { dots: 6 }, { dots: 5 }, { dots: 9 }], answer: "B", calc: () => 7, why: "1, 3, 5, then 7: two more each time." }
  ] },
  { code: "R4", level: "g2", title: "Adding and money", questions: [
    { id: "R4-1", points: 3, text: "Kip has 25 stickers. Bo has 17 stickers. How many stickers do they have together?", art: null, choices: [38, 52, 48, 32, 42], answer: "E", calc: () => 25 + 17, why: "25 + 17 = 42. Add the tens, then the ones." },
    { id: "R4-2", points: 3, text: "A pencil costs 8 coins. Pip has 20 coins and buys one pencil. How many coins does Pip have left?", art: null, choices: [8, 10, 14, 12, 28], answer: "D", calc: () => 20 - 8, why: "20 − 8 = 12." },
    { id: "R4-3", points: 4, text: "The numbers count up by 5s. Which number is missing?", art: { kind: "missing", list: [20, 25, null, 35, 40] }, choices: [30, 34, 45, 28, 32], answer: "A", calc: () => 30, why: "20, 25, 30, 35, 40: count on by 5s." },
    { id: "R4-4", points: 5, text: "Pip has 2 coins of 10 and 3 coins of 1. Bo has 2 coins of 10 and nothing else. How much more money does Pip have?", art: null, choices: [1, 3, 13, 2, 5], answer: "B", calc: () => 2 * 10 + 3 - 2 * 10, why: "Pip has 23 and Bo has 20. The difference is 3." }
  ] },
  { code: "R5", level: "g2", title: "Times and time", questions: [
    { id: "R5-1", points: 3, text: "Each kangaroo has 2 legs. How many legs do 4 kangaroos have?", art: null, choices: [6, 4, 12, 10, 8], answer: "E", calc: () => 2 * 4, why: "2 + 2 + 2 + 2 = 8." },
    { id: "R5-2", points: 3, text: "The clock shows 9 o'clock. What time will it be 3 hours later?", art: { kind: "clock", h: 9 }, choices: ["10 o'clock", "11 o'clock", "1 o'clock", "12 o'clock", "2 o'clock"], answer: "D", calc: () => (9 + 3) + " o'clock", why: "10, 11, 12: three hours after 9 is 12 o'clock." },
    { id: "R5-3", points: 4, text: "Kip jumps 5 steps each time, from 0. The first jump is shown. Where is he after 4 jumps?", art: { kind: "numberLine", max: 20, jumps: [[0, 5]], kip: 0 }, choices: [9, 15, 20, 25, 10], answer: "C", calc: () => 5 * 4, why: "5, 10, 15, 20: four jumps of 5 make 20." },
    { id: "R5-4", points: 5, text: "Bo puts 4 cups in each row. He sets out 5 rows. How many cups are there in all?", art: null, choices: [9, 15, 25, 20, 45], answer: "D", calc: () => 4 * 5, why: "5 rows of 4: 4 + 4 + 4 + 4 + 4 = 20." }
  ] },
  { code: "R6", level: "g2", title: "Shapes and logic", questions: [
    { id: "R6-1", points: 3, text: "Which shape has exactly 3 sides?", art: null, choices: [{ shape: "square" }, { shape: "circle" }, { shape: "triangle" }, { shape: "pentagon" }, { shape: "oval" }], answer: "C", calc: () => "triangle", why: "A triangle has 3 sides. A square has 4, a pentagon 5." },
    { id: "R6-2", points: 4, text: "How many small squares are in this shape?", art: { kind: "cells", cells: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [3, 2]] }, choices: [5, 7, 6, 8, 4], answer: "C", calc: a => a.art.cells.length, why: "A column of 3, then 3 more along the bottom, sharing the corner: 6." },
    { id: "R6-3", points: 4, text: "Kip is to the left of Bo. Pip is to the right of Bo. Who is in the middle?", art: null, choices: ["Kip", "Bo", "Pip", "Nobody", "Can't tell"], answer: "B", calc: () => "Bo", why: "From left to right: Kip, Bo, Pip. Bo is in the middle." },
    { id: "R6-4", points: 5, text: "Kip thinks of a number. He adds 9, then takes away 4, and gets 20. What number did he start with?", art: null, choices: [5, 11, 13, 15, 29], answer: "D", calc: () => 20 + 4 - 9, why: "Work backwards: 20 + 4 = 24, then 24 − 9 = 15." }
  ] }
];
