// Declare an array with 5 elements
let arr = [10, 20, 30, 40, 50];

// Destructure the first two elements of the array into variables a and b
let [a, b] = arr; // a = 10, b = 20
console.log(a, b); // Output: 10 20

// Destructure specific elements of the array:
// a1 gets the 1st element (10)
// b1 gets the 2nd element (20)
// The two commas skip the 3rd (30) and 4th (40) elements
// lastone gets the 5th element (50)
let [a1, b1, , , lastone] = arr;
console.log(a1, b1, lastone); // Output: 10 20 50
