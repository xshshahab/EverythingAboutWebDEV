let arr = [10, 20, 30, 40, 50];

let arr2 = arr.filter(function (val) {
  if (val > 20) return true;
});

console.log(arr2);
