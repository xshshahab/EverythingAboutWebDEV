// with hashed password

const regularUser = {
  usersFullName: {
    fullName: {
      firstName: "Mohammad",
      lastName: "Shahabuddin",
    },
  },
  email: {
    mail: "mohammadshahabuddin@xdev.com",
    active: true,
    superAdmin: true,
  },
};

// Console logs using optional chaining
console.log(regularUser.usersFullName.fullName.firstName); // Direct access
console.log(regularUser.usersFullName?.fullName?.firstName); // Optional chaining

console.log(regularUser.email.mail); // Direct access
console.log(regularUser.email?.mail); // Optional chaining

console.log(regularUser.email.active); // Direct access
console.log(regularUser.email?.active); // Optional chaining

console.log(regularUser.email.superAdmin); // Direct access
console.log(regularUser.email?.superAdmin); // Optional chaining
