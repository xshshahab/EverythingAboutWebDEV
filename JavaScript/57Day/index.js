// 1. Example : for loop

let number = 10;
for (let i = 0; i <= number; i++) {
  console.log(i);
}

// 2. Example : for of and for in
let obj = {
  id: "1e22fe",
  name: "Syphar",
  age: 20,
  city: "Bangalore",
  country: "India",
};

for (const key in obj) {
  console.log(key);
}

for (const char of "CodeWithSyphar") {
  console.log(char);
}
