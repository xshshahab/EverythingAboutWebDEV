const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Developer", country: "USA" };

// Combine objects using spread
const combinedObject = { ...obj1, ...obj2 };

console.log(combinedObject);
// Output: { name: 'Alice', age: 25, job: 'Developer', country: 'USA' }

// Copy an object
const copiedObject = { ...obj1 };
console.log(copiedObject);
// Output: { name: 'Alice', age: 25 }
