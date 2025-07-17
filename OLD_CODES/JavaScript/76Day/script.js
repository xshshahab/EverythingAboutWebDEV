async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3000);
  });
}

async function main() {
  console.log("Do something else");

  console.log("Load data");

  let data = await getData();
  console.log(data);

  console.log("Task 2 Done.");
}

main();
