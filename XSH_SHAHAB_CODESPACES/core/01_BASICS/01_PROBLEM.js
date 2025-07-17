
const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = days[date.getDay()];
console.log("Today is : " + day + ".");

let hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12;
hours = hours ? hours : 12; 

console.log("Current time is : " + hours + " " + ampm + " : " + minutes + " : " + seconds);
