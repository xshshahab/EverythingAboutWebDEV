function learnGen<T>(arg: T) {
  if (typeof arg === "string") {
    console.log("String Arguments founded :", arg);
  } else if (typeof arg === "number") {
    console.log("Number Arguments founded :", arg);
  } else {
    console.log("Another Arguments founded : ", arg);
  }
}

learnGen<string>("Ramesh");
learnGen<number>(21);
learnGen<boolean>(true);
