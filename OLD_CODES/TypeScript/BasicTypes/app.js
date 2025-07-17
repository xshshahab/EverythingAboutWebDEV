// ==================== Primitive Data Types ====================
// 1. Number: Represents both integers and floating point numbers
var age = 25;
var price = 99.99;
var hex = 0xff; // Hexadecimal
var binary = 10; // Binary
var octal = 484; // Octal
// 2. String: Represents textual data
var firstName = "John";
var lastName = "Doe";
var fullName = "".concat(firstName, " ").concat(lastName); // Template String
// 3. Boolean: Represents true/false values
var isStudent = true;
var hasGraduated = false;
// 4. Null: Represents an explicitly empty value
var emptyValue = null;
// 5. Undefined: Represents an uninitialized variable
var notAssigned = undefined;
// 6. Symbol: Represents unique identifiers (used in objects)
var uniqueKey = Symbol("id");
// 7. BigInt: Used for very large integers (ES2020+)
var bigNumber = 9007199254740991n; // Use 'n' at the end for BigInt
// ==================== Reference (Non-Primitive) Data Types ====================
// 8. Array: A collection of elements of the same type
var numbers = [1, 2, 3, 4, 5];
var names = ["Alice", "Bob", "Charlie"];
// Alternative syntax for arrays
var mixedArray = [1, "two", 3, "four"];
// 9. Tuple: Fixed-length array with different types at specific positions
var person = ["Alice", 25]; // Tuple with a string and number
// 10. Object: Collection of key-value pairs
var user = {
    name: "John Doe",
    age: 30,
    isActive: true,
};
// 11. Enum: Represents a set of named constants
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
var favoriteColor = Colors.Green;
// 12. Any: Can hold any type of value (not recommended)
var randomValue = "Hello";
randomValue = 42; // Valid
// 13. Unknown: Similar to `any` but requires type checking before use
var uncertainValue = "Could be anything";
if (typeof uncertainValue === "string") {
    console.log(uncertainValue.toUpperCase()); // Safe to use as string
}
// 14. Void: Used for functions that do not return anything
function logMessage(message) {
    console.log("Log:", message);
}
// 15. Never: Represents values that never occur (e.g., function that throws an error)
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// ==================== Logging All Data Types ====================
console.log("Number:", age, price, hex, binary, octal);
console.log("String:", fullName);
console.log("Boolean:", isStudent, hasGraduated);
console.log("Null:", emptyValue);
console.log("Undefined:", notAssigned);
console.log("Symbol:", uniqueKey);
console.log("BigInt:", bigNumber);
console.log("Array:", numbers, names);
console.log("Tuple:", person);
console.log("Object:", user);
console.log("Enum:", favoriteColor);
console.log("Any:", randomValue);
console.log("Unknown:", uncertainValue);
logMessage("This is a TypeScript example!");
