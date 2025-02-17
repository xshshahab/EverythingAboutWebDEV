function optional(name: string, age: number, gender?: string): void {
  console.log(`Your name is ${name}. age : ${age} and ur gender is ${gender}`);
}

optional("Babu Rao", 21, "Male");
optional("Pritam Pyare", 12);
