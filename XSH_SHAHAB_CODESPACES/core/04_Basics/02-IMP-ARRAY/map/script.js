let arr = [13, 14, 15, 38, 21];

arr.map((ar) => {
  console.log(ar);
});

// this map function run for all index which is available on array and return the value 12 not the actual number and store in the newArray so new array  output : [12, 12, 12, 12, 12] this not the actual array value
let newArray = arr.map(function (val) {
  return 12;
});

console.log(newArray);
