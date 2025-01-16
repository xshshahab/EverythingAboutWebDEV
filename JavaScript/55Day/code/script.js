// Number data type
var num = 42;
console.log("Value:", num, "| Type:", typeof num); // number

// String data type
var text = "Hello World";
console.log("Value:", text, "| Type:", typeof text); // string

// Boolean data type
var isTrue = true;
console.log("Value:", isTrue, "| Type:", typeof isTrue); // boolean

// Undefined data type
var notDefined;
console.log("Value:", notDefined, "| Type:", typeof notDefined); // undefined

// Null data type
var emptyValue = null;
console.log("Value:", emptyValue, "| Type:", typeof emptyValue); // object (special case)

// Object data type
var person = { name: "John", age: 30 };
console.log("Value:", person, "| Type:", typeof person); // object

// Array data type (Arrays are technically objects)
var colors = ["red", "green", "blue"];
console.log("Value:", colors, "| Type:", typeof colors); // object

// Function data type
function sayHello() {
  return "Hello";
}
console.log("Value:", sayHello, "| Type:", typeof sayHello); // function

// Symbol data type (ES6)
var uniqueId = Symbol("id");
console.log("Value:", uniqueId, "| Type:", typeof uniqueId); // symbol

// BigInt data type (ES2020)
var bigNumber = 9007199254740991n;
console.log("Value:", bigNumber, "| Type:", typeof bigNumber); // bigint
