const obj1 = {
  o1: "obj1a1",
  o2: "obj1b1",
};

const obj2 = {
  a1: "obj2a2",
  a2: "obj2b2",
};

const mergeObject = Object.assign(obj1, obj2);
const safeMergeObject = Object.assign({}, obj1, obj2);
console.log("Merge object : ", mergeObject);
console.log("Safe merge object : ", safeMergeObject);
