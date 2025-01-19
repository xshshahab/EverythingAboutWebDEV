console.log("Events In JavaScirpt.");

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  document.querySelector(".box").innerHTML = "Hey, I am Syphar";
});
