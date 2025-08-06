let obj = {
  name: "XshShahab",
};

function callObj(a, b, c) {
  console.log(this, a, b, c);
}

callObj.call(obj, 1, 3, 5);
