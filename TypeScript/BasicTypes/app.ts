// ==================== Primitive Data Types ====================

// 1. Number: Represents both integers and floating point numbers
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xff; // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal

// 2. String: Represents textual data
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`; // Template String

// 3. Boolean: Represents true/false values
let isStudent: boolean = true;
let hasGraduated: boolean = false;

// 4. Null: Represents an explicitly empty value
let emptyValue: null = null;

// 5. Undefined: Represents an uninitialized variable
let notAssigned: undefined = undefined;

// 6. Symbol: Represents unique identifiers (used in objects)
let uniqueKey: symbol = Symbol("id");

// 7. BigInt: Used for very large integers (ES2020+)
let bigNumber: bigint = 9007199254740991n; // Use 'n' at the end for BigInt

// ==================== Reference (Non-Primitive) Data Types ====================

// 8. Array: A collection of elements of the same type
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Alternative syntax for arrays
let mixedArray: Array<number | string> = [1, "two", 3, "four"];

// 9. Tuple: Fixed-length array with different types at specific positions
let person: [string, number] = ["Alice", 25]; // Tuple with a string and number

// 10. Object: Collection of key-value pairs
let user: { name: string; age: number; isActive: boolean } = {
  name: "John Doe",
  age: 30,
  isActive: true,
};

// 11. Enum: Represents a set of named constants
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
let favoriteColor: Colors = Colors.Green;

// 12. Any: Can hold any type of value (not recommended)
let randomValue: any = "Hello";
randomValue = 42; // Valid

// 13. Unknown: Similar to `any` but requires type checking before use
let uncertainValue: unknown = "Could be anything";
if (typeof uncertainValue === "string") {
  console.log(uncertainValue.toUpperCase()); // Safe to use as string
}

// 14. Void: Used for functions that do not return anything
function logMessage(message: string): void {
  console.log("Log:", message);
}

// 15. Never: Represents values that never occur (e.g., function that throws an error)
function throwError(errorMsg: string): never {
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
