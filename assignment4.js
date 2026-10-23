// Assignment 4: Loop Control Structures

// 1) for loop: multiplication table of 5
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 2) while loop + break: first number > 10 divisible by 6
console.log("-- First number > 10 divisible by 6 --");
let n = 11;
while (true) {
  if (n % 6 === 0) {
    console.log("Found: " + n);
    break;               // stop the loop as soon as we find it
  }
  n++;
}

// 3) do...while + continue: print 1 to 5, skipping 3
console.log("-- do...while with continue (skips 3) --");
let k = 0;
do {
  k++;
  if (k === 3) {
    continue;            // jump to the next round, skipping the log below
  }
  console.log("Number: " + k);
} while (k < 5);
