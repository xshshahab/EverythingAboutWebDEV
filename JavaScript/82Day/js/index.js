function sum(a, b, c) {
  return a + b + c;
}

const numbers = [4, 5, 6];
const result = sum(...numbers);

console.log(result); // Output: 15
