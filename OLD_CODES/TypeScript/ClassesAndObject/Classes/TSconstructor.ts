class BottleMaker {
  // constructor(name: string, price: number) {} // It's declare but never used
  constructor(public name: string, public price: number) {} // It's used by providing public
}

let b1 = new BottleMaker("Milton", 1200);
let b2 = new BottleMaker("ClnWater", 122);
