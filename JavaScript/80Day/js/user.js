class User {
  constructor(name, email, password) {
    this._name = name; // Use private variables with underscore
    this._email = email;
    this._password = password;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (newName && typeof newName === "string") {
      this._name = newName;
    } else {
      console.error("Invalid name");
    }
  }

  // Getter for email
  get email() {
    return this._email;
  }

  // Setter for email
  set email(newEmail) {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(newEmail)) {
      this._email = newEmail;
    } else {
      console.error("Invalid email");
    }
  }

  // Getter for password
  get password() {
    return "******"; // Masked for security reasons
  }

  // Setter for password
  set password(newPassword) {
    if (newPassword.length >= 6) {
      this._password = newPassword;
    } else {
      console.error("Password must be at least 6 characters long");
    }
  }
}

// Example usage
const user = new User("John Doe", "john@example.com", "password123");

console.log(user.name); // John Doe
console.log(user.email); // john@example.com
console.log(user.password); // ******

user.name = "Jane Doe";
user.email = "jane@example.com";
user.password = "newpass456";

console.log(user.name); // Jane Doe
console.log(user.email); // jane@example.com
console.log(user.password); // ******
