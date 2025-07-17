let first, second, third;
let random = Math.random();

if (random < 0.33) {
  first = "Crazy";
} else if (random < 0.66 && random > 0.33) {
  first = "Awesome";
} else {
  first = "Fire";
}

if (random < 0.33) {
  second = "Engine";
} else if (random < 0.66 && random > 0.33) {
  second = "Foods";
} else {
  second = "Market";
}

if (random < 0.33) {
  third = "Limited";
} else if (random < 0.66 && random > 0.33) {
  third = "Bros";
} else {
  third = "Hub";
}

console.log(first + " " + second + " " + third);
