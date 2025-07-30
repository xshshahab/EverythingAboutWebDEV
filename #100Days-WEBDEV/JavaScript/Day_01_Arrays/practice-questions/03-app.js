// Replace the "Banana" with "Kiwi" in the above array.

let fruitArray = ["Apple", "Mango", "Banana"];

fruitArray.pop();
fruitArray.push("Kiwi");

console.log("1st Approach : ", fruitArray);

let fruitArray2 = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruitArray2.length; i++) {
  if (fruitArray2[i] === "Banana") {
    fruitArray2[i] = "Kiwi";
  }
}

console.log("2nd Approach", fruitArray2);

// DSA Appraoch
let fruitArray3 = ["Apple", "Mango", "Banana"];
fruitArray3 = fruitArray3.map((fruit) => (fruit === "Banana" ? "Kiwi" : fruit));

console.log("3rd Approach (Using map):", fruitArray3);
