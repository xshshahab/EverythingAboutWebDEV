const obj = {
  username: "xshshahab",
  age: 21,
  email: "xshshahab@xemail.com",
  address: {
    city: "Patna",
    state: "Bihar",
    pincode: 801505,
  },
};

const obj2 = { ...obj };

console.log("Cloning but not complete : ", obj2);
