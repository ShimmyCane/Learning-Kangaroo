/* Learning Kangaroo: the worksheets. Our own questions, written in the style of the Math Kangaroo contest
   (pictures, a story, five choices, 3 / 4 / 5 points). Never copied from a real paper.
   One worksheet = one sheet of paper, two-sided: questions 1–2 on the front, 3–4 on the back.
   J = Joey (younger) track, R = Roo (older) track. Characters: Kip, Bo and Pip (our own kangaroos).
   Each question: text, art (a picture from js/kangaroo.js), five choices, answer (A–E), why (for the answer key),
   and calc: the answer worked out, which tools/check_sheets.js compares with the chosen letter.
   Level: "tk" = TK and younger, "k" = Kindergarten (Joey), "g2" = Grade 2 (Roo). The level is a label, not printed on the sheet.
   Archive: a replaced sheet or question gets retired: true (shown under Settings > Archive), and its code or id is never reused. */
window.LKG_SHEETS = [
  { code: "J1", level: "tk", retired: true, title: "Count and pattern", questions: [
    { id: "J1-1", points: 3, text: "How many apples are on the tree?", art: { kind: "tree", n: 7 }, choices: [5, 6, 7, 8, 9], answer: "C", calc: () => 7, why: "Count them one by one: 7 apples." },
    { id: "J1-2", points: 3, text: "What comes next?", art: { kind: "sequence", items: ["circle", "triangle", "circle", "triangle", "circle"] }, choices: [{ shape: "square" }, { shape: "triangle" }, { shape: "circle" }, { shape: "star" }, { shape: "heart" }], answer: "B", calc: () => "triangle", why: "Circle, triangle, circle, triangle … after a circle comes a triangle." },
    { id: "J1-3", points: 4, text: "Which kangaroo is the tallest?", art: { kind: "roos", heights: [55, 70, 62, 88, 48] }, choices: [{ see: "A" }, { see: "B" }, { see: "C" }, { see: "D" }, { see: "E" }], answer: "D", calc: () => "D", why: "D reaches highest." },
    { id: "J1-4", points: 4, text: "Kip has 3 balls. He finds 2 more. How many balls does Kip have now?", art: { kind: "addBalls", a: 3, b: 2 }, choices: [2, 3, 4, 5, 6], answer: "D", calc: () => 3 + 2, why: "3 and 2 more make 5." }
  ] },
  { code: "J2", level: "tk", retired: true, title: "Shapes and jumps", questions: [
    { id: "J2-1", points: 3, text: "How many triangles are in the picture?", art: { kind: "shapeMix", list: [["triangle", 12, 35], ["circle", 30, 60], ["square", 46, 30], ["triangle", 62, 65], ["circle", 78, 32], ["triangle", 92, 62], ["square", 22, 82, 22], ["circle", 50, 80, 20], ["triangle", 84, 90, 22]] }, choices: [3, 4, 5, 6, 9], answer: "B", calc: a => a.art.list.filter(s => s[0] === "triangle").length, why: "Count only the shapes with 3 sides: 4." },
    { id: "J2-2", points: 3, text: "Which shape has exactly 4 corners?", art: null, choices: [{ shape: "circle" }, { shape: "triangle" }, { shape: "oval" }, { shape: "square" }, { shape: "pentagon" }], answer: "D", calc: () => "square", why: "A square has 4 corners. A triangle has 3, a pentagon 5, circles and ovals none." },
    { id: "J2-3", points: 4, text: "Kip jumps 2 steps each time. He starts at 0. Where is he after 3 jumps?", art: { kind: "numberLine", max: 10, jumps: [[0, 2]], kip: 0 }, choices: [3, 5, 6, 7, 8], answer: "C", calc: () => 2 * 3, why: "0 → 2 → 4 → 6." },
    { id: "J2-4", points: 5, text: "There were 5 cupcakes. Kip ate the ones with an X. How many are left?", art: { kind: "cupcakes", n: 5, eaten: 2 }, choices: [3, 2, 7, 5, 4], answer: "A", calc: () => 5 - 2, why: "5 take away 2 is 3." }
  ] },
  { code: "J3", level: "tk", retired: true, title: "Look closely", questions: [
    { id: "J3-1", points: 3, text: "Which flower has the most petals?", art: { kind: "flowers", petals: [5, 8, 4, 6, 7] }, choices: [{ see: "A" }, { see: "B" }, { see: "C" }, { see: "D" }, { see: "E" }], answer: "B", calc: a => "ABCDE"[a.art.petals.indexOf(Math.max(...a.art.petals))], why: "B has 8 petals, more than any other." },
    { id: "J3-2", points: 4, text: "How many dots are there on both dice together?", art: { kind: "dice", a: 4, b: 3 }, choices: [5, 6, 8, 9, 7], answer: "E", calc: a => a.art.a + a.art.b, why: "4 dots and 3 dots make 7." },
    { id: "J3-3", points: 4, text: "What comes next?", art: { kind: "sequence", items: [1, 2, 3] }, choices: [{ dots: 2 }, { dots: 5 }, { dots: 4 }, { dots: 3 }, { dots: 6 }], answer: "C", calc: () => 4, why: "1 dot, 2 dots, 3 dots … one more each time: 4." },
    { id: "J3-4", points: 5, text: "How many squares can you find? Look for a big one too!", art: { kind: "squares", n: 2 }, choices: [5, 4, 8, 3, 6], answer: "A", calc: () => 4 + 1, why: "4 small squares and 1 big one around them: 5." }
  ] },
  { code: "R1", level: "tk", retired: true, title: "Lines and clocks", questions: [
    { id: "R1-1", points: 3, text: "Kangaroos stand in a line. Kip is 3rd from the front and 4th from the back. How many kangaroos are in the line?", art: { kind: "line", label: "Kip" }, choices: [7, 12, 5, 8, 6], answer: "E", calc: () => 3 + 4 - 1, why: "2 in front of Kip, Kip, 3 behind: 2 + 1 + 3 = 6. (3 + 4 counts Kip twice.)" },
    { id: "R1-2", points: 3, text: "How many small squares make this shape?", art: { kind: "cells", cells: [[0, 0], [0, 1], [1, 1], [0, 2], [1, 2], [2, 2], [3, 2], [3, 1]] }, choices: [6, 7, 8, 9, 10], answer: "C", calc: a => a.art.cells.length, why: "Count row by row: 1 + 3 + 4 = 8." },
    { id: "R1-3", points: 4, text: "The clock shows 3 o'clock. What time will it show 4 hours later?", art: { kind: "clock", h: 3 }, choices: ["5 o'clock", "6 o'clock", "8 o'clock", "7 o'clock", "1 o'clock"], answer: "D", calc: () => (3 + 4) + " o'clock", why: "4, 5, 6, 7: four hours after 3 is 7 o'clock." },
    { id: "R1-4", points: 5, text: "Kip hops 3 steps forward, then 1 step back. He does this 4 times. How far from 0 is he?", art: { kind: "numberLine", max: 12, jumps: [[0, 3], [3, 2]], kip: 0 }, choices: [8, 4, 12, 6, 10], answer: "A", calc: () => 4 * (3 - 1), why: "Each time he ends 2 steps further on: 2, 4, 6, 8." }
  ] },
  { code: "R2", level: "tk", retired: true, title: "Numbers and scales", questions: [
    { id: "R2-1", points: 3, text: "Which number is missing?", art: { kind: "missing", list: [2, 4, 6, null, 10] }, choices: [7, 9, 8, 12, 5], answer: "C", calc: () => 8, why: "Counting by 2s: 2, 4, 6, 8, 10." },
    { id: "R2-2", points: 4, text: "How many balls weigh the same as 3 cubes?", art: { kind: "balance" }, choices: [3, 5, 9, 4, 6], answer: "E", calc: () => 3 * 2, why: "Each cube is 2 balls, so 3 cubes are 2 + 2 + 2 = 6 balls." },
    { id: "R2-3", points: 4, text: "How many triangles are in this picture?", art: { kind: "splitTriangle" }, choices: [2, 3, 4, 1, 5], answer: "B", calc: () => 2 + 1, why: "2 small triangles, and the big one made of both: 3." },
    { id: "R2-4", points: 5, text: "Kip has 10 coins. He gives half of them to Bo. Then he finds 2 more. How many coins does Kip have now?", art: { kind: "coins", n: 10 }, choices: [5, 12, 8, 7, 6], answer: "D", calc: () => 10 / 2 + 2, why: "Half of 10 is 5. 5 and 2 more make 7." }
  ] },
  { code: "R3", level: "tk", retired: true, title: "Think it through", questions: [
    { id: "R3-1", points: 3, text: "On a die, the numbers on opposite faces add up to 7. Which number is on the face opposite the 2?", art: { kind: "die", n: 2 }, choices: [1, 3, 4, 6, 5], answer: "E", calc: () => 7 - 2, why: "2 + 5 = 7." },
    { id: "R3-2", points: 4, text: "On a farm there are 3 hens and 2 dogs. How many legs are there in all?", art: { kind: "farm", hens: 3, dogs: 2 }, choices: [10, 14, 12, 16, 20], answer: "B", calc: a => a.art.hens * 2 + a.art.dogs * 4, why: "Hens: 2 + 2 + 2 = 6. Dogs: 4 + 4 = 8. 6 + 8 = 14." },
    { id: "R3-3", points: 4, text: "The pictures grow by the same amount each time. How many squares will picture 4 have?", art: { kind: "growing", counts: [1, 3, 5] }, choices: [6, 8, 9, 7, 10], answer: "D", calc: a => a.art.counts[2] + (a.art.counts[1] - a.art.counts[0]), why: "1, 3, 5: two more each time, so 7." },
    { id: "R3-4", points: 5, text: "Kip is taller than Bo. Bo is taller than Pip. Who is the shortest?", art: { kind: "names", names: ["Kip", "Bo", "Pip"] }, choices: ["Kip", "Bo", "Pip", "All the same", "Can't tell"], answer: "C", calc: () => "Pip", why: "Kip > Bo > Pip, so Pip is the shortest." }
  ] },
  { code: "J4", level: "k", retired: true, title: "Counting and comparing", questions: [
    { id: "J4-1", points: 3, text: "Kip counts up from 10: 10, 11, 12, 13. Which number comes right after 15?", art: null, choices: [14, 20, 17, 18, 16], answer: "E", calc: () => 16, why: "15, then 16 comes next." },
    { id: "J4-2", points: 3, text: "Which number is missing?", art: { kind: "missing", list: [10, 11, null, 13, 14, 15] }, choices: [12, 13, 9, 15, 10], answer: "A", calc: () => 12, why: "10, 11, 12, 13 … counting up by ones: 12." },
    { id: "J4-3", points: 4, text: "Kip has the 4 coins shown. Bo has 2 more coins than Kip. How many coins does Bo have?", art: { kind: "coins", n: 4 }, choices: [2, 8, 6, 5, 4], answer: "C", calc: () => 4 + 2, why: "4 coins and 2 more make 6." },
    { id: "J4-4", points: 5, text: "Kip has 5 balls. Bo has 3 balls. Pip has as many balls as Kip and Bo together. How many balls does Pip have?", art: null, choices: [8, 5, 2, 15, 1], answer: "A", calc: () => 5 + 3, why: "Kip and Bo together: 5 + 3 = 8." }
  ] },
  { code: "J5", level: "k", retired: true, title: "Shapes and patterns", questions: [
    { id: "J5-1", points: 3, text: "The shapes go circle, square, square, circle, square… What comes next?", art: { kind: "sequence", items: ["circle", "square", "square", "circle", "square"] }, choices: [{ shape: "triangle" }, { shape: "circle" }, { shape: "heart" }, { shape: "star" }, { shape: "square" }], answer: "E", calc: () => "square", why: "The pattern repeats every 3: circle, square, square." },
    { id: "J5-2", points: 4, text: "Kip draws a triangle, and next to it a square. How many corners do the two shapes have together?", art: null, choices: [5, 6, 9, 7, 8], answer: "D", calc: () => 3 + 4, why: "A triangle has 3 corners and a square 4: 7 together." },
    { id: "J5-3", points: 4, text: "How many circles are there?", art: { kind: "shapeMix", list: [["circle", 12, 40], ["square", 30, 70], ["circle", 48, 40], ["triangle", 66, 70], ["circle", 82, 40], ["square", 12, 85], ["circle", 58, 85], ["triangle", 88, 85]] }, choices: [6, 4, 3, 5, 2], answer: "B", calc: a => a.art.list.filter(s => s[0] === "circle").length, why: "Count only the round shapes: 4." },
    { id: "J5-4", points: 5, text: "Kip has 9 carrots. He gives 3 to Bo, then finds 2 more. Then he gives 1 to Pip. How many carrots does Kip have now?", art: null, choices: [7, 6, 5, 8, 11], answer: "A", calc: () => 9 - 3 + 2 - 1, why: "9 − 3 = 6, + 2 = 8, − 1 = 7." }
  ] },
  { code: "J6", level: "k", retired: true, title: "Counting in the picture", questions: [
    { id: "J6-1", points: 3, text: "How many cupcakes are left? Don't count the ones with an X.", art: { kind: "cupcakes", n: 6, eaten: 2 }, choices: [2, 3, 6, 5, 4], answer: "E", calc: () => 6 - 2, why: "6 cupcakes, 2 with an X: 4 are left." },
    { id: "J6-2", points: 3, text: "Which flower has the fewest petals?", art: { kind: "flowers", petals: [4, 6, 3, 5, 2] }, choices: [{ see: "A" }, { see: "B" }, { see: "C" }, { see: "D" }, { see: "E" }], answer: "E", calc: a => "ABCDE"[a.art.petals.indexOf(Math.min(...a.art.petals))], why: "E has 2 petals, the fewest." },
    { id: "J6-3", points: 4, text: "How many animals are on the farm?", art: { kind: "farm", hens: 4, dogs: 1 }, choices: [4, 5, 6, 7, 9], answer: "B", calc: a => a.art.hens + a.art.dogs, why: "4 hens and 1 dog: 5 animals." },
    { id: "J6-4", points: 5, text: "Each picture has 2 more dots than the one before it. How many dots are in the empty box?", art: { kind: "sequence", items: [1, 3, 5] }, choices: [{ dots: 8 }, { dots: 7 }, { dots: 6 }, { dots: 5 }, { dots: 9 }], answer: "B", calc: () => 7, why: "1, 3, 5, then 7: two more each time." }
  ] },
  { code: "R4", level: "g2", retired: true, title: "Adding and money", questions: [
    { id: "R4-1", points: 3, text: "Kip has 25 stickers. Bo has 17 stickers. How many stickers do they have together?", art: null, choices: [38, 52, 48, 32, 42], answer: "E", calc: () => 25 + 17, why: "25 + 17 = 42. Add the tens, then the ones." },
    { id: "R4-2", points: 3, text: "A pencil costs 8 coins. Pip has 20 coins and buys one pencil. How many coins does Pip have left?", art: null, choices: [8, 10, 14, 12, 28], answer: "D", calc: () => 20 - 8, why: "20 − 8 = 12." },
    { id: "R4-3", points: 4, text: "The numbers count up by 5s. Which number is missing?", art: { kind: "missing", list: [20, 25, null, 35, 40] }, choices: [30, 34, 45, 28, 32], answer: "A", calc: () => 30, why: "20, 25, 30, 35, 40: count on by 5s." },
    { id: "R4-4", points: 5, text: "Pip has 2 coins of 10 and 3 coins of 1. Bo has 2 coins of 10 and nothing else. How much more money does Pip have?", art: null, choices: [1, 3, 13, 2, 5], answer: "B", calc: () => 2 * 10 + 3 - 2 * 10, why: "Pip has 23 and Bo has 20. The difference is 3." }
  ] },
  { code: "R5", level: "g2", retired: true, title: "Times and time", questions: [
    { id: "R5-1", points: 3, text: "Each kangaroo has 2 legs. How many legs do 4 kangaroos have?", art: null, choices: [6, 4, 12, 10, 8], answer: "E", calc: () => 2 * 4, why: "2 + 2 + 2 + 2 = 8." },
    { id: "R5-2", points: 3, text: "The clock shows 9 o'clock. What time will it be 3 hours later?", art: { kind: "clock", h: 9 }, choices: ["10 o'clock", "11 o'clock", "1 o'clock", "12 o'clock", "2 o'clock"], answer: "D", calc: () => (9 + 3) + " o'clock", why: "10, 11, 12: three hours after 9 is 12 o'clock." },
    { id: "R5-3", points: 4, text: "Kip jumps 5 steps each time, from 0. The first jump is shown. Where is he after 4 jumps?", art: { kind: "numberLine", max: 20, jumps: [[0, 5]], kip: 0 }, choices: [9, 15, 20, 25, 10], answer: "C", calc: () => 5 * 4, why: "5, 10, 15, 20: four jumps of 5 make 20." },
    { id: "R5-4", points: 5, text: "Bo puts 4 cups in each row. He sets out 5 rows. How many cups are there in all?", art: null, choices: [9, 15, 25, 20, 45], answer: "D", calc: () => 4 * 5, why: "5 rows of 4: 4 + 4 + 4 + 4 + 4 = 20." }
  ] },
  { code: "R6", level: "g2", retired: true, title: "Shapes and logic", questions: [
    { id: "R6-1", points: 3, text: "Which shape has exactly 3 sides?", art: null, choices: [{ shape: "square" }, { shape: "circle" }, { shape: "triangle" }, { shape: "pentagon" }, { shape: "oval" }], answer: "C", calc: () => "triangle", why: "A triangle has 3 sides. A square has 4, a pentagon 5." },
    { id: "R6-2", points: 4, text: "How many small squares are in this shape?", art: { kind: "cells", cells: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [3, 2]] }, choices: [5, 7, 6, 8, 4], answer: "C", calc: a => a.art.cells.length, why: "A column of 3, then 3 more along the bottom, sharing the corner: 6." },
    { id: "R6-3", points: 4, text: "Kip is to the left of Bo. Pip is to the right of Bo. Who is in the middle?", art: null, choices: ["Kip", "Bo", "Pip", "Nobody", "Can't tell"], answer: "B", calc: () => "Bo", why: "From left to right: Kip, Bo, Pip. Bo is in the middle." },
    { id: "R6-4", points: 5, text: "Kip thinks of a number. He adds 9, then takes away 4, and gets 20. What number did he start with?", art: null, choices: [5, 11, 13, 15, 29], answer: "D", calc: () => 20 + 4 - 9, why: "Work backwards: 20 + 4 = 24, then 24 − 9 = 15." }
  ] },
  { code: "J7", level: "k", retired: true, title: "Counting & Comparing", questions: [
    { id: "J7-1", points: 3, text: "How many apples are hanging on the tree?", art: {"kind": "tree", "n": 5}, choices: [5, 6, 7, 3, 4], answer: "A", calc: () => 5, why: "Count the apples on the branches one by one: 5 apples." },
    { id: "J7-2", points: 3, text: "Which number comes next in the row?", art: {"kind": "missing", "list": [2, 3, 4, null]}, choices: [4, 5, 6, 7, 3], answer: "B", calc: () => 5, why: "Counting forward by ones: 2, 3, 4, 5." },
    { id: "J7-3", points: 4, text: "Bo sees these shapes. How many stars are there?", art: {"kind": "shapeMix", "list": [["star", 20, 30], ["star", 60, 40], ["circle", 40, 70], ["star", 80, 20]]}, choices: [6, 2, 3, 4, 5], answer: "C", calc: () => 3, why: "Count only the 5-pointed stars: there are 3 stars." },
    { id: "J7-4", points: 5, text: "Pip has 4 cupcakes. He eats 2 of them. How many cupcakes are left?", art: {"kind": "cupcakes", "n": 4, "eaten": 2}, choices: [4, 5, 1, 2, 3], answer: "D", calc: () => 2, why: "Subtract the 2 eaten cupcakes from 4: 4 - 2 = 2." }
  ] },
  { code: "J8", level: "k", retired: true, title: "Adding & Shapes", questions: [
    { id: "J8-1", points: 3, text: "How many red balls are there in total?", art: {"kind": "addBalls", "a": 3, "b": 2}, choices: [6, 7, 3, 4, 5], answer: "E", calc: () => 5, why: "Add the two groups of balls together: 3 + 2 = 5." },
    { id: "J8-2", points: 4, text: "Which kangaroo is the tallest?", art: {"kind": "roos", "heights": [2, 4, 5, 3, 1]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "C", calc: () => "C", why: "Kangaroo C has height 5, which is taller than all the others." },
    { id: "J8-3", points: 4, text: "Which flower has exactly 6 petals?", art: {"kind": "flowers", "petals": [4, 5, 6, 3, 7]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "C", calc: () => "C", why: "Count petals on each flower: Flower C has 6 petals." },
    { id: "J8-4", points: 5, text: "Bo rolls a die. How many dots are on the top face?", art: {"kind": "die", "n": 6}, choices: [6, 3, 2, 4, 5], answer: "A", calc: () => 6, why: "Count the dots on the single die face: 6." }
  ] },
  { code: "J9", level: "k", retired: true, title: "Jumps & Patterns", questions: [
    { id: "J9-1", points: 3, text: "Where is Kip sitting on the number line?", art: {"kind": "numberLine", "max": 6, "jumps": [], "kip": 3}, choices: [2, 3, 4, 5, 1], answer: "B", calc: () => 3, why: "Kip is sitting directly above the number 3." },
    { id: "J9-2", points: 4, text: "What is the missing number in the sequence?", art: {"kind": "missing", "list": [5, 6, null, 8]}, choices: [5, 6, 7, 8, 9], answer: "C", calc: () => 7, why: "Counting forward by ones: 5, 6, 7, 8." },
    { id: "J9-3", points: 4, text: "How many small squares make up this shape?", art: {"kind": "cells", "cells": [[0, 0], [0, 1], [1, 0], [1, 1]]}, choices: [6, 2, 3, 4, 5], answer: "D", calc: () => 4, why: "Count all grid units: 4 small squares arranged in a 2x2 grid." },
    { id: "J9-4", points: 5, text: "Kip starts at 1 and makes one jump of size 3. Where does he land?", art: {"kind": "numberLine", "max": 6, "jumps": [[1, 4]], "kip": 1}, choices: [5, 6, 2, 3, 4], answer: "E", calc: () => 4, why: "1 + 3 = 4." }
  ] },
  { code: "J10", level: "k", retired: true, title: "Farm & Animals", questions: [
    { id: "J10-1", points: 3, text: "How many hens are on the farm?", art: {"kind": "farm", "hens": 3, "dogs": 2}, choices: [3, 4, 5, 1, 2], answer: "A", calc: () => 3, why: "Count only the hens: there are 3." },
    { id: "J10-2", points: 4, text: "How many total animals are on the farm?", art: {"kind": "farm", "hens": 4, "dogs": 2}, choices: [5, 6, 7, 8, 4], answer: "B", calc: () => 6, why: "Add 4 hens + 2 dogs = 6 animals." },
    { id: "J10-3", points: 4, text: "Which flower has the fewest petals?", art: {"kind": "flowers", "petals": [5, 3, 6, 4, 7]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "B", calc: () => "B", why: "Flower B has 3 petals, which is smaller than 4, 5, 6, or 7." },
    { id: "J10-4", points: 5, text: "Pip has 3 apples. Bo gives him 2 more. How many apples does Pip have now?", art: null, choices: [3, 4, 5, 6, 7], answer: "C", calc: () => 5, why: "3 + 2 = 5." }
  ] },
  { code: "J11", level: "k", retired: true, title: "Time & Order", questions: [
    { id: "J11-1", points: 3, text: "What hour does the clock show?", art: {"kind": "clock", "h": 4}, choices: [6, 2, 3, 4, 5], answer: "D", calc: () => 4, why: "The hour hand points directly at the number 4." },
    { id: "J11-2", points: 4, text: "Kip rolls two dice. What is the sum of the dots?", art: {"kind": "dice", "a": 2, "b": 3}, choices: [6, 7, 3, 4, 5], answer: "E", calc: () => 5, why: "Add dots on both dice: 2 + 3 = 5." },
    { id: "J11-3", points: 4, text: "How many coins are in the pile?", art: {"kind": "coins", "n": 7}, choices: [7, 8, 9, 5, 6], answer: "A", calc: () => 7, why: "Count all coins in the stack: 7." },
    { id: "J11-4", points: 5, text: "Bo has 6 carrots. He gives 3 to Pip and 1 to Kip. How many carrots are left for Bo?", art: null, choices: [1, 2, 3, 4, 5], answer: "B", calc: () => 2, why: "6 - 3 - 1 = 2." }
  ] },
  { code: "J12", level: "k", retired: true, title: "Growing Patterns", questions: [
    { id: "J12-1", points: 3, text: "How many dots should be in the next box?", art: {"kind": "growing", "counts": [1, 2, 3]}, choices: [2, 3, 4, 5, 6], answer: "C", calc: () => 4, why: "The pattern increases by 1 each step: 1, 2, 3, 4." },
    { id: "J12-2", points: 4, text: "Which kangaroo is second in line?", art: {"kind": "line", "label": "Bo"}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "B", calc: () => "B", why: "Kangaroo A is 1st (Bo), so Kangaroo B is 2nd." },
    { id: "J12-3", points: 4, text: "How many apples are on the tree?", art: {"kind": "tree", "n": 8}, choices: [10, 6, 7, 8, 9], answer: "D", calc: () => 8, why: "Count the apples carefully: there are 8 apples." },
    { id: "J12-4", points: 5, text: "Pip has 2 green dots and 4 red dots. How many dots does Pip have in total?", art: null, choices: [7, 8, 4, 5, 6], answer: "E", calc: () => 6, why: "2 + 4 = 6." }
  ] },
  { code: "J13", level: "k", retired: true, title: "Shapes & Sizes", questions: [
    { id: "J13-1", points: 3, text: "How many triangles are in the box?", art: {"kind": "shapeMix", "list": [["triangle", 30, 40], ["square", 60, 20], ["triangle", 70, 70]]}, choices: [2, 3, 4, 5, 1], answer: "A", calc: () => 2, why: "Count only the 3-sided triangles: there are 2." },
    { id: "J13-2", points: 4, text: "Which kangaroo is the shortest?", art: {"kind": "roos", "heights": [5, 4, 1, 3, 2]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "C", calc: () => "C", why: "Kangaroo C has height 1, which is the shortest." },
    { id: "J13-3", points: 4, text: "What number is missing from the list?", art: {"kind": "missing", "list": [7, 8, 9, null]}, choices: [9, 10, 11, 12, 8], answer: "B", calc: () => 10, why: "Counting up by ones: 7, 8, 9, 10." },
    { id: "J13-4", points: 5, text: "Kip has 5 balloons. 2 pop. How many balloons are left?", art: null, choices: [1, 2, 3, 4, 5], answer: "C", calc: () => 3, why: "5 - 2 = 3." }
  ] },
  { code: "J14", level: "k", retired: true, title: "Fun with Dice & Clocks", questions: [
    { id: "J14-1", points: 3, text: "What hour does the clock show?", art: {"kind": "clock", "h": 7}, choices: [9, 5, 6, 7, 8], answer: "D", calc: () => 7, why: "The hour hand points straight to 7." },
    { id: "J14-2", points: 4, text: "How many dots are on the die?", art: {"kind": "die", "n": 5}, choices: [6, 2, 3, 4, 5], answer: "E", calc: () => 5, why: "Count the dots on the die: 5." },
    { id: "J14-3", points: 4, text: "How many cupcakes are NOT eaten?", art: {"kind": "cupcakes", "n": 6, "eaten": 2}, choices: [4, 5, 6, 2, 3], answer: "A", calc: () => 4, why: "6 total cupcakes - 2 eaten = 4 remaining." },
    { id: "J14-4", points: 5, text: "Bo has 4 fish. Pip gives him 4 more. How many fish does Bo have in total?", art: null, choices: [7, 8, 9, 10, 6], answer: "B", calc: () => 8, why: "4 + 4 = 8." }
  ] },
  { code: "J15", level: "k", retired: true, title: "Mixed Review Joey", questions: [
    { id: "J15-1", points: 3, text: "How many dogs are on the farm?", art: {"kind": "farm", "hens": 2, "dogs": 4}, choices: [2, 3, 4, 5, 6], answer: "C", calc: () => 4, why: "Count only the dogs: 4." },
    { id: "J15-2", points: 4, text: "Where does Kip land if he starts at 0 and jumps 5 steps forward?", art: {"kind": "numberLine", "max": 6, "jumps": [[0, 5]], "kip": 0}, choices: [2, 3, 4, 5, 6], answer: "D", calc: () => 5, why: "0 + 5 = 5." },
    { id: "J15-3", points: 4, text: "How many coins are shown?", art: {"kind": "coins", "n": 9}, choices: [10, 6, 7, 8, 9], answer: "E", calc: () => 9, why: "Count the total coins: 9." },
    { id: "J15-4", points: 5, text: "Pip has 7 stickers. He gives 3 to Bo. How many stickers does Pip have left?", art: null, choices: [4, 5, 6, 2, 3], answer: "A", calc: () => 4, why: "7 - 3 = 4." }
  ] },
  { code: "R7", level: "g2", retired: true, title: "Addition & Balance", questions: [
    { id: "R7-1", points: 3, text: "Kip rolls two dice. One shows 5 and the other shows 4. What is the sum?", art: {"kind": "dice", "a": 5, "b": 4}, choices: [8, 9, 10, 11, 7], answer: "B", calc: () => 9, why: "5 + 4 = 9." },
    { id: "R7-2", points: 4, text: "On a balance scale, 1 cube balances 2 balls. How many balls balance 3 cubes?", art: {"kind": "balance"}, choices: [4, 5, 6, 8, 3], answer: "C", calc: () => 6, why: "If 1 cube = 2 balls, then 3 cubes = 3 x 2 = 6 balls." },
    { id: "R7-3", points: 4, text: "Bo starts at number 3 on the number line. He makes 2 jumps of size 3 forward. Where does he land?", art: {"kind": "numberLine", "max": 10, "jumps": [[3, 6], [6, 9]], "kip": 3}, choices: [6, 7, 8, 9, 10], answer: "D", calc: () => 9, why: "3 + 3 + 3 = 9." },
    { id: "R7-4", points: 5, text: "Pip has 12 apples. He keeps 4 for himself and divides the rest equally between Bo and Kip. How many apples does Kip get?", art: null, choices: [5, 6, 8, 3, 4], answer: "E", calc: () => 4, why: "12 - 4 = 8 remaining apples. 8 divided between 2 kangaroos = 4 apples each." }
  ] },
  { code: "R8", level: "g2", retired: true, title: "Grids & Measurement", questions: [
    { id: "R8-1", points: 3, text: "A square grid has 3 rows and 3 columns. How many small squares are there in total?", art: {"kind": "squares", "n": 3}, choices: [9, 12, 16, 6, 8], answer: "A", calc: () => 9, why: "3 rows x 3 columns = 9 small squares." },
    { id: "R8-2", points: 4, text: "Which flower has the most petals?", art: {"kind": "flowers", "petals": [6, 8, 7, 9, 5]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "D", calc: () => "D", why: "Flower D has 9 petals, which is more than 5, 6, 7, or 8." },
    { id: "R8-3", points: 4, text: "What number comes next in the sequence: 4, 8, 12, 16, __?", art: {"kind": "missing", "list": [4, 8, 12, 16, null]}, choices: [18, 20, 22, 24, 25], answer: "B", calc: () => 20, why: "The pattern adds 4 each step: 16 + 4 = 20." },
    { id: "R8-4", points: 5, text: "Bo has 3 coins of 5 cents and 2 coins of 10 cents. How many cents does Bo have altogether?", art: null, choices: [25, 30, 35, 40, 45], answer: "C", calc: () => 35, why: "(3 x 5) + (2 x 10) = 15 + 20 = 35 cents." }
  ] },
  { code: "R9", level: "g2", retired: true, title: "Line Up & Deductions", questions: [
    { id: "R9-1", points: 3, text: "Bo, Kip, and Pip are standing in line. Kip is behind Bo. Pip is behind Kip. Who is last in line?", art: {"kind": "names", "names": ["Bo", "Kip", "Pip"]}, choices: ["None", "Bo", "Kip", "Pip", "Bo and Kip"], answer: "D", calc: () => "Pip", why: "Order from front to back: Bo, Kip, Pip. Pip is last." },
    { id: "R9-2", points: 4, text: "A clock shows 3 o'clock right now. What hour will it show in 5 hours?", art: {"kind": "clock", "h": 3}, choices: [9, 10, 6, 7, 8], answer: "E", calc: () => 8, why: "3 + 5 = 8 o'clock." },
    { id: "R9-3", points: 4, text: "How many unit cells make up an L-shape made of 3 vertical and 2 horizontal cells sharing a corner?", art: {"kind": "cells", "cells": [[0, 0], [0, 1], [0, 2], [1, 0]]}, choices: [4, 5, 6, 7, 3], answer: "A", calc: () => 4, why: "Count the coordinate pairs: 4 distinct cells." },
    { id: "R9-4", points: 5, text: "Kip has 15 red marbles. He trades 3 red marbles for 1 blue marble. If he gets 4 blue marbles, how many red marbles does he have left?", art: null, choices: [2, 3, 4, 5, 1], answer: "B", calc: () => 3, why: "4 blue marbles cost 4 x 3 = 12 red marbles. 15 - 12 = 3 red marbles left." }
  ] },
  { code: "R10", level: "g2", retired: true, title: "Geometry & Logic", questions: [
    { id: "R10-1", points: 3, text: "A triangle is split into two smaller triangles by one straight line. How many total triangles are in the figure?", art: {"kind": "splitTriangle"}, choices: [1, 2, 3, 4, 5], answer: "C", calc: () => 3, why: "There are 2 small triangles inside plus 1 large outer triangle = 3 triangles." },
    { id: "R10-2", points: 4, text: "How many total squares are in a 4x4 grid?", art: {"kind": "squares", "n": 4}, choices: [20, 12, 14, 16, 18], answer: "D", calc: () => 16, why: "Count the small 1x1 grid squares: 4 x 4 = 16." },
    { id: "R10-3", points: 4, text: "What is the missing number: 30, 25, 20, __, 10?", art: {"kind": "missing", "list": [30, 25, 20, null, 10]}, choices: [16, 18, 12, 14, 15], answer: "E", calc: () => 15, why: "Subtracting 5 each step: 20 - 5 = 15." },
    { id: "R10-4", points: 5, text: "Bo has 20 nuts. He buries half of them. Then a squirrel steals 3 of the buried nuts. How many buried nuts are left?", art: null, choices: [7, 8, 10, 5, 6], answer: "A", calc: () => 7, why: "Half of 20 is 10. 10 - 3 = 7 buried nuts left." }
  ] },
  { code: "R11", level: "g2", retired: true, title: "Word Problems & Scales", questions: [
    { id: "R11-1", points: 3, text: "Pip count 5 dogs on the farm. Each dog has 4 legs. How many dog legs are there in total?", art: {"kind": "farm", "hens": 0, "dogs": 5}, choices: [18, 20, 24, 12, 16], answer: "B", calc: () => 20, why: "5 dogs x 4 legs each = 20 legs." },
    { id: "R11-2", points: 4, text: "If 1 cube balances 2 balls, how many cubes balance 8 balls?", art: {"kind": "balance"}, choices: [2, 3, 4, 5, 6], answer: "C", calc: () => 4, why: "8 divided by 2 = 4 cubes." },
    { id: "R11-3", points: 4, text: "How many cupcakes are left if Bo starts with 9 and eats 4?", art: {"kind": "cupcakes", "n": 9, "eaten": 4}, choices: [7, 3, 4, 5, 6], answer: "D", calc: () => 5, why: "9 - 4 = 5." },
    { id: "R11-4", points: 5, text: "Kip has 3 cards with numbers 2, 4, and 7. What is the largest 3-digit number he can make?", art: null, choices: [747, 427, 472, 724, 742], answer: "E", calc: () => 742, why: "Put the largest digit first (7), then the next largest (4), then the smallest (2) = 742." }
  ] },
  { code: "R12", level: "g2", retired: true, title: "Double Jumps & Sequences", questions: [
    { id: "R12-1", points: 3, text: "Kip starts at 0 and makes 4 jumps of size 2. Where does Kip land?", art: {"kind": "numberLine", "max": 10, "jumps": [[0, 2], [2, 4], [4, 6], [6, 8]], "kip": 0}, choices: [8, 9, 10, 6, 7], answer: "A", calc: () => 8, why: "4 jumps of 2 = 4 x 2 = 8." },
    { id: "R12-2", points: 4, text: "What is the missing number: 2, 5, 8, 11, __?", art: {"kind": "missing", "list": [2, 5, 8, 11, null]}, choices: [13, 14, 15, 16, 12], answer: "B", calc: () => 14, why: "Add 3 each step: 11 + 3 = 14." },
    { id: "R12-3", points: 4, text: "Bo has 2 dice showing 6 and 6. What is the total sum?", art: {"kind": "dice", "a": 6, "b": 6}, choices: [10, 11, 12, 13, 14], answer: "C", calc: () => 12, why: "6 + 6 = 12." },
    { id: "R12-4", points: 5, text: "Pip has 18 crayons. He gives 6 to Bo and twice as many as that to Kip. How many crayons does Pip have left?", art: null, choices: [4, 6, 8, 0, 2], answer: "D", calc: () => 0, why: "Kip gets 2 x 6 = 12. Total given away: 6 + 12 = 18. Pip has 18 - 18 = 0 left." }
  ] },
  { code: "R13", level: "g2", retired: true, title: "Patterns & Time", questions: [
    { id: "R13-1", points: 3, text: "What time will the clock show 2 hours after 8 o'clock?", art: {"kind": "clock", "h": 8}, choices: [11, 12, 1, 9, 10], answer: "E", calc: () => 10, why: "8 + 2 = 10 o'clock." },
    { id: "R13-2", points: 4, text: "How many dots should be in the 5th box of the growing pattern?", art: {"kind": "growing", "counts": [2, 4, 6, 8]}, choices: [10, 11, 12, 8, 9], answer: "A", calc: () => 10, why: "The pattern adds 2 each time: 2, 4, 6, 8, 10." },
    { id: "R13-3", points: 4, text: "How many coins are in 2 piles of 6 coins each?", art: {"kind": "coins", "n": 6}, choices: [10, 12, 14, 16, 8], answer: "B", calc: () => 12, why: "2 x 6 = 12 coins." },
    { id: "R13-4", points: 5, text: "A ribbon is 24 cm long. Bo cuts it into 3 equal pieces. How long is each piece?", art: null, choices: [6, 7, 8, 9, 10], answer: "C", calc: () => 8, why: "24 divided by 3 = 8 cm." }
  ] },
  { code: "R14", level: "g2", retired: true, title: "Mixed Math Roo 1", questions: [
    { id: "R14-1", points: 3, text: "How many total petals are on 3 flowers with 5 petals each?", art: {"kind": "flowers", "petals": [5, 5, 5, 0, 0]}, choices: [20, 10, 12, 15, 18], answer: "D", calc: () => 15, why: "3 x 5 = 15 petals." },
    { id: "R14-2", points: 4, text: "Kip is 3rd in line from the front. There are 4 kangaroos behind Kip. How many kangaroos are in line?", art: {"kind": "line", "label": "Kip"}, choices: [8, 9, 5, 6, 7], answer: "E", calc: () => 7, why: "3 in front (including Kip) + 4 behind = 7 kangaroos." },
    { id: "R14-3", points: 4, text: "How many legs do 3 hens and 2 dogs have altogether?", art: {"kind": "farm", "hens": 3, "dogs": 2}, choices: [14, 16, 18, 10, 12], answer: "A", calc: () => 14, why: "(3 hens x 2 legs = 6) + (2 dogs x 4 legs = 8). 6 + 8 = 14 legs." },
    { id: "R14-4", points: 5, text: "Pip thinks of a number. He doubles it and then adds 4 to get 14. What was his original number?", art: null, choices: [4, 5, 6, 7, 3], answer: "B", calc: () => 5, why: "Work backward: 14 - 4 = 10. Half of 10 is 5." }
  ] },
  { code: "R15", level: "g2", retired: true, title: "Grand Championship Roo", questions: [
    { id: "R15-1", points: 3, text: "What is the area of a rectangle made of 2 rows of 5 small square cells?", art: {"kind": "squares", "n": 5}, choices: [8, 9, 10, 12, 7], answer: "C", calc: () => 10, why: "2 rows x 5 cells = 10 small squares." },
    { id: "R15-2", points: 4, text: "Where does Kip land if he starts at 10 and jumps 4 backward?", art: {"kind": "numberLine", "max": 10, "jumps": [[10, 6]], "kip": 10}, choices: [8, 4, 5, 6, 7], answer: "D", calc: () => 6, why: "10 - 4 = 6." },
    { id: "R15-3", points: 4, text: "Bo has 5 apples on 3 trees. How many apples in total?", art: {"kind": "tree", "n": 5}, choices: [16, 20, 10, 12, 15], answer: "E", calc: () => 15, why: "3 trees x 5 apples = 15 apples." },
    { id: "R15-4", points: 5, text: "In a race, Kip finishes before Bo, but after Pip. Who won 1st place in the race?", art: {"kind": "names", "names": ["Pip", "Kip", "Bo"]}, choices: ["Pip", "Tie", "Unknown", "Bo", "Kip"], answer: "A", calc: () => "Pip", why: "Order of finish: 1st Pip, 2nd Kip, 3rd Bo. Pip won 1st place." }
  ] },
  { code: "J16", level: "k", title: "Mixed set 1", questions: [
    { id: "J16-1", points: 3, text: "How many apples are hanging on the tree?", art: {"kind": "tree", "n": 5}, choices: [5, 6, 7, 3, 4], answer: "A", calc: () => 5, why: "Count the apples on the branches one by one: 5 apples." },
    { id: "J16-2", points: 3, text: "What hour does the clock show?", art: {"kind": "clock", "h": 7}, choices: [6, 7, 8, 9, 5], answer: "B", calc: () => 7, why: "The hour hand points straight to 7." },
    { id: "J16-3", points: 4, text: "Which flower has the fewest petals?", art: {"kind": "flowers", "petals": [5, 3, 6, 4, 7]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "B", calc: () => "B", why: "Flower B has 3 petals, which is smaller than 4, 5, 6, or 7." },
    { id: "J16-4", points: 4, text: "How many cupcakes are NOT eaten?", art: {"kind": "cupcakes", "n": 6, "eaten": 2}, choices: [2, 3, 4, 5, 6], answer: "C", calc: () => 4, why: "6 total cupcakes - 2 eaten = 4 remaining." }
  ] },
  { code: "J17", level: "k", title: "Mixed set 2", questions: [
    { id: "J17-1", points: 3, text: "Which number comes next in the row?", art: {"kind": "missing", "list": [2, 3, 4, null]}, choices: [7, 3, 4, 5, 6], answer: "D", calc: () => 5, why: "Counting forward by ones: 2, 3, 4, 5." },
    { id: "J17-2", points: 3, text: "How many dogs are on the farm?", art: {"kind": "farm", "hens": 2, "dogs": 4}, choices: [5, 6, 2, 3, 4], answer: "E", calc: () => 4, why: "Count only the dogs: 4." },
    { id: "J17-3", points: 4, text: "Kip rolls two dice. What is the sum of the dots?", art: {"kind": "dice", "a": 2, "b": 3}, choices: [5, 6, 7, 3, 4], answer: "A", calc: () => 5, why: "Add dots on both dice: 2 + 3 = 5." },
    { id: "J17-4", points: 4, text: "Where does Kip land if he starts at 0 and jumps 5 steps forward?", art: {"kind": "numberLine", "max": 6, "jumps": [], "kip": 0}, choices: [4, 5, 6, 2, 3], answer: "B", calc: () => 5, why: "0 + 5 = 5." }
  ] },
  { code: "J18", level: "k", title: "Mixed set 3", questions: [
    { id: "J18-1", points: 3, text: "How many red balls are there in total?", art: {"kind": "addBalls", "a": 3, "b": 2}, choices: [3, 4, 5, 6, 7], answer: "C", calc: () => 5, why: "Add the two groups of balls together: 3 + 2 = 5." },
    { id: "J18-2", points: 4, text: "Bo sees these shapes. How many stars are there?", art: {"kind": "shapeMix", "list": [["star", 20, 30], ["star", 60, 40], ["circle", 40, 70], ["star", 80, 20]]}, choices: [5, 6, 2, 3, 4], answer: "D", calc: () => 3, why: "Count only the 5-pointed stars: there are 3 stars." },
    { id: "J18-3", points: 4, text: "How many coins are in the pile?", art: {"kind": "coins", "n": 7}, choices: [8, 9, 5, 6, 7], answer: "E", calc: () => 7, why: "Count all coins in the stack: 7." },
    { id: "J18-4", points: 4, text: "How many coins are shown?", art: {"kind": "coins", "n": 9}, choices: [9, 10, 6, 7, 8], answer: "A", calc: () => 9, why: "Count the total coins: 9." }
  ] },
  { code: "J19", level: "k", title: "Mixed set 4", questions: [
    { id: "J19-1", points: 3, text: "Where is Kip sitting on the number line?", art: {"kind": "numberLine", "max": 6, "jumps": [], "kip": 3}, choices: [2, 3, 4, 5, 1], answer: "B", calc: () => 3, why: "Kip is sitting directly above the number 3." },
    { id: "J19-2", points: 4, text: "Which kangaroo is the tallest?", art: {"kind": "roos", "heights": [2, 4, 5, 3, 1]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "C", calc: () => "C", why: "Kangaroo C has height 5, which is taller than all the others." },
    { id: "J19-3", points: 4, text: "Bo is first in line. Kip is right behind Bo. Pip is right behind Kip. Who is second in line?", art: null, choices: ["Can't tell", "Bo", "Kip", "Pip", "Nobody"], answer: "C", calc: () => "Kip", why: "Bo is 1st, so Kip, right behind him, is 2nd." },
    { id: "J19-4", points: 5, text: "Pip has 4 cupcakes. He eats 2 of them. How many cupcakes are left?", art: {"kind": "cupcakes", "n": 4, "eaten": 2}, choices: [4, 5, 1, 2, 3], answer: "D", calc: () => 2, why: "Subtract the 2 eaten cupcakes from 4: 4 - 2 = 2." }
  ] },
  { code: "J20", level: "k", title: "Mixed set 5", questions: [
    { id: "J20-1", points: 3, text: "How many hens are on the farm?", art: {"kind": "farm", "hens": 3, "dogs": 2}, choices: [4, 5, 1, 2, 3], answer: "E", calc: () => 3, why: "Count only the hens: there are 3." },
    { id: "J20-2", points: 4, text: "Which flower has exactly 6 petals?", art: {"kind": "flowers", "petals": [4, 5, 6, 3, 7]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "C", calc: () => "C", why: "Count petals on each flower: Flower C has 6 petals." },
    { id: "J20-3", points: 4, text: "How many apples are on the tree?", art: {"kind": "tree", "n": 8}, choices: [8, 9, 10, 6, 7], answer: "A", calc: () => 8, why: "Count the apples carefully: there are 8 apples." },
    { id: "J20-4", points: 5, text: "Kip starts at 1 and makes one jump of size 3. Where does he land?", art: {"kind": "numberLine", "max": 6, "jumps": [], "kip": 1}, choices: [3, 4, 5, 6, 2], answer: "B", calc: () => 4, why: "1 + 3 = 4." }
  ] },
  { code: "J21", level: "k", title: "Mixed set 6", questions: [
    { id: "J21-1", points: 3, text: "What hour does the clock show?", art: {"kind": "clock", "h": 4}, choices: [2, 3, 4, 5, 6], answer: "C", calc: () => 4, why: "The hour hand points directly at the number 4." },
    { id: "J21-2", points: 4, text: "What is the missing number in the sequence?", art: {"kind": "missing", "list": [5, 6, null, 8]}, choices: [9, 5, 6, 7, 8], answer: "D", calc: () => 7, why: "Counting forward by ones: 5, 6, 7, 8." },
    { id: "J21-3", points: 4, text: "Which kangaroo is the shortest?", art: {"kind": "roos", "heights": [5, 4, 1, 3, 2]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "C", calc: () => "C", why: "Kangaroo C has height 1, which is the shortest." },
    { id: "J21-4", points: 5, text: "Bo has 6 carrots. He gives 3 to Pip and 1 to Kip. How many carrots are left for Bo?", art: null, choices: [3, 4, 5, 1, 2], answer: "E", calc: () => 2, why: "6 - 3 - 1 = 2." }
  ] },
  { code: "J22", level: "k", title: "Mixed set 7", questions: [
    { id: "J22-1", points: 3, text: "How many dots should be in the next box?", art: {"kind": "growing", "counts": [1, 2, 3]}, choices: [4, 5, 6, 2, 3], answer: "A", calc: () => 4, why: "The pattern increases by 1 each step: 1, 2, 3, 4." },
    { id: "J22-2", points: 4, text: "How many small squares make up this shape?", art: {"kind": "cells", "cells": [[0, 0], [0, 1], [1, 0], [1, 1]]}, choices: [3, 4, 5, 6, 2], answer: "B", calc: () => 4, why: "Count all grid units: 4 small squares arranged in a 2x2 grid." },
    { id: "J22-3", points: 4, text: "What number is missing from the list?", art: {"kind": "missing", "list": [7, 8, 9, null]}, choices: [8, 9, 10, 11, 12], answer: "C", calc: () => 10, why: "Counting up by ones: 7, 8, 9, 10." },
    { id: "J22-4", points: 5, text: "Bo has 4 fish. Pip gives him 4 more. How many fish does Bo have in total?", art: null, choices: [10, 6, 7, 8, 9], answer: "D", calc: () => 8, why: "4 + 4 = 8." }
  ] },
  { code: "J23", level: "k", title: "Mixed set 8", questions: [
    { id: "J23-1", points: 3, text: "How many triangles are in the box?", art: {"kind": "shapeMix", "list": [["triangle", 30, 40], ["square", 60, 20], ["triangle", 70, 70]]}, choices: [3, 4, 5, 1, 2], answer: "E", calc: () => 2, why: "Count only the 3-sided triangles: there are 2." },
    { id: "J23-2", points: 4, text: "How many total animals are on the farm?", art: {"kind": "farm", "hens": 4, "dogs": 2}, choices: [6, 7, 8, 4, 5], answer: "A", calc: () => 6, why: "Add 4 hens + 2 dogs = 6 animals." },
    { id: "J23-3", points: 4, text: "How many dots are on the die?", art: {"kind": "die", "n": 5}, choices: [4, 5, 6, 2, 3], answer: "B", calc: () => 5, why: "Count the dots on the die: 5." },
    { id: "J23-4", points: 5, text: "Pip has 7 stickers. He gives 3 to Bo. How many stickers does Pip have left?", art: null, choices: [2, 3, 4, 5, 6], answer: "C", calc: () => 4, why: "7 - 3 = 4." }
  ] },
  { code: "R16", level: "g2", title: "Mixed set 1", questions: [
    { id: "R16-1", points: 3, text: "Kip rolls two dice. One shows 5 and the other shows 4. What is the sum?", art: {"kind": "dice", "a": 5, "b": 4}, choices: [11, 7, 8, 9, 10], answer: "D", calc: () => 9, why: "5 + 4 = 9." },
    { id: "R16-2", points: 3, text: "How many small squares are in this shape?", art: {"kind": "cells", "cells": [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1]]}, choices: [12, 7, 8, 9, 10], answer: "E", calc: () => 10, why: "2 rows x 5 cells = 10 small squares." },
    { id: "R16-3", points: 4, text: "What is the missing number: 30, 25, 20, __, 10?", art: {"kind": "missing", "list": [30, 25, 20, null, 10]}, choices: [15, 16, 18, 12, 14], answer: "A", calc: () => 15, why: "Subtracting 5 each step: 20 - 5 = 15." },
    { id: "R16-4", points: 5, text: "Pip has 12 apples. He keeps 4 for himself and divides the rest equally between Bo and Kip. How many apples does Kip get?", art: null, choices: [3, 4, 5, 6, 8], answer: "B", calc: () => 4, why: "12 - 4 = 8 remaining apples. 8 divided between 2 kangaroos = 4 apples each." }
  ] },
  { code: "R17", level: "g2", title: "Mixed set 2", questions: [
    { id: "R17-1", points: 3, text: "A square grid has 3 rows and 3 columns. How many small squares are there in total?", art: {"kind": "squares", "n": 3}, choices: [6, 8, 9, 12, 16], answer: "C", calc: () => 9, why: "3 rows x 3 columns = 9 small squares." },
    { id: "R17-2", points: 4, text: "On a balance scale, 1 cube balances 2 balls. How many balls balance 3 cubes?", art: {"kind": "balance"}, choices: [3, 4, 5, 6, 8], answer: "D", calc: () => 6, why: "If 1 cube = 2 balls, then 3 cubes = 3 x 2 = 6 balls." },
    { id: "R17-3", points: 4, text: "If 1 cube balances 2 balls, how many cubes balance 8 balls?", art: {"kind": "balance"}, choices: [5, 6, 2, 3, 4], answer: "E", calc: () => 4, why: "8 divided by 2 = 4 cubes." },
    { id: "R17-4", points: 5, text: "Bo has 3 coins of 5 cents and 2 coins of 10 cents. How many cents does Bo have altogether?", art: null, choices: [35, 40, 45, 25, 30], answer: "A", calc: () => 35, why: "(3 x 5) + (2 x 10) = 15 + 20 = 35 cents." }
  ] },
  { code: "R18", level: "g2", title: "Mixed set 3", questions: [
    { id: "R18-1", points: 3, text: "Bo, Kip, and Pip are standing in line. Kip is behind Bo. Pip is behind Kip. Who is last in line?", art: {"kind": "names", "names": ["Bo", "Kip", "Pip"]}, choices: ["Kip", "Pip", "Bo and Kip", "None", "Bo"], answer: "B", calc: () => "Pip", why: "Order from front to back: Bo, Kip, Pip. Pip is last." },
    { id: "R18-2", points: 4, text: "Bo starts at number 3 on the number line. He makes 2 jumps of size 3 forward. Where does he land?", art: {"kind": "numberLine", "max": 10, "jumps": [], "kip": 3}, choices: [7, 8, 9, 10, 6], answer: "C", calc: () => 9, why: "3 + 3 + 3 = 9." },
    { id: "R18-3", points: 4, text: "What is the missing number: 2, 5, 8, 11, __?", art: {"kind": "missing", "list": [2, 5, 8, 11, null]}, choices: [16, 12, 13, 14, 15], answer: "D", calc: () => 14, why: "Add 3 each step: 11 + 3 = 14." },
    { id: "R18-4", points: 5, text: "Kip has 15 red marbles. He trades 3 red marbles for 1 blue marble. If he gets 4 blue marbles, how many red marbles does he have left?", art: null, choices: [4, 5, 1, 2, 3], answer: "E", calc: () => 3, why: "4 blue marbles cost 4 x 3 = 12 red marbles. 15 - 12 = 3 red marbles left." }
  ] },
  { code: "R19", level: "g2", title: "Mixed set 4", questions: [
    { id: "R19-1", points: 3, text: "A triangle is split into two smaller triangles by one straight line. How many total triangles are in the figure?", art: {"kind": "splitTriangle"}, choices: [3, 4, 5, 1, 2], answer: "A", calc: () => 3, why: "There are 2 small triangles inside plus 1 large outer triangle = 3 triangles." },
    { id: "R19-2", points: 4, text: "Which flower has the most petals?", art: {"kind": "flowers", "petals": [6, 8, 7, 9, 5]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "D", calc: () => "D", why: "Flower D has 9 petals, which is more than 5, 6, 7, or 8." },
    { id: "R19-3", points: 4, text: "How many dots should be in the 5th box of the growing pattern?", art: {"kind": "growing", "counts": [2, 4, 6, 8]}, choices: [9, 10, 11, 12, 8], answer: "B", calc: () => 10, why: "The pattern adds 2 each time: 2, 4, 6, 8, 10." },
    { id: "R19-4", points: 5, text: "Bo has 20 nuts. He buries half of them. Then a squirrel steals 3 of the buried nuts. How many buried nuts are left?", art: null, choices: [5, 6, 7, 8, 10], answer: "C", calc: () => 7, why: "Half of 20 is 10. 10 - 3 = 7 buried nuts left." }
  ] },
  { code: "R20", level: "g2", title: "Mixed set 5", questions: [
    { id: "R20-1", points: 3, text: "Pip counts 5 dogs on the farm. Each dog has 4 legs. How many dog legs are there in total?", art: {"kind": "farm", "hens": 0, "dogs": 5}, choices: [12, 16, 18, 20, 24], answer: "D", calc: () => 20, why: "5 dogs x 4 legs each = 20 legs." },
    { id: "R20-2", points: 4, text: "What number comes next in the sequence: 4, 8, 12, 16, __?", art: {"kind": "missing", "list": [4, 8, 12, 16, null]}, choices: [22, 24, 25, 18, 20], answer: "E", calc: () => 20, why: "The pattern adds 4 each step: 16 + 4 = 20." },
    { id: "R20-3", points: 4, text: "There is one pile of 6 coins. Bo adds a second pile of 6 coins. How many coins are there now?", art: {"kind": "coins", "n": 6}, choices: [12, 14, 16, 8, 10], answer: "A", calc: () => 12, why: "2 x 6 = 12 coins." },
    { id: "R20-4", points: 5, text: "Kip has 3 cards with numbers 2, 4, and 7. What is the largest 3-digit number he can make?", art: null, choices: [724, 742, 747, 427, 472], answer: "B", calc: () => 742, why: "Put the largest digit first (7), then the next largest (4), then the smallest (2) = 742." }
  ] },
  { code: "R21", level: "g2", title: "Mixed set 6", questions: [
    { id: "R21-1", points: 3, text: "Kip starts at 0 and makes 4 jumps of size 2. Where does Kip land?", art: {"kind": "numberLine", "max": 10, "jumps": [], "kip": 0}, choices: [6, 7, 8, 9, 10], answer: "C", calc: () => 8, why: "4 jumps of 2 = 4 x 2 = 8." },
    { id: "R21-2", points: 4, text: "A clock shows 3 o'clock right now. What hour will it show in 5 hours?", art: {"kind": "clock", "h": 3}, choices: [10, 6, 7, 8, 9], answer: "D", calc: () => 8, why: "3 + 5 = 8 o'clock." },
    { id: "R21-3", points: 4, text: "Kip is 3rd in line from the front. There are 4 kangaroos behind Kip. How many kangaroos are in line?", art: {"kind": "line", "label": "Kip"}, choices: [8, 9, 5, 6, 7], answer: "E", calc: () => 7, why: "3 in front (including Kip) + 4 behind = 7 kangaroos." },
    { id: "R21-4", points: 5, text: "Pip has 18 crayons. He gives 6 to Bo and twice as many as that to Kip. How many crayons does Pip have left?", art: null, choices: [0, 2, 4, 6, 8], answer: "A", calc: () => 0, why: "Kip gets 2 x 6 = 12. Total given away: 6 + 12 = 18. Pip has 18 - 18 = 0 left." }
  ] },
  { code: "R22", level: "g2", title: "Mixed set 7", questions: [
    { id: "R22-1", points: 3, text: "What time will the clock show 2 hours after 8 o'clock?", art: {"kind": "clock", "h": 8}, choices: [9, 10, 11, 12, 1], answer: "B", calc: () => 10, why: "8 + 2 = 10 o'clock." },
    { id: "R22-2", points: 4, text: "An L-shape has 3 squares in a column, then 2 more squares in a row along its bottom. How many squares are there?", art: {"kind": "cells", "cells": [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]}, choices: [3, 4, 5, 6, 7], answer: "C", calc: () => 5, why: "3 in the column, then 2 more along the bottom: 3 + 2 = 5 squares." },
    { id: "R22-3", points: 4, text: "Where does Kip land if he starts at 10 and jumps 4 backward?", art: {"kind": "numberLine", "max": 10, "jumps": [], "kip": 10}, choices: [8, 4, 5, 6, 7], answer: "D", calc: () => 6, why: "10 - 4 = 6." },
    { id: "R22-4", points: 5, text: "A ribbon is 24 cm long. Bo cuts it into 3 equal pieces. How long is each piece?", art: null, choices: [9, 10, 6, 7, 8], answer: "E", calc: () => 8, why: "24 divided by 3 = 8 cm." }
  ] },
  { code: "R23", level: "g2", title: "Mixed set 8", questions: [
    { id: "R23-1", points: 3, text: "Three flowers have 5 petals each. How many petals are there in all?", art: null, choices: [15, 18, 20, 10, 12], answer: "A", calc: () => 15, why: "3 x 5 = 15 petals." },
    { id: "R23-2", points: 4, text: "How many small 1 × 1 squares are in a 4 × 4 grid?", art: {"kind": "squares", "n": 4}, choices: [14, 16, 18, 20, 12], answer: "B", calc: () => 16, why: "4 rows of 4: 16 small squares." },
    { id: "R23-3", points: 4, text: "Bo has 5 apples on each of 3 trees. How many apples are there in total?", art: null, choices: [10, 12, 15, 16, 20], answer: "C", calc: () => 15, why: "3 trees x 5 apples = 15 apples." },
    { id: "R23-4", points: 5, text: "Pip thinks of a number. He doubles it and then adds 4 to get 14. What was his original number?", art: null, choices: [7, 3, 4, 5, 6], answer: "D", calc: () => 5, why: "Work backward: 14 - 4 = 10. Half of 10 is 5." }
  ] },
  { code: "W1", level: "g3", title: "Set 1", questions: [
    { id: "W1-1", points: 3, text: "Five friends line up for a photo. Ana is first. Ben is right behind Ana. Cara is right behind Ben. Eli is between Cara and Dev. Dev is last. Who is third in line?", art: null, choices: ["Cara", "Eli", "Dev", "Ana", "Ben"], answer: "A", calc: () => "Cara", why: "Ana 1st, Ben 2nd, Cara 3rd, Eli 4th, Dev 5th." },
    { id: "W1-2", points: 4, text: "Kip has 3 red balls and 4 blue balls. Pip has as many balls as Kip. Bo has twice as many balls as Pip. How many balls does Bo have?", art: null, choices: [12, 14, 21, 7, 10], answer: "B", calc: () => 14, why: "Kip and Pip each have 7 balls. Bo has 2 x 7 = 14." },
    { id: "W1-3", points: 4, text: "A school trip leaves at 9:00 and takes 2 hours and 45 minutes to reach the park. The group stays at the park for 1 hour. At what time do they leave the park?", art: null, choices: ["11:45", "12:15", "12:45", "1:45", "2:45"], answer: "C", calc: () => "12:45", why: "9:00 + 2:45 = 11:45, then + 1:00 = 12:45." },
    { id: "W1-4", points: 5, text: "Four kangaroos jump 2, 3, 5 and 6 metres, one distance each. Bo jumps 3 metres. Kip jumps further than Bo. Pip jumps 3 metres further than Ana. Ana does not jump 6 metres. Who jumps 6 metres?", art: null, choices: ["Pip", "Ana", "Nobody", "Kip", "Bo"], answer: "D", calc: () => "Kip", why: "Ana 2 and Pip 5 is the only pair 3 apart from the left-over distances, so Kip gets 6." }
  ] },
  { code: "W2", level: "g3", title: "Set 2", questions: [
    { id: "W2-1", points: 3, text: "What comes next in the row?", art: {"kind": "sequence", "items": ["star", "circle", "circle", "star", "circle", "circle"]}, choices: [{"shape": "heart"}, {"shape": "square"}, {"shape": "triangle"}, {"shape": "circle"}, {"shape": "star"}], answer: "E", calc: () => "star", why: "The pattern repeats every 3: star, circle, circle." },
    { id: "W2-2", points: 4, text: "How many squares of any size are in this picture?", art: {"kind": "squares", "n": 3}, choices: [14, 16, 9, 12, 13], answer: "A", calc: () => 14, why: "9 small squares, 4 medium (2 by 2) and 1 big one: 14." },
    { id: "W2-3", points: 4, text: "Mia has 4 more stickers than Leo. Leo has 3 fewer stickers than Ned. Ned has 10 stickers. How many stickers do Mia and Leo have together?", art: null, choices: [17, 18, 21, 25, 14], answer: "B", calc: () => 18, why: "Leo has 7, so Mia has 11. 11 + 7 = 18." },
    { id: "W2-4", points: 5, text: "Ana, Ben and Cara each have one pet: a cat, a dog or a rabbit. Ben does not have the cat or the rabbit. Cara has the cat. Who has the rabbit?", art: null, choices: ["Nobody", "Can't tell", "Ana", "Ben", "Cara"], answer: "C", calc: () => "Ana", why: "Ben has the dog and Cara has the cat, so Ana has the rabbit." }
  ] },
  { code: "W3", level: "g3", title: "Set 3", questions: [
    { id: "W3-1", points: 3, text: "A pencil costs 3 coins and a rubber costs 2 coins. Kip buys one pencil and two rubbers. How many coins does he pay?", art: null, choices: [9, 5, 6, 7, 8], answer: "D", calc: () => 7, why: "3 + 2 + 2 = 7 coins." },
    { id: "W3-2", points: 4, text: "Ana counts in 4s from 0: 4, 8, 12, ... Bo counts in 3s from 0: 3, 6, 9, ... Which number less than 20 do they both say?", art: null, choices: [15, 16, 6, 9, 12], answer: "E", calc: () => 12, why: "The numbers in both lists are multiples of 12: 12 (and 24, which is too big)." },
    { id: "W3-3", points: 4, text: "Kip starts at 0 and jumps forward 4 steps three times. Then he jumps back 2 steps. Where is he now?", art: null, choices: [10, 12, 14, 6, 8], answer: "A", calc: () => 10, why: "4 + 4 + 4 = 12, then 12 - 2 = 10." },
    { id: "W3-4", points: 5, text: "Bo has some marbles. If he gives 4 marbles to Ana, he will have as many as Ana has now. Ana has 3 more marbles than Cara. Cara has 6. How many marbles does Bo have?", art: null, choices: [11, 13, 15, 17, 9], answer: "B", calc: () => 13, why: "Ana has 6 + 3 = 9. Bo has 9 + 4 = 13." }
  ] },
  { code: "W4", level: "g3", title: "Set 4", questions: [
    { id: "W4-1", points: 3, text: "Which number is missing?", art: {"kind": "missing", "list": [5, 10, 15, null, 25]}, choices: [30, 18, 20, 21, 22], answer: "C", calc: () => 20, why: "Counting up by 5s: 5, 10, 15, 20, 25." },
    { id: "W4-2", points: 4, text: "A bag holds 6 apples. Kip has 4 bags and eats 5 apples. How many apples does he have left?", art: null, choices: [29, 17, 18, 19, 20], answer: "D", calc: () => 19, why: "4 bags hold 24 apples. 24 - 5 = 19." },
    { id: "W4-3", points: 4, text: "There are 9 cupcakes and 3 of them have an X. Ana eats 2 of the cupcakes without an X. How many cupcakes without an X are left?", art: {"kind": "cupcakes", "n": 9, "eaten": 3}, choices: [5, 6, 2, 3, 4], answer: "E", calc: () => 4, why: "9 cupcakes, 3 with an X: 6 without. 6 - 2 = 4." },
    { id: "W4-4", points: 5, text: "Five kangaroos stand in a row. Ana is first. Pip is 2 places behind Ana. Bo is directly in front of Pip. Kip is 2 places behind Bo. Cara is last. Who is in the middle?", art: null, choices: ["Pip", "Kip", "Cara", "Ana", "Bo"], answer: "A", calc: () => "Pip", why: "Ana 1st, Bo 2nd, Pip 3rd, Kip 4th, Cara 5th." }
  ] },
  { code: "F1", level: "g4", title: "Set 1", questions: [
    { id: "F1-1", points: 3, text: "12 children like apples and 8 children like pears. 5 children like both fruits. How many children like only one of the two fruits?", art: null, choices: [7, 10, 13, 15, 20], answer: "B", calc: () => 10, why: "Only apples: 12 - 5 = 7. Only pears: 8 - 5 = 3. 7 + 3 = 10." },
    { id: "F1-2", points: 4, text: "Kip, Bo and Pip share 42 stickers. Kip gets twice as many as Bo. Pip gets 6 more than Bo. How many stickers does Kip get?", art: null, choices: [12, 15, 18, 21, 24], answer: "C", calc: () => 18, why: "Bo = x, Kip = 2x, Pip = x + 6: 4x + 6 = 42, so x = 9 and Kip has 18." },
    { id: "F1-3", points: 4, text: "A film starts at 2:35 pm and ends at 4:10 pm. How long is the film?", art: null, choices: ["2 h 25 min", "1 h 15 min", "1 h 25 min", "1 h 35 min", "1 h 45 min"], answer: "D", calc: () => "1 h 35 min", why: "2:35 to 3:35 is 1 hour. 3:35 to 4:10 is 35 minutes." },
    { id: "F1-4", points: 5, text: "Ana, Ben, Cara and Dev each have a different number of marbles from 2 to 5. Ana has more than Ben. Cara has 2 more than Dev. Ben has 3. How many marbles does Cara have?", art: null, choices: [5, 6, 2, 3, 4], answer: "E", calc: () => 4, why: "Ben has 3, so Dev has 2 and Cara has 4. Ana has 5." }
  ] },
  { code: "F2", level: "g4", title: "Set 2", questions: [
    { id: "F2-1", points: 3, text: "Kip is 4th from the front of a line and 7th from the back. How many kangaroos are in the line?", art: null, choices: [10, 11, 12, 13, 9], answer: "A", calc: () => 10, why: "4 + 7 - 1 = 10, because Kip is counted in both." },
    { id: "F2-2", points: 4, text: "How many small squares are in this shape?", art: {"kind": "cells", "cells": [[0, 0], [1, 0], [2, 0], [0, 1], [2, 1], [0, 2], [1, 2], [2, 2]]}, choices: [7, 8, 9, 10, 12], answer: "B", calc: () => 8, why: "A 3 by 3 square with the middle square missing: 8." },
    { id: "F2-3", points: 4, text: "Three numbers add up to 30. The first number is twice the second. The third number is 6 more than the second. What is the first number?", art: null, choices: [6, 10, 12, 14, 18], answer: "C", calc: () => 12, why: "Second = x: x + 2x + (x + 6) = 30, so x = 6 and the first is 12." },
    { id: "F2-4", points: 5, text: "Mia has twice as many pencils as Ned. Ned has 4 pencils. Leo has more pencils than Ned. Mia and Leo have 13 pencils together. How many pencils does Leo have?", art: null, choices: [7, 8, 9, 5, 6], answer: "D", calc: () => 5, why: "Mia has 8, so Leo has 13 - 8 = 5, which is more than Ned's 4." }
  ] },
  { code: "F3", level: "g4", title: "Set 3", questions: [
    { id: "F3-1", points: 3, text: "A pizza is cut into 8 equal slices. Ana eats 3 slices and Bo eats 2 slices. How many slices are left?", art: null, choices: [4, 5, 6, 2, 3], answer: "E", calc: () => 3, why: "8 - 3 - 2 = 3." },
    { id: "F3-2", points: 4, text: "How many 2-digit numbers have a 7 in the tens place?", art: null, choices: [10, 11, 20, 7, 9], answer: "A", calc: () => 10, why: "70, 71, 72, ..., 79: ten numbers." },
    { id: "F3-3", points: 4, text: "Bo has 3 packets of stickers with 12 stickers in each. He gives 6 stickers to Ana and shares the rest equally between Ben and Cara. How many stickers does Ben get?", art: null, choices: [13, 15, 18, 10, 12], answer: "B", calc: () => 15, why: "36 - 6 = 30, and 30 shared equally gives 15 each." },
    { id: "F3-4", points: 5, text: "Ana has 5 more stickers than Bo. Bo has as many as Cara. Cara has half as many as Dev. Dev has 12. How many stickers do Ana and Bo have together?", art: null, choices: [11, 14, 17, 18, 23], answer: "C", calc: () => 17, why: "Cara 6, Bo 6, Ana 11: 11 + 6 = 17." }
  ] },
  { code: "F4", level: "g4", title: "Set 4", questions: [
    { id: "F4-1", points: 3, text: "Using the digits 7, 4 and 9, each once, what is the largest even number you can make?", art: null, choices: [497, 749, 794, 974, 479], answer: "D", calc: () => 974, why: "An even number must end in 4, so the largest is 974." },
    { id: "F4-2", points: 4, text: "How many legs are there on the farm?", art: {"kind": "farm", "hens": 4, "dogs": 2}, choices: [18, 20, 12, 14, 16], answer: "E", calc: () => 16, why: "4 hens x 2 legs = 8. 2 dogs x 4 legs = 8. 8 + 8 = 16." },
    { id: "F4-3", points: 4, text: "Two dice show 4 and 6, as in the picture. A third die is rolled. All three dice together add up to 15. What does the third die show?", art: {"kind": "dice", "a": 4, "b": 6}, choices: [5, 6, 9, 3, 4], answer: "A", calc: () => 5, why: "4 + 6 = 10, so the third die shows 5." },
    { id: "F4-4", points: 5, text: "A number is multiplied by 3, then 5 is added. The result is 26. What was the number?", art: null, choices: [6, 7, 8, 9, 5], answer: "B", calc: () => 7, why: "26 - 5 = 21, and 21 divided by 3 is 7." }
  ] },
  { code: "B1", level: "g5", title: "Set 1", questions: [
    { id: "B1-1", points: 3, text: "Kip, Bo and Pip each have a different number of pencils: 4, 6 and 9. Kip has fewer pencils than Pip. Bo has more pencils than Kip. How many pencils does Pip have?", art: null, choices: [6, 7, 9, 12, 4], answer: "C", calc: () => 9, why: "Kip < Bo < Pip, so Kip has 4, Bo has 6 and Pip has 9." },
    { id: "B1-2", points: 4, text: "A 3-digit number uses the digits 2, 5 and 8, each once. The number is odd and bigger than 500. Which is it?", art: null, choices: [285, 528, 582, 825, 852], answer: "D", calc: () => 825, why: "Odd means it ends in 5, and bigger than 500 means it starts with 5 or 8. Only 825 fits." },
    { id: "B1-3", points: 4, text: "A train leaves at 7:40. Each trip takes 55 minutes. A second train leaves 25 minutes after the first. At what time does the second train arrive?", art: null, choices: ["9:05", "9:20", "8:20", "8:55", "9:00"], answer: "E", calc: () => "9:00", why: "The second train leaves at 8:05 and arrives 55 minutes later, at 9:00." },
    { id: "B1-4", points: 5, text: "Five friends (Ana, Ben, Cara, Dev and Eli) each eat a different number of apples, from 1 to 5. Ben eats 2 and Dev eats 1. Ana eats more than Ben. Cara eats 2 more than Dev. Eli eats 2 more than Ben. How many apples does Ana eat?", art: null, choices: [5, 6, 1, 3, 4], answer: "A", calc: () => 5, why: "Dev 1, Ben 2, Cara 3, Eli 4, so Ana eats the last number, 5." }
  ] },
  { code: "B2", level: "g5", title: "Set 2", questions: [
    { id: "B2-1", points: 3, text: "Bo has 3 boxes. Each box holds 4 cubes. He takes 5 cubes out of the boxes. How many cubes are left?", art: null, choices: [6, 7, 8, 9, 5], answer: "B", calc: () => 7, why: "3 x 4 = 12, and 12 - 5 = 7." },
    { id: "B2-2", points: 4, text: "How many small squares are in this staircase shape?", art: {"kind": "cells", "cells": [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2]]}, choices: [8, 4, 5, 6, 7], answer: "C", calc: () => 5, why: "Count the squares: 5." },
    { id: "B2-3", points: 4, text: "Ana, Ben and Cara share 60 marbles. Ana gets 3 times as many as Ben. Cara gets 10 more than Ben. How many marbles does Ana get?", art: null, choices: [10, 20, 25, 30, 40], answer: "D", calc: () => 30, why: "Ben = x, Ana = 3x, Cara = x + 10: 5x + 10 = 60, so x = 10 and Ana has 30." },
    { id: "B2-4", points: 5, text: "A 2-digit number has a tens digit that is 3 more than its units digit. The two digits add up to 9. What is the number?", art: null, choices: [72, 36, 45, 54, 63], answer: "E", calc: () => 63, why: "Units u, tens u + 3: 2u + 3 = 9, so u = 3 and the number is 63." }
  ] },
  { code: "B3", level: "g5", title: "Set 3", questions: [
    { id: "B3-1", points: 3, text: "A rectangle has a perimeter of 20 cm and a length of 6 cm. What is its width?", art: null, choices: [4, 5, 6, 7, 3], answer: "A", calc: () => 4, why: "Half the perimeter is 10 cm, so the width is 10 - 6 = 4 cm." },
    { id: "B3-2", points: 4, text: "Dev walks 4 km a day for 5 days, rests for 2 days, then walks 3 km a day for 2 days. How many kilometres does he walk in total?", art: null, choices: [23, 26, 29, 32, 20], answer: "B", calc: () => 26, why: "5 x 4 = 20 and 2 x 3 = 6. 20 + 6 = 26." },
    { id: "B3-3", points: 4, text: "Ana has 3 times as many stamps as Ben. Ana gives 10 stamps to Ben, and then they have the same number. How many stamps did Ben have at first?", art: null, choices: [5, 8, 10, 12, 15], answer: "C", calc: () => 10, why: "Ben = b, Ana = 3b. 3b - 10 = b + 10, so b = 10." },
    { id: "B3-4", points: 5, text: "A bag has only red, blue and green balls. There are 16 balls in all. There are 4 more blue balls than green balls, and twice as many red balls as blue balls. There is 1 green ball. How many red balls are there?", art: null, choices: [14, 6, 8, 10, 12], answer: "D", calc: () => 10, why: "Green 1, blue 5, so red is 2 x 5 = 10. 1 + 5 + 10 = 16." }
  ] },
  { code: "B4", level: "g5", title: "Set 4", questions: [
    { id: "B4-1", points: 3, text: "What comes next in the pattern? 1, 4, 9, 16, __", art: null, choices: [36, 20, 21, 24, 25], answer: "E", calc: () => 25, why: "1, 4, 9, 16, 25 are 1², 2², 3², 4², 5²." },
    { id: "B4-2", points: 4, text: "Kip has 4 packs of 6 pencils. He gives 3 pencils to each of 4 friends. How many pencils are left?", art: null, choices: [12, 15, 6, 8, 9], answer: "A", calc: () => 12, why: "24 pencils in all. 4 friends x 3 = 12 given away. 24 - 12 = 12." },
    { id: "B4-3", points: 4, text: "The average of three numbers is 8. Two of the numbers are 6 and 9. What is the third number?", art: null, choices: [8, 9, 10, 5, 7], answer: "B", calc: () => 9, why: "The three numbers add up to 3 x 8 = 24. 24 - 6 - 9 = 9." },
    { id: "B4-4", points: 5, text: "Pens come in packs of 3 that cost 10 coins each pack. Ana has 25 coins. She buys as many whole packs as she can. How many coins does she have left?", art: null, choices: [0, 3, 5, 10, 15], answer: "C", calc: () => 5, why: "2 packs cost 20 coins, leaving 5." }
  ] }
];
