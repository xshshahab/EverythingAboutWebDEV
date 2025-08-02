localStorage.setItem("username", "xsh_shahab");

let username = localStorage.getItem("username");
console.log("Your username : ", username);

localStorage.removeItem("username");

// with the help of setItem we update the data not update means override
localStorage.setItem("username", "xshshahab");
