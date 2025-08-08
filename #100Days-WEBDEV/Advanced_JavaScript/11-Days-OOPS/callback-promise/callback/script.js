let times = Math.floor(Math.random() * 10) * 1000;
console.log("Random Times : ", times);

function takeTimeToRun(val) {
  setTimeout(() => {
    console.log("Values: ", val);
  }, times);
}

takeTimeToRun("Sudhir Code!");

function againTakeTimeToRun(fnc) {
  setTimeout(fnc, times);
}

// Callback function
againTakeTimeToRun(function () {
  console.log("Hey Sudhir FNC!");
});
