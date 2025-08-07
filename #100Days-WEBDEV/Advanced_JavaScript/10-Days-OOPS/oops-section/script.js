class CreatePen {
  constructor(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.innerText = text;
    h1.style.color = this.color;

    document.body.append(h1);
  }

  erase() {
    document.body.querySelectorAll("h1").forEach((elem) => {
      if (elem.style.color === this.color) {
        elem.remove();
      }
    });
  }
}

let pen1 = new CreatePen("Doms", 10, "black", "doms");
let pen2 = new CreatePen("Natraj gray", 15, "gray", "natraj");
