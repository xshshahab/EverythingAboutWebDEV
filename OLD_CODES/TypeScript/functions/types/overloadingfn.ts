function greet(name: string): string;
function greet(age: number): string;
function greet(value: string | number): string {
  if (typeof value === "string") {
    return `Hello, ${value}!`;
  } else {
    return `You are ${value} years old.`;
  }
}

// Usage
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet(25)); // Output: You are 25 years old.
