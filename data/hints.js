/* Hints for the worksheets' questions, keyed by question id. Shown by the tap-to-answer overlay (tools/overlay/).
   Rules (also in process.md and tools/overlay/README.md):
   - Two hints per question, easiest first. Hint 1 points at the method; hint 2 is more specific.
   - Never give the letter, and never state the final answer number.
   - Written for a child: short, plain words, the picture named the way it looks.
   - Every active (not retired) question must have an entry. tools/check_sheets.js lists any that do not. */
window.LKG_HINTS = {
  // J17 · Mixed set 2
  "J17-1": ["Look at the numbers already in the row. What changes from one number to the next?", "Keep adding the same amount to the last number you can see, and say each number out loud."],
  "J17-2": ["Not everything on the farm is a dog. Cover the other animals with your finger and count only the dogs.", "Touch each dog once as you count it, so none is counted twice."],
  "J17-3": ["Count the dots on the left die, then the dots on the right die.", "Start with the bigger number and count on by the smaller number."],
  "J17-4": ["Put your finger on 0. Each jump moves you one number along the line.", "Count 5 steps forward from 0, one number at a time."],

  // J18 · Mixed set 3
  "J18-1": ["There are two groups of red balls. Count each group on its own first.", "Put the two group totals together to get the total."],
  "J18-2": ["A star has five points. Look at each shape and check its points before you count.", "Count only the shapes with five points, touching each one as you go."],
  "J18-3": ["Count the coins from the top of the pile down, one at a time.", "Touch each coin once so none is missed."],
  "J18-4": ["Count the coins one at a time, starting with the biggest ones.", "If there is more than one stack, count each stack and then add the totals."],

  // J20 · Mixed set 5
  "J20-1": ["Two kinds of animal are on the farm. Pick out only one kind to count.", "The hens are the birds. Touch each hen once as you count it, then find that number in the choices."],
  "J20-2": ["Count the petals on one flower at a time. Go slowly all the way around it.", "Each flower has a different number of petals. Check every flower, not just the first one you see."],
  "J20-3": ["Point to each apple as you count it, so none is missed or counted twice.", "Count the apples on the left side of the tree, then the right side, and add them together."],
  "J20-4": ["Put your finger on the 1. A jump of 3 moves you forward 3 numbers.", "Count forward from 1 one number at a time, and do it 3 times."],

  // R16 · Mixed set 1
  "R16-1": ["Find the number on each die, then add the two numbers together.", "Start with the bigger number and count on by the smaller number."],
  "R16-2": ["Count the squares row by row. How many squares are in one row?", "Count how many rows there are, then multiply: rows times the squares in each row."],
  "R16-3": ["Look at the numbers before and after the gap. How much does the list go down each time?", "Take the same step down from the number just before the gap."],
  "R16-4": ["Start with the 12 apples. First take away the ones Pip keeps for himself.", "Share what is left equally between the two friends, Bo and Kip."],

  // R17 · Mixed set 2
  "R17-1": ["A 3 by 3 grid has 3 rows, with 3 squares in each row.", "Count the squares in one row, then multiply by the number of rows."],
  "R17-2": ["First work out how many balls one cube balances.", "Each cube is worth 2 balls. Then multiply that by the 3 cubes."],
  "R17-3": ["How many balls does one cube balance? Think of the 8 balls as equal groups of that size.", "Split the 8 balls into groups of 2 and count how many groups there are."],
  "R17-4": ["Work out the cents of the 5-cent coins and the 10-cent coins separately.", "Multiply the number of coins by their value for each kind, then add the two totals."],

  // R18 · Mixed set 3
  "R18-1": ["Write the line from front to back as you read each clue.", "Put Bo first, then the kangaroo behind Bo, then the one behind that. Who is at the very back?"],
  "R18-2": ["Start on 3. A jump of size 3 moves you 3 numbers forward.", "Make the two jumps one at a time. Where are you after the first jump, and then where after the second?"],
  "R18-3": ["Look at how much each number goes up by.", "Add that same amount to 11 once more to reach the missing number."],
  "R18-4": ["Each blue marble costs 3 red marbles. Work out how many red marbles 4 blue marbles cost.", "Take that cost away from the 15 red marbles Kip starts with."],

  // R19 · Mixed set 4
  "R19-1": ["Count the small triangles inside the big one first.", "Do not forget the big outer triangle. It counts too, so add it to the small ones."],
  "R19-2": ["Count the petals on each flower, one flower at a time.", "Compare the counts. Which flower has the highest count?"],
  "R19-3": ["Look at how much the pattern grows each time.", "Keep adding that same amount, one box at a time, until you reach box 5."],
  "R19-4": ["Start by finding half of the 20 nuts.", "After half are buried, take away the 3 that were stolen from the buried ones."],

  // R20 · Mixed set 5
  "R20-1": ["Count the dogs first, then the legs on one dog.", "Multiply the number of dogs by the legs on each dog."],
  "R20-2": ["Look at how much the sequence goes up each step.", "Add that same step to the last number shown."],
  "R20-3": ["Each pile has 6 coins. How many piles are there?", "Add the second pile to the first one, or multiply the number of piles by 6."],
  "R20-4": ["A 3-digit number has hundreds, tens and units. Which digit should go first to make it as big as possible?", "Put the biggest digit in the hundreds place, then the next biggest in the tens place, then the smallest last."],

  // R21 · Mixed set 6
  "R21-1": ["Each jump is 2. Start at 0 and count the jumps.", "Write down where you land after each jump, one jump at a time."],
  "R21-2": ["Start on the 3 and move forward 5 hours around the clock.", "Count forward one hour at a time, 5 times, from 3."],
  "R21-3": ["Count the kangaroos in front of Kip, and count Kip too.", "Add the kangaroos behind Kip to that number."],
  "R21-4": ["First work out how many crayons Kip gets. Kip gets twice as many as Bo.", "Add what Bo and Kip were given together, then take that away from the 18 crayons."],

  // R22 · Mixed set 7
  "R22-1": ["Start on the 8 and move forward 2 hours.", "Count forward one hour at a time, two times, from 8."],
  "R22-2": ["Count the squares in the column first.", "Then add the squares along the bottom, counting each square only once."],
  "R22-3": ["Start on 10. A jump backward moves you to smaller numbers.", "Count back 4 numbers from 10, one at a time."],
  "R22-4": ["Split the 24 into 3 equal groups.", "Think: how many times does 3 fit into 24?"],

  // R23 · Mixed set 8
  "R23-1": ["Each flower has 5 petals. How many flowers are there?", "Add 5 for each flower, or multiply the number of flowers by 5."],
  "R23-2": ["Count the squares row by row. How many squares are in one row?", "Multiply the number of rows by the number of squares in each row."],
  "R23-3": ["Count the apples on one tree first.", "Multiply the number of trees by the apples on each tree."],
  "R23-4": ["Work backward. Start from 14 and undo the last step first.", "Undo the adding first, then undo the doubling by splitting in half."],

  // W1 · Set 1
  "W1-1": ["Write the names in order, one per place, as each clue says.", "Find Ana first, then Ben behind Ana, then Cara behind Ben. Then place Eli and Dev. Who is third?"],
  "W1-2": ["Start with Kip's balls: 3 red and 4 blue. How many does Kip have altogether?", "Pip has the same as Kip. Bo has twice as many as Pip, so double Pip's total."],
  "W1-3": ["First work out how long the trip to the park takes.", "Add the trip time to the leaving time, then add the hour spent at the park."],
  "W1-4": ["Use the clues one at a time. Bo's jump is given first.", "Find the two kangaroos whose jumps are 3 metres apart. The jump left over belongs to Kip."],

  // W2 · Set 2
  "W2-1": ["Look for a pattern that repeats. Which shapes repeat, and how many shapes are in one repeat?", "Find where the repeat starts, then count along to the shape that comes next."],
  "W2-2": ["Look for squares of different sizes: small ones, medium ones and the big one.", "Count the squares of each size on their own, then add them together."],
  "W2-3": ["Start with Ned, who has 10 stickers. Work out Leo's stickers first.", "Mia has 4 more than Leo. Work out Mia's stickers, then add hers to Leo's."],
  "W2-4": ["Use the clue about Cara first, because she has the cat.", "Once Cara has the cat, check what Ben can have. Then what is left is for Ana."],

  // W3 · Set 3
  "W3-1": ["Add the cost of one pencil and the cost of two rubbers.", "Two rubbers means the rubber price twice, so work that out first."],
  "W3-2": ["List the numbers Ana says below 20, and the numbers Bo says below 20.", "Look for a number that appears in both lists."],
  "W3-3": ["Work out where Kip is after the three forward jumps of 4.", "Then move back 2 from that place."],
  "W3-4": ["Start with Cara's 6 marbles. Work out how many Ana has.", "After Bo gives 4 to Ana, Bo and Ana have the same. So Bo had Ana's number plus 4 to begin with."],

  // W4 · Set 4
  "W4-1": ["Count on by 5s from 0 and say each number out loud.", "Find the number where the count stops matching the pattern."],
  "W4-2": ["Work out how many apples are in all 4 bags.", "Take away the apples Kip eats from that total."],
  "W4-3": ["How many cupcakes have no X? Take the 3 with an X away from the 9.", "Then take away the 2 cupcakes that Ana eats."],
  "W4-4": ["Put the names in line order, starting from Ana at the front, using each clue.", "Count the places along the line to find the one in the middle."],

  // F1 · Set 1
  "F1-1": ["Draw two rings that overlap: one for apples and one for pears. Where do the 5 children who like both go?", "Take the 5 out of each ring, then add up what is left in the two rings."],
  "F1-2": ["Call Bo's stickers a number you do not know yet. Kip is twice that, and Pip is 6 more.", "All three together make 42. Work out Bo's share first, then double it for Kip."],
  "F1-3": ["Count the whole hours first. How many whole hours fit between 2:35 and 4:10?", "Then count the leftover minutes after the last whole hour."],
  "F1-4": ["Start with Ben, who has 3. Dev has 2 less than Cara, so work out Dev first.", "Ana has more than Ben, so she has 4 or 5. Then check which numbers are left for Cara."],

  // F2 · Set 2
  "F2-1": ["Count the kangaroos in front of Kip, then the kangaroos behind Kip.", "Kip is counted twice when you add those two numbers, so take 1 away."],
  "F2-2": ["Think of the shape as a square with some squares missing from it.", "Look for the gap in the middle, and count the squares in the outer rows."],
  "F2-3": ["Call the second number x. Write the first and third numbers using x.", "Add the three numbers together. They make 30, so solve for x."],
  "F2-4": ["Work out how many pencils Mia has first. She has twice as many as Ned.", "Mia and Leo make 13 together, so take Mia's pencils away from 13 to find Leo's."],

  // F3 · Set 3
  "F3-1": ["Start with the 8 slices, and take away the slices both children ate.", "Add up the slices eaten first, then take that from 8."],
  "F3-2": ["Write the 2-digit numbers that start with 7.", "Look at the last digit. It can be any digit from 0 to 9."],
  "F3-3": ["Work out how many stickers Bo has altogether: packets times stickers in each.", "Take away the 6 given to Ana, then share the rest into two equal groups."],
  "F3-4": ["Start with Dev, who has 12. Cara has half as many as Dev.", "Bo has the same as Cara. Ana has 5 more than Bo."],

  // F4 · Set 4
  "F4-1": ["An even number ends in an even digit. Which of 7, 4 and 9 is even?", "Put the even digit at the end, then put the biggest of the other digits first."],
  "F4-2": ["Count the hens and the dogs separately. How many legs does one hen have? One dog?", "Multiply the hens by their legs and the dogs by theirs, then add the two totals."],
  "F4-3": ["Add the numbers on the two dice shown first.", "The third die is the number that makes the total 15 when it is added to that."],
  "F4-4": ["Undo the last step first: take 5 away from 26.", "Then undo the multiplying: share the result into 3 equal parts."],

  // B1 · Set 1
  "B1-1": ["Put the three numbers in order from smallest to biggest, using the clues.", "Kip has the fewest, Bo has more than Kip, and Pip has more than Bo."],
  "B1-2": ["An odd number ends in an odd digit. Which digits are odd?", "A number bigger than 500 starts with 5 or more. Try only the numbers that start with 5 or 8."],
  "B1-3": ["Add the first train's trip time to its leaving time to find when it arrives.", "The second train leaves 25 minutes after the first. Work out when it leaves, then add the 55 minute trip."],
  "B1-4": ["Use Dev's 1 apple first, then Ben's 2.", "Cara eats 2 more than Dev, and Eli eats 2 more than Ben. The number left is Ana's."],

  // B2 · Set 2
  "B2-1": ["Find how many cubes are in all the boxes first.", "Multiply the boxes by the cubes in each box, then take away the 5 that were taken out."],
  "B2-2": ["Count the squares row by row, starting at the top.", "Each row is one square longer than the row above it. Add them all up."],
  "B2-3": ["Call Ben's marbles a number you do not know yet. Ana has 3 times that.", "Cara has 10 more than Ben. All three make 60, so share out 60 to find Ben's, then work out Ana's."],
  "B2-4": ["Let the units digit be a letter. The tens digit is 3 more than that.", "The two digits add up to 9. Try the digits that fit that pattern."],

  // B3 · Set 3
  "B3-1": ["Half of the perimeter is the length plus the width. What is half of 20?", "Take the length away from half of the perimeter to find the width."],
  "B3-2": ["Work out the kilometres for the 5 days of 4 km first.", "Then add the kilometres for the 2 days of 3 km."],
  "B3-3": ["Call Ben's stamps a number you do not know yet. Ana has 3 times that.", "After Ana gives 10 to Ben, they have the same. Work out what they both have and solve for Ben's start."],
  "B3-4": ["The green balls are given: there is 1. Use the clue to find the blue balls.", "Red is twice blue. Add green, blue and red together, and they must make 16."],

  // B4 · Set 4
  "B4-1": ["Look at each number and what you get when you multiply it by itself.", "1 is 1 times 1, 4 is 2 times 2, 9 is 3 times 3. What is the next one?"],
  "B4-2": ["Work out how many pencils Kip has first: packs times pencils in each.", "Take away the pencils given to the 4 friends, 3 each."],
  "B4-3": ["The average times the count gives the total of all three numbers.", "Take the two known numbers away from that total to find the third."],
  "B4-4": ["How much does one pack cost, and how many whole packs can 25 coins buy?", "Work out the cost of the whole packs, then take it away from 25."]
};
