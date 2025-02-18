function abcd<T>(a: T, b: T): T {
  console.log(`A : ${a} || B : ${b}`);
  return "Sikho, ye string literal hai " as T;
}

abcd<string>("Hmm", "Haa");
