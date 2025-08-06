let obj = {
  name: "XshShahab",
};

function callObj() {
  console.log(this);
}

// If you pass the object empty then the value of this is by default window
callObj.call();

// If you pass the object then the value of this is set to object
callObj.call(obj);
