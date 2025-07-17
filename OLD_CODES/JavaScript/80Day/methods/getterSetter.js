class Product {
  constructor(name, price, stock) {
    this._name = name;
    this._price = price;
    this._stock = stock;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (newName && typeof newName === "string") {
      this._name = newName;
    } else {
      console.error("Invalid product name");
    }
  }

  // Getter for price
  get price() {
    return this._price;
  }

  // Setter for price
  set price(newPrice) {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      console.error("Price must be greater than 0");
    }
  }

  // Getter for stock
  get stock() {
    return this._stock;
  }

  // Setter for stock
  set stock(newStock) {
    if (Number.isInteger(newStock) && newStock >= 0) {
      this._stock = newStock;
    } else {
      console.error("Stock must be a non-negative integer");
    }
  }

  // A method to check if the product is in stock
  isAvailable() {
    return this._stock > 0;
  }
}

// Example usage
const product = new Product("Laptop", 1200, 10);

console.log(product.name); // Laptop
console.log(product.price); // 1200
console.log(product.stock); // 10
console.log(product.isAvailable()); // true

// Updating values
product.price = 1300; // Valid
product.stock = 5; // Valid
product.name = ""; // Invalid product name

console.log(product.name); // Laptop (unchanged due to validation)
console.log(product.price); // 1300
console.log(product.stock); // 5

// Invalid updates
product.price = -500; // Error: Price must be greater than 0
product.stock = -10; // Error: Stock must be a non-negative integer
