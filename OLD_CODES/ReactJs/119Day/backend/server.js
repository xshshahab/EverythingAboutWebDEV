import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hey, This is Home page");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "Hey, This is Home page" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
