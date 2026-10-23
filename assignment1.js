// Assignment 1: Variables, Data Types, and Console Operations

var name = "Alice";                       // var: old-style, function-scoped
let age = 25;                             // let: can be reassigned later
const isEmployed = true;                  // const: cannot be reassigned
const skills = ["HTML", "CSS", "JavaScript"];

// typeof tells us the data type of a value
console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is Employed: " + isEmployed + " (Type: " + typeof isEmployed + ")");
console.log("Skills: " + JSON.stringify(skills).replace(/,/g, ", ") + " (Type: " + typeof skills + ")");
