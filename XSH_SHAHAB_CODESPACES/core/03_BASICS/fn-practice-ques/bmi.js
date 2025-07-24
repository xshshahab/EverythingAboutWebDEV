// Write a BMI Calculator.

function bmi(weight, height) {
  return weight / (height * height);
}

let bmiVal = bmi(70, 1.6).toFixed(2);
console.log("BMI: ", bmiVal);
