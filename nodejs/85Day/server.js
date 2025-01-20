var slugify = require("slugify");

let slugA = slugify("some string"); // some-string
console.log(slugA);

// if you prefer something other than '-' as separator
let slugB = slugify("some string", "_"); // some_string
console.log(slugB);

let slugC = slugify("some string try another one", "%");
console.log(slugC);
