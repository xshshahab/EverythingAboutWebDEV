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

let prom2 = new Promise((resolve, reject) => {
  let rand = Math.random();
  if (rand < 0.5) {
    reject("No random number was not supporting you [ v2 ]");
  } else {
    setTimeout(() => {
      console.log("Yes, I am done!! [v2]");
      resolve("Syphar [ v2 ]");
    }, 1000);
  }
});

let allProm = Promise.all([prom1, prom2]);

allProm
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log("ERROR!!!", err);
  });

let allProm2 = Promise.allSettled([prom1, prom2]);

allProm2
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log("ERROR!!!", err);
  });
