let arr = [11, 4, 21, 19, 23, 13, 44, 5, 12];

console.log("Unsorted Array: ", arr);

let SortedArr = arr.sort(function (a, b) {
  return a - b;
});

console.log("Sorted Array: ", SortedArr);
