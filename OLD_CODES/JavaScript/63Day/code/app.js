let arr = [1, 3, 2, 5, 4]; // Create an array with five elements

console.log(arr); // Output: [1, 3, 2, 5, 4]
console.log(arr.length); // Output: 5 (length of the array)

// Accessing elements using indices (indexes)
console.log(arr[0]); // Output: 1 (first element of the array)
console.log(arr[1]); // Output: 3 (second element)
console.log(arr[2]); // Output: 2 (third element)
console.log(arr[3]); // Output: 5 (fourth element)
console.log(arr[4]); // Output: 4 (fifth element)

// Accessing an index that doesn't exist
console.log(arr[5]); // Output: undefined (index 5 is out of range)

// Accessing elements from the end of the array using `arr.length`
console.log(arr[arr.length - 1]); // Output: 4 (last element)
console.log(arr[arr.length - 2]); // Output: 5 (second to last element)
console.log(arr[arr.length - 3]); // Output: 2 (third to last element)
console.log(arr[arr.length - 4]); // Output: 3 (fourth to last element)
console.log(arr[arr.length - 5]); // Output: 1 (fifth to last element)

// Accessing an element outside the range (negative index equivalent)
console.log(arr[arr.length - 6]); // Output: undefined (index is out of range)
