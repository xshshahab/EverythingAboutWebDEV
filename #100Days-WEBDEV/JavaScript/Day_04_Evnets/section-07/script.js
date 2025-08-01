let ul = document.querySelector("ul");

ul.addEventListener("click", function (dets) {
  dets.target.classList.toggle("lt");
});
