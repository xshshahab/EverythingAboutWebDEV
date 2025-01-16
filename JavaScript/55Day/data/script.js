console.log("---------------- Data Types in JavaScript ----------------");

// Example of different data types in JavaScript

// String
let name = "John Doe";
console.log("String:");
console.log(name, "->", typeof name);

// Number
let age = 25;
console.log("\nNumber:");
console.log(age, "->", typeof age);

// Boolean
let isStudent = true;
console.log("\nBoolean:");
console.log(isStudent, "->", typeof isStudent);

// Undefined
let undefinedVariable;
console.log("\nUndefined:");
console.log(undefinedVariable, "->", typeof undefinedVariable);

// Null (special case, typeof returns "object")
let emptyValue = null;
console.log("\nNull:");
console.log(emptyValue, "->", typeof emptyValue);

// Object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
console.log("\nObject:");
console.log(person, "->", typeof person);

// Array (Arrays are also objects in JavaScript)
let colors = ["Red", "Green", "Blue"];
console.log("\nArray:");
console.log(colors, "->", typeof colors);

// Function
function greet() {
  console.log("Hello, World!");
}
console.log("\nFunction:");
console.log(greet, "->", typeof greet);

// Symbol
let uniqueID = Symbol("id");
console.log("\nSymbol:");
console.log(uniqueID, "->", typeof uniqueID);

// BigInt
let largeNumber = 1234567890123456789012345678901234567890n;
console.log("\nBigInt:");
console.log(largeNumber, "->", typeof largeNumber);

console.log("----------------------------------------------------------");

/**
---------------- Data Types in JavaScript ----------------
String:
John Doe -> string

Number:
25 -> number

Boolean:
true -> boolean

Undefined:
undefined -> undefined

Null:
null -> object

Object:
{ firstName: 'John', lastName: 'Doe', age: 25 } -> object

Array:
[ 'Red', 'Green', 'Blue' ] -> object

Function:
[Function: greet] -> function

Symbol:
Symbol(id) -> symbol

BigInt:
1234567890123456789012345678901234567890n -> bigint
----------------------------------------------------------
*/
