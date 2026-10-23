// Assignment 3: Conditional Logic Implementation

let score = 85;
let grade;

// if...else: make sure the score is valid before grading
if (score < 0 || score > 100) {
  console.log("Invalid score! Enter a number between 0 and 100.");
} else {
  // switch: Math.floor(score / 10) turns 85 into 8, 93 into 9, etc.
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      grade = "A";
      break;
    case 8:
      grade = "B";
      break;
    case 7:
      grade = "C";
      break;
    case 6:
      grade = "D";
      break;
    default:
      grade = "F";
  }

  // ternary operator: condition ? valueIfTrue : valueIfFalse
  let status = score >= 40 ? "Passed" : "Failed";

  console.log("Score: " + score);
  console.log("Grade: " + grade);
  console.log("Status: " + status);
}
