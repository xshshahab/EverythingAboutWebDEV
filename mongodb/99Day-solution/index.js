const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

const PORT = process.env.PORT || 3000;
mongoose.connect("mongodb://localhost:27017/company");

app.set("view engine", "ejs");

const getRandom = (arr) => {
  const randomNumber = Math.floor(Math.random() * (arr.length - 1));
  return arr[randomNumber];
};

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
  // Clear employee collection before generating new data
  await Employee.deleteMany({});

  let randomNames = ["Sohan", "Mohan", "Kriti", "Syphar", "Falak"];
  let randomCities = ["Kolkata", "Mumbai", "Assam", "Bihar", "Jharkhand"];
  let randomLang = ["JavaScript", "Python", "Java", "C/C++", "Go lang"];

  let employees = [];

  for (let i = 0; i < 10; i++) {
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 22000),
      language: getRandom(randomLang),
      city: getRandom(randomCities),
      isManager: Math.random() > 0.5 ? true : false,
    });

    employees.push(e);
  }

  res.json(employees); // Send generated employee data as JSON
});

// app.get("/generate", async (req, res) => {
//   // Clear everytime employee collection before generating
//   await Employee.deleteMany({});

//   // Generate random data
//   let randomNames = ["Sohan", "Mohan", "Kriti", "Syphar", "Falak"];
//   let randomCities = ["Kolkate", "Mumbai", "Assam", "Bihar", "Jharkhand"];
//   let randomLang = ["JavaScript", "Python", "Java", "C/C++", "Go lang"];

//   for (let i = 0; i < 10; i++) {
//     let e = await Employee.create({
//       name: getRandom(randomNames),
//       salary: Math.floor(Math.random() * 22000),
//       language: getRandom(randomLang),
//       city: getRandom(randomCities),
//       isManager: Math.random() > 0.5 ? true : false,
//     });

//     // await e.save();
//     console.log(e);
//   }

//   res.render("index", { foo: "FOO" });
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
