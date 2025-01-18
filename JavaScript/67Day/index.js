let firstElementChild = document.body.firstElementChild;
let firstElementChild_ChildNodes = document.body.firstElementChild.childNodes;
let firstElementChild_Children = document.body.firstElementChild.children;
let firstElementChild_Index0 = document.body.firstElementChild.children[0];
let firstElementChild_Index3_NextElemSibling =
  document.body.firstElementChild.children[3].nextElementSibling;

let firstElementChild_Index3_PrevElemSibling =
  document.body.firstElementChild.children[3].previousElementSibling;

console.log("First Element Child : ", firstElementChild);
console.log("First Element Child ChildNodes : ", firstElementChild_ChildNodes);
console.log("First Element Child Children : ", firstElementChild_Children);
console.log("First Element Child Index 0 : ", firstElementChild_Index0);
console.log(
  "First Element Child Index 3 Next Element Sibling : ",
  firstElementChild_Index3_NextElemSibling
);
console.log(
  "First Element Child Index 3 Previous Element Sibling : ",
  firstElementChild_Index3_PrevElemSibling
);
