let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) res("Resolved : " + rn);
    else rej("Rejected : " + rn);
  }, 2000);
});

async function uffPR() {
  try {
    let val = await pr;
    console.log(val);
  } catch (error) {
    console.error(error);
  }
}

uffPR();
