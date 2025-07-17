class Animal {
  constructor() {
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

let animal = new Animal();
console.log(animal);
