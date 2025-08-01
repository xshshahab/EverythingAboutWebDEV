let p = document.querySelector("p");

p.addEventListener("click", () => {
  p.style.color = "red";
});

let input = document.querySelector("input");

input.addEventListener("input", (dets) => {
  if (dets.data !== null) {
    console.log("Data : ", dets.data);
  }
});

let select = document.querySelector("select");
let changedH3 = document.querySelector("#changedH3");

select.addEventListener("change", (dets) => {
  //   console.log("Details: ", dets.target.value);
  if (dets.target.value) {
    changedH3.textContent = "You selected this product " + dets.target.value;
  }
});
