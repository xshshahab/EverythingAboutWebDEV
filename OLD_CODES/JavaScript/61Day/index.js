let a = prompt("Enter first number :");
let c = prompt("Enter operations :");
let b = prompt("Enter second number :");

let random = Math.random();

let obj = {
  "+": "-",
  "*": "+",
  "/": "*",
  "-": "/",
  "%": "**",
};

if (random > 0.1) {
  alert(`The results is : ${eval(`${a}${c}${b}`)}`);
} else {
  c = obj[c];
  alert(`The results is : ${eval(`${a}${c}${b}`)}`);
}
