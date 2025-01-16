// Declare a variable 'a' with block scope using `let` and initialize it with 10.
let a = 10;

// Declare a variable 'b' with function or global scope using `var` and initialize it with 5.
var b = 5;

{
  // This block creates a new scope.
  // Declare a new variable 'a' with block scope using `let` and initialize it with 20.
  let a = 20;
  console.log(a); // Logs 20, because this is the 'a' specific to this block scope.
}

console.log(a); // Logs 10, because the 'a' outside the block is unaffected by the block-scoped 'a'.

{
  // This block doesn't create a new scope for 'b' because `var` variables are function or global-scoped.
  // Redeclare 'b' (effectively overwriting it) and assign it the value 110.
  var b = 110;
  console.log(b); // Logs 110, because 'b' has been updated globally or in the current function scope.
}

console.log(b); // Logs 110, because 'b' was modified globally in the previous block.
