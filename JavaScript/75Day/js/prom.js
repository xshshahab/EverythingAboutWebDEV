let prom1 = new Promise((resolve, reject) => {
  let rand = Math.random();
  if (rand < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes, I am done!!");
      resolve("Syphar");
    }, 3000);
  }
});

prom1
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("ERROR!!", err);
  });
