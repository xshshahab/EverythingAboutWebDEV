let h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
  h1.style.color = "Pink";
  h1.textContent = "I already Changed bro";
});

let p = document.querySelector("p");
p.addEventListener("dblclick", () => {
  p.style.color = "green";
  p.style.backgroundColor = "orange";
});
