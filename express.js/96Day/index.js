import express from "express";
import mongoose from "mongoose";

import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    name: "Learning Express with mongoose",
    desc: "I need to understand basic of express and mongodb",
    isDone: false,
  });
  todo.save();
  res.send("Hello, Syphar");
});

app.get("/find", async (req, res) => {
  let todo = await Todo.findOne({});

  res.json({ title: todo.name, desc: todo.desc });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
