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

// Let's convert this object into string
console.log(JSON.stringify(obj));
// output :  {"username":"xshshahab","age":21,"email":"xshshahab@xemail.com","address":{"city":"Patna","state":"Bihar","pincode":801505}}

// Let's convert into the real object
console.log(JSON.parse(JSON.stringify(obj)));
// output : {
//   username: 'xshshahab',
//   age: 21,
//   email: 'xshshahab@xemail.com',
//   address: { city: 'Patna', state: 'Bihar', pincode: 801505 }
// }

// Copy the deep nested object
let obj2 = JSON.parse(JSON.stringify(obj));

console.log("Copied! ", obj2);
