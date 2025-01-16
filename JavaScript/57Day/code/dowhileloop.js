// Example of a basic do...while loop (counting from 0 to 4)
let i = 0;
do {
  console.log("Iteration:", i);
  i++;
} while (i < 5);

// Example of a reverse do...while loop (counting from 10 to 1)
let j = 10;
do {
  console.log("Reverse Iteration:", j);
  j--;
} while (j >= 1);

// Example of a do...while loop with an array (printing array values)
let fruits = ["Apple", "Banana", "Orange", "Mango"];
let index = 0;
do {
  console.log("Fruit:", fruits[index]);
  index++;
} while (index < fruits.length);
