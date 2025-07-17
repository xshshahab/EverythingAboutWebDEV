// script.js

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Select all the elements with the class 'box'
const boxes = document.querySelectorAll(".box");

// Loop through each box and assign random colors
boxes.forEach((box) => {
  // Generate random text and background colors
  const randomTextColor = getRandomColor();
  const randomBackgroundColor = getRandomColor();

  // Apply the styles to the box
  box.style.color = randomTextColor;
  box.style.backgroundColor = randomBackgroundColor;

  // Set some dimensions for visibility
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.display = "inline-block";
  box.style.margin = "10px";

  // Add some text for demonstration
  box.textContent = "Box";
});
