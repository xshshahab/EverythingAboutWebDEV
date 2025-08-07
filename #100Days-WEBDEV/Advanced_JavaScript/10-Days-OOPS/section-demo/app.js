// Constructor Functions

function Pencil(name, price, companyName, color) {
  this.name = name;
  this.price = price;
  this.companyName = companyName;
  this.color = color;
  this.writeText = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = color;
    document.body.append(h1);
  };
}

let pencil1 = new Pencil("Natraj", 10, "natraj", "black");
pencil1.writeText("Hey, How are you");

let pencil2 = new Pencil("Doms", 10, "doms", "red");
pencil2.writeText("I'm good what about you?");
