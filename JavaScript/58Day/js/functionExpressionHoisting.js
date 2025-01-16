// functionExpressionHoisting.js
sayHi(); // Error: sayHi is not a function

const sayHi = function () {
  console.log("Hi!");
};
