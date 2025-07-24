let arr = [21, 10, 34, 44, 54];

// with normal function
arr.forEach(function (val) {
  console.log("Normal fn val: ", val);
});

// With arrow function
arr.forEach((val) => {
  console.log("Arrow Fn Value: ", val);
});
