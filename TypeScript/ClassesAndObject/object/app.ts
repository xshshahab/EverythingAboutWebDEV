class User {
  constructor(public readonly name: string) {}

  changeName() {
    // this.name = "Mohan Hu"; // Cannot assign to name because it's readonly property.
  }
}

// object
let u1 = new User("Mohan");
