// Example 1: Using for...of with an array (printing values)
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color); // Prints each value in the array
}

// Example 2: Using for...of with a string (printing characters)
let message = "Hello, World!";
for (let char of message) {
  console.log(char); // Prints each character of the string
}

// Example 3: Using for...of with an array of objects (printing property values)
let people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mark", age: 35 },
];
for (let person of people) {
  console.log(person.name + " is " + person.age + " years old."); // Prints each person's info
}
