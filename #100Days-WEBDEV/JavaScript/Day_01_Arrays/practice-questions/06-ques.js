// Extract only the middle 3 elements from this array

let items = [1, 2, 3, 4, 5, 6];
const newArr = items.slice(1, 4);
console.log(newArr);

// Keep only elements whose index is between 1 and 3 (inclusive of 1, exclusive of 4)
const newArr2 = items.filter((_, index) => index >= 1 && index < 4);

console.log(newArr2); // [2, 3, 4]
