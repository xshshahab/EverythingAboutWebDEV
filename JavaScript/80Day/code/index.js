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
  constructor(name) {
    super(name);

    console.log("Object is created, and he is a lion ");
  }

  eats() {
    super.eats();
    console.log("Hey, Now I'm still eating...");
  }
}

let animal = new Animal("Bunny");
console.log(animal);

let lion = new Lion("Shera");
console.log(lion);
