class ABDD {
  name = "Prakash";

  someStuff() {
    console.log("I'm, Some Stuff");
  }

  getDetails() {
    this.name = "Main hoon na";
    this.someStuff();
  }
}

class BottleBanao {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let b1 = new BottleBanao("Milton");

class BhaiAssanBottle {
  // without using this keyword
  // setting value on name varibale
  constructor(public name: string) {}
}

let ab1 = new BhaiAssanBottle("Cello");
