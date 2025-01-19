async function getData() {
  // simulate getting data from a server
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  console.log(data);
  return data;
}

async function main() {
  console.log("Do something else");

  console.log("Load data");

  let data = await getData();
  console.log(data);

  console.log("Task 2 Done.");
}

main();
