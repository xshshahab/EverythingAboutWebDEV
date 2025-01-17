let a = [1, 33, 55, 6, 92];

for (let i = 0; i < a.length; i++) {
  console.log("index", i, " : ", "value", a[i]);
  //   console.log(`Index ${i} : Value ${a[i]}`);
}

a.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

for (const value of a) {
  console.log(value);
}
