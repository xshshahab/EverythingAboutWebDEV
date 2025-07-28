let array = [1, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = array.find(function (val) {
  return val === 1;
});

console.log(newArray);

let arr = [
  { id: 1, key: 1 },
  { id: 2, key: 2 },
  { id: 3, key: 1 },
];

let nAr = arr.find(function (val) {
  return val.key === 1;
});

console.log(nAr);
