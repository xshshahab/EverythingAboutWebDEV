// Create a reusable discount calculator using (HOF)

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let discounter = discountCalculator(10);

console.log(discounter(200));
