console.log("Learning Promise in JavaScript");

// Promise 1
let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Yes, I am done..!!");
    resolve("Syphar");
  }, 3000);
});

prom1.then((a) => {
  console.log(a);
});

/*------------------------------------------------------------------------- */

// Promise 2
// A function that returns a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step 1: Data fetched");
    }, 1000);
  });
}

// Another function that returns a promise
function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${data} -> Step 2: Data processed`);
    }, 1000);
  });
}

// Another function that returns a promise
function saveData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${data} -> Step 3: Data saved`);
    }, 1000);
  });
}

// Chaining the promises
fetchData()
  .then((result) => {
    console.log(result);
    return processData(result); // Pass the resolved data to the next function
  })
  .then((result) => {
    console.log(result);
    return saveData(result); // Pass the processed data to the next function
  })
  .then((result) => {
    console.log(result); // Log the final result
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors in the chain
  })
  .finally(() => {
    console.log("Promise chain complete.");
  });
