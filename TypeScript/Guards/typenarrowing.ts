function abb(arg: string | number | any) {
  if (typeof arg === "string") {
    return "string";
  } else if (typeof arg === "number") {
    return "number";
  } else {
    throw new Error("Pagal ho kya kuch bhi bhej rhe ho");
  }
}

console.log(abb("sankar"));
console.log(abb(123));
console.log(abb(true));
