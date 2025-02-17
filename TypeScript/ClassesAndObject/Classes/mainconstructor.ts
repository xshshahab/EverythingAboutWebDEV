class HumanMaker {
  age: number = 0;
  constructor(
    public name: string,
    public isHandsome: boolean,
    public gender: string
  ) {}
}

let h1 = new HumanMaker("Shahab", true, "Male");
