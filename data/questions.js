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
  { code: "J7", level: "k", title: "Counting & Comparing", questions: [
    { id: "J7-1", points: 3, text: "How many apples are hanging on the tree?", art: {"kind": "tree", "n": 5}, choices: [5, 6, 7, 3, 4], answer: "A", calc: () => 5, why: "Count the apples on the branches one by one: 5 apples." },
    { id: "J7-2", points: 3, text: "Which number comes next in the row?", art: {"kind": "missing", "list": [2, 3, 4, null]}, choices: [4, 5, 6, 7, 3], answer: "B", calc: () => 5, why: "Counting forward by ones: 2, 3, 4, 5." },
    { id: "J7-3", points: 4, text: "Bo sees these shapes. How many stars are there?", art: {"kind": "shapeMix", "list": [["star", 20, 30], ["star", 60, 40], ["circle", 40, 70], ["star", 80, 20]]}, choices: [6, 2, 3, 4, 5], answer: "C", calc: () => 3, why: "Count only the 5-pointed stars: there are 3 stars." },
    { id: "J7-4", points: 5, text: "Pip has 4 cupcakes. He eats 2 of them. How many cupcakes are left?", art: {"kind": "cupcakes", "n": 4, "eaten": 2}, choices: [4, 5, 1, 2, 3], answer: "D", calc: () => 2, why: "Subtract the 2 eaten cupcakes from 4: 4 - 2 = 2." }
  ] },
  { code: "J8", level: "k", title: "Adding & Shapes", questions: [
    { id: "J8-1", points: 3, text: "How many red balls are there in total?", art: {"kind": "addBalls", "a": 3, "b": 2}, choices: [6, 7, 3, 4, 5], answer: "E", calc: () => 5, why: "Add the two groups of balls together: 3 + 2 = 5." },
    { id: "J8-2", points: 4, text: "Which kangaroo is the tallest?", art: {"kind": "roos", "heights": [2, 4, 5, 3, 1]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "C", calc: () => "C", why: "Kangaroo C has height 5, which is taller than all the others." },
    { id: "J8-3", points: 4, text: "Which flower has exactly 6 petals?", art: {"kind": "flowers", "petals": [4, 5, 6, 3, 7]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "C", calc: () => "C", why: "Count petals on each flower: Flower C has 6 petals." },
    { id: "J8-4", points: 5, text: "Bo rolls a die. How many dots are on the top face?", art: {"kind": "die", "n": 6}, choices: [6, 3, 2, 4, 5], answer: "A", calc: () => 6, why: "Count the dots on the single die face: 6." }
  ] },
  { code: "J9", level: "k", title: "Jumps & Patterns", questions: [
    { id: "J9-1", points: 3, text: "Where is Kip sitting on the number line?", art: {"kind": "numberLine", "max": 6, "jumps": [], "kip": 3}, choices: [2, 3, 4, 5, 1], answer: "B", calc: () => 3, why: "Kip is sitting directly above the number 3." },
    { id: "J9-2", points: 4, text: "What is the missing number in the sequence?", art: {"kind": "missing", "list": [5, 6, null, 8]}, choices: [5, 6, 7, 8, 9], answer: "C", calc: () => 7, why: "Counting forward by ones: 5, 6, 7, 8." },
    { id: "J9-3", points: 4, text: "How many small squares make up this shape?", art: {"kind": "cells", "cells": [[0, 0], [0, 1], [1, 0], [1, 1]]}, choices: [6, 2, 3, 4, 5], answer: "D", calc: () => 4, why: "Count all grid units: 4 small squares arranged in a 2x2 grid." },
    { id: "J9-4", points: 5, text: "Kip starts at 1 and makes one jump of size 3. Where does he land?", art: {"kind": "numberLine", "max": 6, "jumps": [[1, 4]], "kip": 1}, choices: [5, 6, 2, 3, 4], answer: "E", calc: () => 4, why: "1 + 3 = 4." }
  ] },
  { code: "J10", level: "k", title: "Farm & Animals", questions: [
    { id: "J10-1", points: 3, text: "How many hens are on the farm?", art: {"kind": "farm", "hens": 3, "dogs": 2}, choices: [3, 4, 5, 1, 2], answer: "A", calc: () => 3, why: "Count only the hens: there are 3." },
    { id: "J10-2", points: 4, text: "How many total animals are on the farm?", art: {"kind": "farm", "hens": 4, "dogs": 2}, choices: [5, 6, 7, 8, 4], answer: "B", calc: () => 6, why: "Add 4 hens + 2 dogs = 6 animals." },
    { id: "J10-3", points: 4, text: "Which flower has the fewest petals?", art: {"kind": "flowers", "petals": [5, 3, 6, 4, 7]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "B", calc: () => "B", why: "Flower B has 3 petals, which is smaller than 4, 5, 6, or 7." },
    { id: "J10-4", points: 5, text: "Pip has 3 apples. Bo gives him 2 more. How many apples does Pip have now?", art: null, choices: [3, 4, 5, 6, 7], answer: "C", calc: () => 5, why: "3 + 2 = 5." }
  ] },
  { code: "J11", level: "k", title: "Time & Order", questions: [
    { id: "J11-1", points: 3, text: "What hour does the clock show?", art: {"kind": "clock", "h": 4}, choices: [6, 2, 3, 4, 5], answer: "D", calc: () => 4, why: "The hour hand points directly at the number 4." },
    { id: "J11-2", points: 4, text: "Kip rolls two dice. What is the sum of the dots?", art: {"kind": "dice", "a": 2, "b": 3}, choices: [6, 7, 3, 4, 5], answer: "E", calc: () => 5, why: "Add dots on both dice: 2 + 3 = 5." },
    { id: "J11-3", points: 4, text: "How many coins are in the pile?", art: {"kind": "coins", "n": 7}, choices: [7, 8, 9, 5, 6], answer: "A", calc: () => 7, why: "Count all coins in the stack: 7." },
    { id: "J11-4", points: 5, text: "Bo has 6 carrots. He gives 3 to Pip and 1 to Kip. How many carrots are left for Bo?", art: null, choices: [1, 2, 3, 4, 5], answer: "B", calc: () => 2, why: "6 - 3 - 1 = 2." }
  ] },
  { code: "J12", level: "k", title: "Growing Patterns", questions: [
    { id: "J12-1", points: 3, text: "How many dots should be in the next box?", art: {"kind": "growing", "counts": [1, 2, 3]}, choices: [2, 3, 4, 5, 6], answer: "C", calc: () => 4, why: "The pattern increases by 1 each step: 1, 2, 3, 4." },
    { id: "J12-2", points: 4, text: "Which kangaroo is second in line?", art: {"kind": "line", "label": "Bo"}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "B", calc: () => "B", why: "Kangaroo A is 1st (Bo), so Kangaroo B is 2nd." },
    { id: "J12-3", points: 4, text: "How many apples are on the tree?", art: {"kind": "tree", "n": 8}, choices: [10, 6, 7, 8, 9], answer: "D", calc: () => 8, why: "Count the apples carefully: there are 8 apples." },
    { id: "J12-4", points: 5, text: "Pip has 2 green dots and 4 red dots. How many dots does Pip have in total?", art: null, choices: [7, 8, 4, 5, 6], answer: "E", calc: () => 6, why: "2 + 4 = 6." }
  ] },
  { code: "J13", level: "k", title: "Shapes & Sizes", questions: [
    { id: "J13-1", points: 3, text: "How many triangles are in the box?", art: {"kind": "shapeMix", "list": [["triangle", 30, 40], ["square", 60, 20], ["triangle", 70, 70]]}, choices: [2, 3, 4, 5, 1], answer: "A", calc: () => 2, why: "Count only the 3-sided triangles: there are 2." },
    { id: "J13-2", points: 4, text: "Which kangaroo is the shortest?", art: {"kind": "roos", "heights": [5, 4, 1, 3, 2]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "C", calc: () => "C", why: "Kangaroo C has height 1, which is the shortest." },
    { id: "J13-3", points: 4, text: "What number is missing from the list?", art: {"kind": "missing", "list": [7, 8, 9, null]}, choices: [9, 10, 11, 12, 8], answer: "B", calc: () => 10, why: "Counting up by ones: 7, 8, 9, 10." },
    { id: "J13-4", points: 5, text: "Kip has 5 balloons. 2 pop. How many balloons are left?", art: null, choices: [1, 2, 3, 4, 5], answer: "C", calc: () => 3, why: "5 - 2 = 3." }
  ] },
  { code: "J14", level: "k", title: "Fun with Dice & Clocks", questions: [
    { id: "J14-1", points: 3, text: "What hour does the clock show?", art: {"kind": "clock", "h": 7}, choices: [9, 5, 6, 7, 8], answer: "D", calc: () => 7, why: "The hour hand points straight to 7." },
    { id: "J14-2", points: 4, text: "How many dots are on the die?", art: {"kind": "die", "n": 5}, choices: [6, 2, 3, 4, 5], answer: "E", calc: () => 5, why: "Count the dots on the die: 5." },
    { id: "J14-3", points: 4, text: "How many cupcakes are NOT eaten?", art: {"kind": "cupcakes", "n": 6, "eaten": 2}, choices: [4, 5, 6, 2, 3], answer: "A", calc: () => 4, why: "6 total cupcakes - 2 eaten = 4 remaining." },
    { id: "J14-4", points: 5, text: "Bo has 4 fish. Pip gives him 4 more. How many fish does Bo have in total?", art: null, choices: [7, 8, 9, 10, 6], answer: "B", calc: () => 8, why: "4 + 4 = 8." }
  ] },
  { code: "J15", level: "k", title: "Mixed Review Joey", questions: [
    { id: "J15-1", points: 3, text: "How many dogs are on the farm?", art: {"kind": "farm", "hens": 2, "dogs": 4}, choices: [2, 3, 4, 5, 6], answer: "C", calc: () => 4, why: "Count only the dogs: 4." },
    { id: "J15-2", points: 4, text: "Where does Kip land if he starts at 0 and jumps 5 steps forward?", art: {"kind": "numberLine", "max": 6, "jumps": [[0, 5]], "kip": 0}, choices: [2, 3, 4, 5, 6], answer: "D", calc: () => 5, why: "0 + 5 = 5." },
    { id: "J15-3", points: 4, text: "How many coins are shown?", art: {"kind": "coins", "n": 9}, choices: [10, 6, 7, 8, 9], answer: "E", calc: () => 9, why: "Count the total coins: 9." },
    { id: "J15-4", points: 5, text: "Pip has 7 stickers. He gives 3 to Bo. How many stickers does Pip have left?", art: null, choices: [4, 5, 6, 2, 3], answer: "A", calc: () => 4, why: "7 - 3 = 4." }
  ] },
  { code: "R7", level: "g2", title: "Addition & Balance", questions: [
    { id: "R7-1", points: 3, text: "Kip rolls two dice. One shows 5 and the other shows 4. What is the sum?", art: {"kind": "dice", "a": 5, "b": 4}, choices: [8, 9, 10, 11, 7], answer: "B", calc: () => 9, why: "5 + 4 = 9." },
    { id: "R7-2", points: 4, text: "On a balance scale, 1 cube balances 2 balls. How many balls balance 3 cubes?", art: {"kind": "balance"}, choices: [4, 5, 6, 8, 3], answer: "C", calc: () => 6, why: "If 1 cube = 2 balls, then 3 cubes = 3 x 2 = 6 balls." },
    { id: "R7-3", points: 4, text: "Bo starts at number 3 on the number line. He makes 2 jumps of size 3 forward. Where does he land?", art: {"kind": "numberLine", "max": 10, "jumps": [[3, 6], [6, 9]], "kip": 3}, choices: [6, 7, 8, 9, 10], answer: "D", calc: () => 9, why: "3 + 3 + 3 = 9." },
    { id: "R7-4", points: 5, text: "Pip has 12 apples. He keeps 4 for himself and divides the rest equally between Bo and Kip. How many apples does Kip get?", art: null, choices: [5, 6, 8, 3, 4], answer: "E", calc: () => 4, why: "12 - 4 = 8 remaining apples. 8 divided between 2 kangaroos = 4 apples each." }
  ] },
  { code: "R8", level: "g2", title: "Grids & Measurement", questions: [
    { id: "R8-1", points: 3, text: "A square grid has 3 rows and 3 columns. How many small squares are there in total?", art: {"kind": "squares", "n": 3}, choices: [9, 12, 16, 6, 8], answer: "A", calc: () => 9, why: "3 rows x 3 columns = 9 small squares." },
    { id: "R8-2", points: 4, text: "Which flower has the most petals?", art: {"kind": "flowers", "petals": [6, 8, 7, 9, 5]}, choices: [{"see": "A"}, {"see": "B"}, {"see": "C"}, {"see": "D"}, {"see": "E"}], answer: "D", calc: () => "D", why: "Flower D has 9 petals, which is more than 5, 6, 7, or 8." },
    { id: "R8-3", points: 4, text: "What number comes next in the sequence: 4, 8, 12, 16, __?", art: {"kind": "missing", "list": [4, 8, 12, 16, null]}, choices: [18, 20, 22, 24, 25], answer: "B", calc: () => 20, why: "The pattern adds 4 each step: 16 + 4 = 20." },
    { id: "R8-4", points: 5, text: "Bo has 3 coins of 5 cents and 2 coins of 10 cents. How many cents does Bo have altogether?", art: null, choices: [25, 30, 35, 40, 45], answer: "C", calc: () => 35, why: "(3 x 5) + (2 x 10) = 15 + 20 = 35 cents." }
  ] },
  { code: "R9", level: "g2", title: "Line Up & Deductions", questions: [
    { id: "R9-1", points: 3, text: "Bo, Kip, and Pip are standing in line. Kip is behind Bo. Pip is behind Kip. Who is last in line?", art: {"kind": "names", "names": ["Bo", "Kip", "Pip"]}, choices: ["None", "Bo", "Kip", "Pip", "Bo and Kip"], answer: "D", calc: () => "Pip", why: "Order from front to back: Bo, Kip, Pip. Pip is last." },
    { id: "R9-2", points: 4, text: "A clock shows 3 o'clock right now. What hour will it show in 5 hours?", art: {"kind": "clock", "h": 3}, choices: [9, 10, 6, 7, 8], answer: "E", calc: () => 8, why: "3 + 5 = 8 o'clock." },
    { id: "R9-3", points: 4, text: "How many unit cells make up an L-shape made of 3 vertical and 2 horizontal cells sharing a corner?", art: {"kind": "cells", "cells": [[0, 0], [0, 1], [0, 2], [1, 0]]}, choices: [4, 5, 6, 7, 3], answer: "A", calc: () => 4, why: "Count the coordinate pairs: 4 distinct cells." },
    { id: "R9-4", points: 5, text: "Kip has 15 red marbles. He trades 3 red marbles for 1 blue marble. If he gets 4 blue marbles, how many red marbles does he have left?", art: null, choices: [2, 3, 4, 5, 1], answer: "B", calc: () => 3, why: "4 blue marbles cost 4 x 3 = 12 red marbles. 15 - 12 = 3 red marbles left." }
  ] },
  { code: "R10", level: "g2", title: "Geometry & Logic", questions: [
    { id: "R10-1", points: 3, text: "A triangle is split into two smaller triangles by one straight line. How many total triangles are in the figure?", art: {"kind": "splitTriangle"}, choices: [1, 2, 3, 4, 5], answer: "C", calc: () => 3, why: "There are 2 small triangles inside plus 1 large outer triangle = 3 triangles." },
    { id: "R10-2", points: 4, text: "How many total squares are in a 4x4 grid?", art: {"kind": "squares", "n": 4}, choices: [20, 12, 14, 16, 18], answer: "D", calc: () => 16, why: "Count the small 1x1 grid squares: 4 x 4 = 16." },
    { id: "R10-3", points: 4, text: "What is the missing number: 30, 25, 20, __, 10?", art: {"kind": "missing", "list": [30, 25, 20, null, 10]}, choices: [16, 18, 12, 14, 15], answer: "E", calc: () => 15, why: "Subtracting 5 each step: 20 - 5 = 15." },
    { id: "R10-4", points: 5, text: "Bo has 20 nuts. He buries half of them. Then a squirrel steals 3 of the buried nuts. How many buried nuts are left?", art: null, choices: [7, 8, 10, 5, 6], answer: "A", calc: () => 7, why: "Half of 20 is 10. 10 - 3 = 7 buried nuts left." }
  ] },
  { code: "R11", level: "g2", title: "Word Problems & Scales", questions: [
    { id: "R11-1", points: 3, text: "Pip count 5 dogs on the farm. Each dog has 4 legs. How many dog legs are there in total?", art: {"kind": "farm", "hens": 0, "dogs": 5}, choices: [18, 20, 24, 12, 16], answer: "B", calc: () => 20, why: "5 dogs x 4 legs each = 20 legs." },
    { id: "R11-2", points: 4, text: "If 1 cube balances 2 balls, how many cubes balance 8 balls?", art: {"kind": "balance"}, choices: [2, 3, 4, 5, 6], answer: "C", calc: () => 4, why: "8 divided by 2 = 4 cubes." },
    { id: "R11-3", points: 4, text: "How many cupcakes are left if Bo starts with 9 and eats 4?", art: {"kind": "cupcakes", "n": 9, "eaten": 4}, choices: [7, 3, 4, 5, 6], answer: "D", calc: () => 5, why: "9 - 4 = 5." },
    { id: "R11-4", points: 5, text: "Kip has 3 cards with numbers 2, 4, and 7. What is the largest 3-digit number he can make?", art: null, choices: [747, 427, 472, 724, 742], answer: "E", calc: () => 742, why: "Put the largest digit first (7), then the next largest (4), then the smallest (2) = 742." }
  ] },
  { code: "R12", level: "g2", title: "Double Jumps & Sequences", questions: [
    { id: "R12-1", points: 3, text: "Kip starts at 0 and makes 4 jumps of size 2. Where does Kip land?", art: {"kind": "numberLine", "max": 10, "jumps": [[0, 2], [2, 4], [4, 6], [6, 8]], "kip": 0}, choices: [8, 9, 10, 6, 7], answer: "A", calc: () => 8, why: "4 jumps of 2 = 4 x 2 = 8." },
    { id: "R12-2", points: 4, text: "What is the missing number: 2, 5, 8, 11, __?", art: {"kind": "missing", "list": [2, 5, 8, 11, null]}, choices: [13, 14, 15, 16, 12], answer: "B", calc: () => 14, why: "Add 3 each step: 11 + 3 = 14." },
    { id: "R12-3", points: 4, text: "Bo has 2 dice showing 6 and 6. What is the total sum?", art: {"kind": "dice", "a": 6, "b": 6}, choices: [10, 11, 12, 13, 14], answer: "C", calc: () => 12, why: "6 + 6 = 12." },
    { id: "R12-4", points: 5, text: "Pip has 18 crayons. He gives 6 to Bo and twice as many as that to Kip. How many crayons does Pip have left?", art: null, choices: [4, 6, 8, 0, 2], answer: "D", calc: () => 0, why: "Kip gets 2 x 6 = 12. Total given away: 6 + 12 = 18. Pip has 18 - 18 = 0 left." }
  ] },
  { code: "R13", level: "g2", title: "Patterns & Time", questions: [
    { id: "R13-1", points: 3, text: "What time will the clock show 2 hours after 8 o'clock?", art: {"kind": "clock", "h": 8}, choices: [11, 12, 1, 9, 10], answer: "E", calc: () => 10, why: "8 + 2 = 10 o'clock." },
    { id: "R13-2", points: 4, text: "How many dots should be in the 5th box of the growing pattern?", art: {"kind": "growing", "counts": [2, 4, 6, 8]}, choices: [10, 11, 12, 8, 9], answer: "A", calc: () => 10, why: "The pattern adds 2 each time: 2, 4, 6, 8, 10." },
    { id: "R13-3", points: 4, text: "How many coins are in 2 piles of 6 coins each?", art: {"kind": "coins", "n": 6}, choices: [10, 12, 14, 16, 8], answer: "B", calc: () => 12, why: "2 x 6 = 12 coins." },
    { id: "R13-4", points: 5, text: "A ribbon is 24 cm long. Bo cuts it into 3 equal pieces. How long is each piece?", art: null, choices: [6, 7, 8, 9, 10], answer: "C", calc: () => 8, why: "24 divided by 3 = 8 cm." }
  ] },
  { code: "R14", level: "g2", title: "Mixed Math Roo 1", questions: [
    { id: "R14-1", points: 3, text: "How many total petals are on 3 flowers with 5 petals each?", art: {"kind": "flowers", "petals": [5, 5, 5, 0, 0]}, choices: [20, 10, 12, 15, 18], answer: "D", calc: () => 15, why: "3 x 5 = 15 petals." },
    { id: "R14-2", points: 4, text: "Kip is 3rd in line from the front. There are 4 kangaroos behind Kip. How many kangaroos are in line?", art: {"kind": "line", "label": "Kip"}, choices: [8, 9, 5, 6, 7], answer: "E", calc: () => 7, why: "3 in front (including Kip) + 4 behind = 7 kangaroos." },
    { id: "R14-3", points: 4, text: "How many legs do 3 hens and 2 dogs have altogether?", art: {"kind": "farm", "hens": 3, "dogs": 2}, choices: [14, 16, 18, 10, 12], answer: "A", calc: () => 14, why: "(3 hens x 2 legs = 6) + (2 dogs x 4 legs = 8). 6 + 8 = 14 legs." },
    { id: "R14-4", points: 5, text: "Pip thinks of a number. He doubles it and then adds 4 to get 14. What was his original number?", art: null, choices: [4, 5, 6, 7, 3], answer: "B", calc: () => 5, why: "Work backward: 14 - 4 = 10. Half of 10 is 5." }
  ] },
  { code: "R15", level: "g2", title: "Grand Championship Roo", questions: [
    { id: "R15-1", points: 3, text: "What is the area of a rectangle made of 2 rows of 5 small square cells?", art: {"kind": "squares", "n": 5}, choices: [8, 9, 10, 12, 7], answer: "C", calc: () => 10, why: "2 rows x 5 cells = 10 small squares." },
    { id: "R15-2", points: 4, text: "Where does Kip land if he starts at 10 and jumps 4 backward?", art: {"kind": "numberLine", "max": 10, "jumps": [[10, 6]], "kip": 10}, choices: [8, 4, 5, 6, 7], answer: "D", calc: () => 6, why: "10 - 4 = 6." },
    { id: "R15-3", points: 4, text: "Bo has 5 apples on 3 trees. How many apples in total?", art: {"kind": "tree", "n": 5}, choices: [16, 20, 10, 12, 15], answer: "E", calc: () => 15, why: "3 trees x 5 apples = 15 apples." },
    { id: "R15-4", points: 5, text: "In a race, Kip finishes before Bo, but after Pip. Who won 1st place in the race?", art: {"kind": "names", "names": ["Pip", "Kip", "Bo"]}, choices: ["Pip", "Tie", "Unknown", "Bo", "Kip"], answer: "A", calc: () => "Pip", why: "Order of finish: 1st Pip, 2nd Kip, 3rd Bo. Pip won 1st place." }
  ] }
];
