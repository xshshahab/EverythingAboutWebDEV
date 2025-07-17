"use server";
import fs from "fs/promises";

const submitAction = async (e) => {
  console.log(e.get("name"), e.get("email"), e.get("password"));
  fs.appendFile(
    "log.txt",
    `Name is : ${e.get("name")} : email is : ${e.get(
      "email"
    )} : and password is : ${e.get("password")} \n`
  );
};

export default submitAction;
