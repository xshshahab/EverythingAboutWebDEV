const form = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const gender = document.getElementById("gender");
const about = document.getElementById("about");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Username validation
  if (username.value.trim().length < 3) {
    showError(username, true);
    isValid = false;
  } else {
    showError(username, false);
  }

  // Email validation
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(email.value.trim())) {
    showError(email, true);
    isValid = false;
  } else {
    showError(email, false);
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password.value.trim())) {
    showError(password, true);
    isValid = false;
  } else {
    showError(password, false);
  }

  // Gender validation
  if (gender.value === "") {
    showError(gender, true);
    isValid = false;
  } else {
    showError(gender, false);
  }

  // About validation
  if (about.value.trim() === "") {
    showError(about, true);
    isValid = false;
  } else {
    showError(about, false);
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
    document
      .querySelectorAll("small")
      .forEach((el) => (el.style.display = "none"));
  }
});

function showError(input, show) {
  const small = input.parentElement.querySelector("small");
  small.style.display = show ? "block" : "none";
}
