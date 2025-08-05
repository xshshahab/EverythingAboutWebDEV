// Scope - functional scope | global scope | block scope

// Functional scope => use inside the function not accessing possible outside
// global scope => it's used in entire code
// block scope => {} used in only curly braces

function scope() {
  var a = 10;
}

var b = 20;

{
  var c = 30;
}

if (true) {
  var d = 40;
}
