function CreateBiscuits() {
  this.price = 10;
  this.name = "Parle G";
  (this.companyName = "parle"),
    (this.quantity = 10),
    (this.category = "regular");
}

let biscuits = new CreateBiscuits();
console.log(biscuits);
