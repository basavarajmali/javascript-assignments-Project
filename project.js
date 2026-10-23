// Capstone Mini Project: Interactive Product Inventory & Analytics Dashboard

// prompt() exists only in browsers. In Node we simulate the user typing "Monitor" and "150".
if (typeof prompt === "undefined") {
  var simulatedInputs = ["Monitor", "150"];
  var prompt = function () { return simulatedInputs.shift(); };
}

// ---------- Data ----------
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// ---------- Functions & scope ----------
// Regular function: total value of all items
function calculateTotal(items) {
  let total = 0;                       // local variable, invisible outside the function
  items.forEach(item => { total += item.price; });
  return total;
}

// Arrow functions with default parameters (tax and discount are percentages)
const applyTax = (amount, taxPercent = 10) => amount + (amount * taxPercent) / 100;
const applyDiscount = (amount, discountPercent = 5) => amount - (amount * discountPercent) / 100;

// Category badge using a switch on price tiers
function getCategory(price) {
  switch (true) {
    case price >= 500: return "Premium";
    case price >= 100: return "Standard";
    default:           return "Budget";
  }
}

// ---------- 1. Data & input initialization ----------
console.log("--- Initializing Inventory System ---");

const MAX_ATTEMPTS = 3;
let newName = null;
let newPrice = null;

// ---------- 3. Loops & flow control: handle bad or missing input ----------
for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  const rawName = prompt("Enter the new product name:");
  const rawPrice = prompt("Enter the new product price:");

  // ---------- 2. Conditional validation ----------
  if (rawName === null || rawName === undefined || rawName.trim() === "") {
    console.log("Invalid name (attempt " + attempt + "). Please try again.");
    continue;                                  // bad name -> next attempt
  }

  const price = Number(rawPrice);              // explicit type conversion
  if (rawPrice === null || rawPrice === undefined || rawPrice.trim() === "" || isNaN(price) || price <= 0) {
    console.log("Invalid price (attempt " + attempt + "). Please try again.");
    continue;                                  // bad price -> next attempt
  }

  newName = rawName.trim();
  newPrice = price;
  break;                                       // valid input -> stop asking
}

if (newName === null) {
  console.log("No valid product entered. Continuing with existing inventory.");
} else {
  // Search the inventory for a duplicate name
  let duplicate = false;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === newName.toLowerCase()) {
      duplicate = true;
      break;                                   // found it, no need to keep looking
    }
  }

  if (duplicate) {
    console.log(`"${newName}" already exists. Not added.`);
  } else {
    inventory.push({ name: newName, price: newPrice });
    console.log(`[Prompt executed: User adds "${newName}" at "$${newPrice}"]`);
  }
}

// ---------- 5. Array methods ----------
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

console.log("--- Financial Analytics ---");
const totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

const affordable = inventory.filter(item => item.price < 200).map(item => item.name);
console.log("Filtered Affordable Items (Under $200):", JSON.stringify(affordable).replace(/,/g, ", "));

const report = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log("Formatted Report List:", JSON.stringify(report).replace(/,/g, ", "));

// Extra: custom tax/discount demo (requirement 4)
const finalValue = applyDiscount(applyTax(totalValue, 10), 5);
console.log(`Value after 10% tax and 5% discount: $${finalValue.toFixed(2)}`);
