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
  password: function () {
    const rawPassword = "123456"; // Simulated input password

    // Basic hash logic
    let hash = 0;
    for (let i = 0; i < rawPassword.length; i++) {
      hash = (hash << 5) - hash + rawPassword.charCodeAt(i);
      hash |= 0;
    }

    // Convert hash to hex
    const hexPart = Math.abs(hash).toString(16);

    // Generate random characters
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";
    const getRandom = (str, length) =>
      Array.from(
        { length },
        () => str[Math.floor(Math.random() * str.length)]
      ).join("");

    const randomChars = getRandom(chars, 4);
    const randomSymbols = getRandom(symbols, 2);

    // Combine everything
    return `xsh - ${randomChars}${hexPart}${randomSymbols}`;
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

console.log(regularUser.password()); // Hashed password (e.g., "xsh1a2b3c")
console.log(regularUser.password?.()); // Optional chaining with method
