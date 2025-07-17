class UserHu {
  constructor(
    public name: string,
    public age: number,
    public gender?: string
  ) {}
}

let bhai1 = new UserHu("Sudhir", 21, "male");
let bhai2 = new UserHu("Mukesh", 41);
