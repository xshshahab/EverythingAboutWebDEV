function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3000);
  });
}

let data = getData();
console.log(data);

data.then(() => {
  console.log("Task Done.");
});
