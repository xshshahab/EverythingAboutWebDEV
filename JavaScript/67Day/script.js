console.log(document.body.childNodes); // Output : NodeList(4) [text, div.container, text, script]

console.log(document.body.childNodes[0]); // output : "#text"
console.log(document.body.childNodes[1]); // output : div.container

console.log(document.body.childNodes[1].childNodes); // Output : NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

let cont = document.body.childNodes[1];

cont.style.display = "flex";
cont.style.backgroundColor = "#212121";
cont.style.justifyContent = "center";

console.log(cont.firstChild); // output : "#text"
console.log(cont.lastChild); // output : "#text"

console.log(cont.firstElementChild); // output : div.box
console.log(cont.lastElementChild); // output : div.box

console.log(cont.lastElementChild.parentElement); // output : div.container

cont.firstElementChild.style.backgroundColor = "yellow";
cont.firstElementChild.style.color = "#222";

cont.lastElementChild.style.backgroundColor = "purple";
cont.lastElementChild.style.color = "white";
