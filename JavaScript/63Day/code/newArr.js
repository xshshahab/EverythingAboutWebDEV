let arr = [1, 33, 55, 6, 92];
let newArray = [];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  newArray.push(element ** 2);
}

for (let item of newArray) {
  console.log(item);
}
