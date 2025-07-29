// Understanding the array

let arr = [10, 20, 30, 40, 50];

console.log(arr[0]); // 10

// Loops on an array

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // This prints the value at each index
}

// for of loop
for (let value of arr) {
  console.log(value);
}
