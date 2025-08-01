let p = document.querySelector("p");

const dblclickFn = () => {
  p.style.color = "green";
  p.style.backgroundColor = "orange";
};

p.addEventListener("dblclick", dblclickFn);
p.removeEventListener("dblclick", dblclickFn);
