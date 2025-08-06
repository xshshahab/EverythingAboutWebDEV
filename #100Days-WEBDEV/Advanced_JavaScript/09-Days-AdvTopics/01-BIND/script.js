let obj = {
  username: "xshshahab",
  profileName: "Mohammad Shahabuddin",
  github_url: "https://github.com/xshshahab",
};

function getAllDetails(para1, para2) {
  console.log(this, para1, para2);
}

let fnc = getAllDetails.bind(
  obj,
  {
    name: "Suman",
    age: 27,
  },
  {
    name: "Sapna",
    age: 21,
  }
);

fnc();
