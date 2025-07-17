# TypeScript Notes

## What is TypeScript?

TypeScript is a **strongly typed** programming language that builds on JavaScript by adding **static types**. It is developed and maintained by Microsoft.

## Key Features of TypeScript:

1. **Static Typing** – Helps catch errors during development instead of runtime.
2. **Object-Oriented Features** – Supports classes, interfaces, and inheritance.
3. **Optional Typing** – You can gradually introduce types to existing JavaScript code.
4. **Compilation to JavaScript** – TypeScript code is compiled to standard JavaScript for execution in browsers or Node.js.
5. **Improved Developer Experience** – Better autocompletion, refactoring, and debugging with tools like VS Code.

## Why Use TypeScript?

- **Fewer Bugs**: TypeScript catches errors before execution.
- **Better Readability & Maintainability**: Types serve as documentation.
- **Scalability**: Ideal for large applications with multiple developers.
- **Great Ecosystem**: Works with React, Angular, Node.js, and other JavaScript frameworks.

## Example:

```typescript
function greet(name: string): string {
  return "Hello, " + name;
}

console.log(greet("Alice"));
// console.log(greet(42)); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

---

### Installation & Setup

To install TypeScript globally, run:

```sh
npm install -g typescript
```

To compile a TypeScript file:

```sh
tsc filename.ts
```
