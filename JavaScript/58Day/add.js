// Function 'add' that takes two parameters (a and b)
// It logs the sum of a and b to the console
function add(a, b) {
  console.log("Sum is : ", a + b); // This line prints the sum of a and b
}

// Calling the 'add' function with arguments 10 and 5
add(10, 5); // Output: Sum is :  15

// Function 'sum' that takes two parameters (a and b)
// b has a default value of 12. This means if b is not passed when calling the function, it will use 12 as its value.
function sum(a, b = 12) {
  console.log("Sum is : ", a + b); // This line prints the sum of a and b
}

// Calling the 'sum' function with only one argument (10)
// Since b is not provided, it will use the default value of 12
sum(10); // Output: Sum is :  22
