function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

let n = prompt("Enter a number: ");

// Convert the input to a number
n = parseInt(n, 10);

if (isNaN(n) || n < 0) {
  console.log("Please enter a valid non-negative integer.");
} else {
  console.log(`The factorial of ${n} is ${factorial(n)}`);
}
