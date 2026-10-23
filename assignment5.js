// Assignment 5: Function Architecture and Scope

// Standard function with default parameter values (length = 5, width = 4)
function rectangleArea(length = 5, width = 4) {
  return length * width;
}

// Arrow function with the same idea
const arrowArea = (length = 5, width = 4) => length * width;

console.log("Standard Function Area (Default 5x4): " + rectangleArea());
console.log("Arrow Function Area (Custom 10x3): " + arrowArea(10, 3));

// Scope demo: let/const are block-scoped, so blockVar only exists inside { }
{
  let blockVar = "I live only inside this block";
}

try {
  console.log(blockVar);          // outside the block -> error
} catch (error) {
  console.log("Scope Test Error: " + error.name + ": " + error.message + " (when accessed outside block)");
}
