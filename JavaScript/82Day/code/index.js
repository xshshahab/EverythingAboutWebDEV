console.log(greet()); // Output: "Hello, World!"
console.log(myVar); // Output: undefined
// console.log(myLet); // Uncaught ReferenceError: Cannot access 'myLet' before initialization

function greet() {
  return "Hello, World!";
}

var myVar = "I am a var variable";
let myLet = "I am a let variable";
