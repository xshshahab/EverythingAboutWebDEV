function CreateBiscuits(name, price, companyName, quantity, category) {
  this.name = name;
  this.price = price;
  this.companyName = companyName;
  this.quantity = quantity;
  this.category = category;
}

let biscuits1 = new CreateBiscuits(
  "Parle G",
  5,
  "Parle PVT LTD",
  10,
  "regular"
);
let biscuits2 = new CreateBiscuits(
  "Happy Happy",
  10,
  "Britania PVT LTD",
  20,
  "Chocolate"
);
console.log(biscuits1);
console.log(biscuits2);
