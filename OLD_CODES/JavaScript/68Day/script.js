console.log("---------- DOM in JS -------------");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "yellow";
boxes[2].style.color = "#222";

document.getElementById("pink-box").style.backgroundColor = "green";
