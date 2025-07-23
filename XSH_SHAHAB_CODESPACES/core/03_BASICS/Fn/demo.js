// callWithCallback ek function hai jo kisi bhi function ko argument ke taur par accept karta hai
// aur usay turant call karta hai.
function callWithCallback(callbackFunction) {
  // Yeh line diya gaya function call kar rahi hai
  callbackFunction();
}

// callWithCallback function ko ek anonymous function diya ja raha hai
// jo console par ek message print karega
callWithCallback(function () {
  console.log("I'm calling the function inside the function");
});
