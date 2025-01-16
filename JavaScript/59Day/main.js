// Function to perform the faulty calculator operation
function faultyCalculator() {
  // Get input from the user for two numbers
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));

  // Get the operation from the user
  let operation = prompt("Enter the operation (+, -, *, /):");

  // Perform the faulty operation based on the entered operator
  let result;

  switch (operation) {
    case "+":
      result = num1 - num2; // Faulty: '+' should perform subtraction
      break;
    case "-":
      result = num1 * num2; // Faulty: '-' should perform multiplication
      break;
    case "*":
      result = num1 / num2; // Faulty: '*' should perform division
      break;
    case "/":
      result = num1 + num2; // Faulty: '/' should perform addition
      break;
    default:
      alert("Invalid operation! Please enter one of +, -, *, /.");
      return; // Exit the function if invalid operation is entered
  }

  // Display the result to the user
  alert(`The result of ${num1} ${operation} ${num2} is: ${result}`);
}

// Call the function to run the faulty calculator
faultyCalculator();
