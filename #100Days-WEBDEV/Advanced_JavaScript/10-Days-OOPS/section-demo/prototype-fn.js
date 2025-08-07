function SellSomething(name, price, brand) {
  this.name = name;
  this.price = price;
  this.brand = brand;
}

SellSomething.prototype.company = "Syphar LLP";

let sellSome1 = new SellSomething("Test Boll", 250, "cricket");
console.log(sellSome1);
console.log(sellSome1.company);

let sellSome2 = new SellSomething("Cricket Bad", 250, "cricket");
console.log(sellSome2);
console.log(sellSome2.company);
