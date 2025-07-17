let arr = [1, 33, 55, 6, 92];

arr.map((item, index) => {
  //   console.log(item, index);
  console.log(
    `Value of an array is ${item} and it's type : ${typeof `${item}`} and it's index is : ${index}`
  );
});

let newArray = arr.map((e) => {
  return e ** 2;
});

console.log(newArray);
