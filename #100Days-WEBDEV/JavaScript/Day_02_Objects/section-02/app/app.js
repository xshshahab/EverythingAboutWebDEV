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
  password: function () {
    // Just simulate a password for now
    const rawPassword = "1a23vb4d56"; // Replace with your actual logic if needed
    return "xsh-" + rawPassword; // Add "xsh" prefix
  },
};

// Logging values
console.log(regularUser.usersFullName.fullName.firstName); // Direct access
console.log(regularUser.usersFullName?.fullName?.firstName); // Optional chaining

console.log(regularUser.email.mail); // Direct access
console.log(regularUser.email?.mail); // Optional chaining

console.log(regularUser.email.active); // Direct access
console.log(regularUser.email?.active); // Optional chaining

console.log(regularUser.email.superAdmin); // Direct access
console.log(regularUser.email?.superAdmin); // Optional chaining

console.log(regularUser.password()); // Hashed password (with xsh prefix)
console.log(regularUser.password?.()); // Optional chaining with method
