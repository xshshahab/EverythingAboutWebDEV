let cont = document.querySelector(".container").outerHTML;
let cont1 = document.querySelector(".container").innerHTML;
let cont2 = document.querySelector(".container").innerText;
let cont3 = document.querySelector(".container").textContent;
let cont4 = document.querySelector(".container").outerText;
let cont5 = document.querySelector(".container").tagName;
let cont6 = document.querySelector(".container").nodeName;

console.log("Container [ outerHTML ]: ", cont);
console.log("Container [ innerHTML ] : ", cont1);
console.log("Container [ innerText ]: ", cont2);
console.log("Container [ textContent ] : ", cont3);
console.log("Container [ outerText ] : ", cont4);
console.log("Container [ tagName ] : ", cont5);
console.log("Container [ nodeName ] : ", cont6);

let box = document.querySelector(".box");
console.log(document.querySelector(".box").innerHTML);

console.log("BOX [ hasAttribute ]", box.hasAttribute("style"));
console.log("BOX [ getAttribute ]", box.getAttribute("style"));
