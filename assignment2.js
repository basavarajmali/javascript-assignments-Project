// Assignment 2: Operators, Expressions, and Input Handling
// prompt() exists only in browsers. This fallback lets the file also run in Node (uses 100 and 15).
if (typeof prompt === "undefined") {
  var defaults = ["100", "15"];
  var prompt = function () { return defaults.shift(); };
}

// prompt() always returns a string, so convert explicitly with Number()
let subtotal = Number(prompt("Enter the bill amount:"));
let tipPercent = Number(prompt("Enter the tip percentage:"));

let tip = subtotal * tipPercent / 100;   // arithmetic operators
let total = subtotal;                    // start from the subtotal...
total += tip;                            // ...assignment operator: total = total + tip

console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercent}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${total}`);
