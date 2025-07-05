let loggedin = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";

console.log("Access " + access);

