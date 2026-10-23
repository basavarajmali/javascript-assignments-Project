// Assignment 6: Arrays, Objects, and Core Methods

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

// forEach: run code for every item (returns nothing)
console.log("-- All Products (forEach) --");
products.forEach(product => {
  console.log(`Item: ${product.name} - Price: $${product.price}`);
});

// filter: keep only items that pass the test, returns a new array
console.log("-- Filtered Products (Price < $50) --");
const cheap = products.filter(product => product.price < 50);
console.log(cheap);

// map: transform every item, returns a new array of the same length
console.log("-- Mapped Product Tags (map) --");
const tags = products.map(product => `${product.name.toUpperCase()} costs $${product.price}`);
console.log(tags);
