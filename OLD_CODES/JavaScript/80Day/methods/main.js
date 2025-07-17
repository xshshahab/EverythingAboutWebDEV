class User {
  constructor(name) {
    this._name = null; // Internal backing property
    this.name = name; // Use the setter to validate and set the value
  }

  get name() {
    return this._name; // Access the backing property
  }

  set name(value) {
    if (value.length < 4) {
      throw new Error("Name must be at least 4 characters long");
    }
    this._name = value; // Set the backing property
  }
}

let user = new User("Mohan");

console.log(user.name); // Output: Mohan
