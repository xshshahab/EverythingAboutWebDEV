class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created...");
  }

  eats() {
    console.log("Hey, I am eating");
  }

  jumps() {
    console.log("I am jumping");
  }

  sleeps() {
    console.log("I am sleeping");
  }
}

class Lion extends Animal {
  constructor() {}
}

let animal = new Animal("Bunny");
console.log(animal);

let lion = new Lion("Shera");
console.log(lion);
