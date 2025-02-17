class BottleMaker {
  public botlhal: string = "halue ka bottle";
  constructor(private name: string) {}
}

class BnaoBottle extends BottleMaker {
  constructor(name: string) {
    super(name);
  }

  getBottleName() {
    console.log(this.botlhal);
    // console.warn(this.name); // It is only accessible within class BottleMaker
  }
}

let b1 = new BnaoBottle("Milton ka hu");
