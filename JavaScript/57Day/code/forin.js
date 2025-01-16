// Example 1: Using for...in with an object (printing properties and values)
let person = {
  name: "John",
  age: 30,
  country: "USA",
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Example 2: Using for...in with an array (printing indices and values)
let colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index + ": " + colors[index]);
}
