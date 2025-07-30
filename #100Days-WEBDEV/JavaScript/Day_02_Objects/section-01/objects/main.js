const User = {
  name: "XshShahab",
  email: "xshsahahab@example.com",
};

User.email = "xsh_shahab@example.me";

User.greetings = function () {
  console.log("Hello Developers!");
};

User.greetingWithName = function () {
  console.log(`Hello, ${this.name} Developer.`);
};

console.log(User.greetings());
console.log(User.greetingWithName());
