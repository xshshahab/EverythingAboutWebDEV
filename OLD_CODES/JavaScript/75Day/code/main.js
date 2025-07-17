console.log("Syphar is hacker");
console.log("Roger is a hecker");

setTimeout(() => {
  console.log("I am inside the timeout my duration [2s]");
}, 2000);

console.log("Running...");

setTimeout(() => {
  console.log("I am inside the timeout my duration [0s]");
}, 0);

setTimeout(() => {
  console.log("I am inside the timeout 2 my duration [0s]");
}, 0);

console.log("End of this game...!!");
