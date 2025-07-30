const mySym = Symbol("X$ymbOl");

const User = {
  fullName: "Xsh Shahab",
  [mySym]: "myKey1",
  github: "xshshahab",
};

// access the symbol
console.log(User[mySym]);
console.log(typeof User[mySym]);

const mySym2 = Symbol("X$ymbOl");

const User2 = {
  fullName: "Xsh Shahab",
  github: "xshshahab",
  mySymbolValue: mySym, // store symbol as value
  [mySym]: "myKey1", // store a string under a symbol key
};

// Access the symbol stored as value
console.log(User.mySymbolValue); // Symbol(X$ymbOl)
console.log(typeof User.mySymbolValue); // "symbol"

// Access string stored using symbol as key
console.log(User[mySym]); // "myKey1"
