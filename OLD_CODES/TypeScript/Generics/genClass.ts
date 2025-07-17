class Parent<T> {
  constructor(public key: T, public childName: string) {
    console.log(`Your key : ${key} and your son name is : ${childName}`);
  }
}

let c1 = new Parent<string>("djflka", "Choda1");
console.log(c1);

let c2 = new Parent(21, "Puttar");
console.log(c2);
