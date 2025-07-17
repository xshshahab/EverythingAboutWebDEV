const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Combine arrays using spread
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Copy an array
const copiedArray = [...array1];
console.log(copiedArray); // Output: [1, 2, 3]
