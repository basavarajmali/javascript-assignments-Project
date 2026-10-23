# JavaScript Assignments & Capstone Mini Project

Six practical assignments covering core JavaScript concepts, plus a capstone project that combines them.

## Contents

| File | Topic |
|---|---|
| `assignment1.js` | Variables, data types (`var`, `let`, `const`, `typeof`) |
| `assignment2.js` | Operators, `prompt()` input, type conversion (tip calculator) |
| `assignment3.js` | Conditionals: `if...else`, `switch`, ternary |
| `assignment4.js` | Loops: `for`, `while` + `break`, `do...while` + `continue` |
| `assignment5.js` | Functions, arrow functions, default parameters, scope |
| `assignment6.js` | Arrays and objects: `forEach`, `filter`, `map` |
| `project.js` | Interactive Product Inventory & Analytics Dashboard |
| `index.html` | Loads a script in the browser so `prompt()` works |

## How to run

**Node.js**

```bash
node assignment1.js
node project.js
```

In Node, `prompt()` is simulated with preset values (the mini project simulates a user adding "Monitor" at 150).

**Browser**

Open `index.html`, then open the developer console (F12, then Console). Edit the `<script src="...">` line in `index.html` to run a different file. Real `prompt()` dialogs will appear.

## Mini project features

- Takes a new product name and price with `prompt()` and converts the price with `Number()`
- Validates input with `if...else`, retries up to 3 times using `break` / `continue`
- Assigns categories with `switch`: Budget (< $100), Standard ($100-$499), Premium ($500+)
- Calculates totals, tax and discount with regular and arrow functions
- Reports with `forEach`, `filter` and `map`
