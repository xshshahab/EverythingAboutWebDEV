class AnyUser {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let u1 = new AnyUser("Mohan", 21);

// Parameters properties

class MyBottle {
  constructor(public brand: string) {}
}

let mb1 = new MyBottle("Milton");
