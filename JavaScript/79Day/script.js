let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let sum = parseInt(a) + parseInt(b);

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry, you should enter numbers only.");
}

console.log("The sum is : ", sum);

try {
  console.log("The sum is : ", sum * x);
} catch (error) {
  console.log("ERROR!!", error);
}
