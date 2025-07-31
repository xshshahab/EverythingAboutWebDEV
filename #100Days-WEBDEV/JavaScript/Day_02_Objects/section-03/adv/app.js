const User = {
  name: "Mohit",
  age: 23,
  email: "ohhhmohit@xfc.com",
};

for (const key in User) {
  console.log(
    `Key : ${key}, if you found key. Then you'll get the values as well : ${User[key]}`
  );
}
