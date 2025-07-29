// Initialize an array with two elements
let colors = ["Brown", "Pink"];

// Use splice() to insert elements at a specific position
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// - start = 1 → insert at index 1 (right after "Brown")
// - deleteCount = 0 → don't remove anything
// - "Red", "Blue" → elements to insert at index 1
colors.splice(1, 0, "Red", "Blue");

// Final array: ["Brown", "Red", "Blue", "Pink"]
console.log("Colors: ", colors);
