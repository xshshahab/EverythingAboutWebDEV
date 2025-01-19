function main() {
  try {
    let num1 = prompt("Enter the first number:");

    let num2 = prompt("Enter the second number:");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Invalid input! Please enter valid numbers.");
    }

    let result = num1 + num2;
    console.log(`The result of adding ${num1} and ${num2} is: ${result}`);
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    console.log("Execution complete. Thanks for using the calculator!");
  }
}

main();
