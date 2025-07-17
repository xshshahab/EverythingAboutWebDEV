// Here, we define an object `animal` with a property `eats` set to true.
// This object will later act as a prototype for another object.

let animal = {
  eats: true,
};

// Next, we define another object `rabbit` with a property `jumps` set to true.
// This object is currently independent and has no relationship with `animal`.
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

console.log(rabbit.eats); // Output: true (inherited from animal)
console.log(rabbit.jumps); // Output: true (direct property of rabbit)

/*
  # Explanation:
  
  1. The `__proto__` property is used to set the prototype of an object.
     In this line, the prototype of `rabbit` is set to `animal`.
  
  2. This means that `rabbit` will inherit all properties and methods from `animal`.
  
  3. After this assignment, when you try to access a property on `rabbit`:
     - JavaScript will first check if the property exists directly on the `rabbit` object.
     - If the property is not found on `rabbit`, it will look for the property in `rabbit`'s prototype (`animal` in this case).
  
  4. Example:
     - `rabbit.eats` will return `true`, even though `eats` is not directly defined on the `rabbit` object.
     - This happens because `eats` is inherited from the `animal` object.
  
  5. Note: Using `__proto__` is considered outdated and not recommended in modern JavaScript.
     Instead, you can use `Object.create()` or `Object.setPrototypeOf()` for setting prototypes.
  */
