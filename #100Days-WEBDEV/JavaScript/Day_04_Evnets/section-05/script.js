let main = document.querySelector("#main");

main.addEventListener("mouseover", function () {
  main.style.backgroundColor = "green";
});

main.addEventListener("mouseout", function () {
  main.style.backgroundColor = "red";
});
