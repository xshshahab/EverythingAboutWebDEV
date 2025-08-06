// global ke andar this keyword ka value window hota hai

console.log(this);

// function ke andar this keyword ka value window hota hai

function sayThis() {
  console.log(this);
}

sayThis();

// method ke andar this keyword ka value { object } hota hai

let obj = {
  name: "XshShahab",
  age: 21,
  sayHello: function () {
    console.log(this);
    console.log(`Hello, ${this.name} your age : ${this.age}`);
  },
};

// event handle this keyword ka value wahi same value hoga jis par event laga hai
let h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
  console.log(this);
});
