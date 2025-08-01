let main = document.querySelector("#main");

window.addEventListener("mousemove", function (dets) {
  main.style.top = dets.clientX + "px";
  main.style.left = dets.clientY + "px";
});
