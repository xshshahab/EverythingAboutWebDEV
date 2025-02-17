function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // Addition for numbers
  } else if (typeof a === "string" && typeof b === "string") {
    return a + " " + b; // Concatenation for strings
  } else {
    throw new Error("Invalid arguments"); // Handle unexpected cases
  }
}

// Usage
console.log(add(5, 10)); // Output: 15
console.log(add("Hello", "TS")); // Output: "Hello TS"
