let count = 10;

let interval = setTimeout(() => {
  if (count > 0) {
    console.log(`Count : ${count}`);
    count--;
  } else {
    clearTimeout(interval);
  }
}, 1000);
