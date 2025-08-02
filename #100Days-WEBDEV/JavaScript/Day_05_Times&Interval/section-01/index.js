let timing = 1000;

setTimeout(() => {
  console.log("Hello World");
}, timing);

setInterval(() => {
  console.log("Again and Again Running JS");
}, timing);

let tmT = setTimeout(() => {
  console.log("Learn!");
}, timing);

clearTimeout(tmT);

let tmI = setInterval(() => {
  console.log("Learn!");
}, timing);

clearTimeout(tmI);
