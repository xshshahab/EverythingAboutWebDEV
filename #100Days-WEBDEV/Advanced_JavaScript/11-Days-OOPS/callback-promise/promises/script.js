let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) res(rn);
    else rej(rn);
  }, 2000);
});

pr.then(function (data) {
  console.log("FulFilled: ", data);
}).catch(function (val) {
  console.log("Reject: ", val);
});
