let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let answer = arr.reduce(function (acc, val) {
  return acc + val;
}, 0);

console.log(answer);
