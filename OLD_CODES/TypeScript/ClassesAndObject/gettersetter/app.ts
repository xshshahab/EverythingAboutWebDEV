class User {
  constructor(private name: string, private age: number) {}

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }
}

let u1 = new User("Subhan", 21);
