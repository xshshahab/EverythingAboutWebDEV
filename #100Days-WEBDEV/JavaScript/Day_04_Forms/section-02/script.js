const form = document.getElementById("loginForm");
const errorBox = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let errors = [];

  if (!emailRegex.test(email)) {
    errors.push("Invalid email format.");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  if (errors.length > 0) {
    errorBox.innerHTML = errors.join("<br>");
    errorBox.style.display = "block";
  } else {
    errorBox.style.display = "none";
    alert("Validation passed!");
  }
});
