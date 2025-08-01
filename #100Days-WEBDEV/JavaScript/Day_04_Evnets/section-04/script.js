let h1 = document.querySelector("h1");

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    h1.textContent = "Space";
  }
  h1.textContent = e.key;
});
