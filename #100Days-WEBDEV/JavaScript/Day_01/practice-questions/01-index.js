// Create an array with 3 fruits and print the second fruit.

let fruit = ["guava", "banana", "pineapple"];
console.log(fruit[1]);

let arr = ["Apple", "Banana", "Mango"];

// Thinking for DSA
for (let i = 0; i < arr.length; i++) {
  let mid = Math.floor(arr.length / 2);
  if (i === mid) {
    console.log(arr[i]);
  }
}
