const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "date"];

// Add new elements using spread
const allFruits = [...fruits, "grape", ...moreFruits];

console.log(allFruits); // Output: ["apple", "banana", "grape", "cherry", "date"]
