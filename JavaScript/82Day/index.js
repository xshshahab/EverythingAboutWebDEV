(async function main() {
  let [x, y, ...rest] = [2, 4, 9, 7, 3, 8, 1, 6];
  console.log(x, y, rest);
})();

/**
 * This code demonstrates the use of an Immediately Invoked Function Expression (IIFE)
 * with asynchronous capabilities, array destructuring, and the spread operator.
 *
 * 1. An async function is defined and invoked immediately.
 * 2. The array `[2, 4, 9, 7, 3, 8, 1, 6]` is destructured:
 *    - `x` is assigned the first element: `2`.
 *    - `y` is assigned the second element: `4`.
 *    - `rest` captures the remaining elements as an array: `[9, 7, 3, 8, 1, 6]`.
 * 3. The extracted values are logged to the console using `console.log`.
 *
 * Output:
 * 2 4 [9, 7, 3, 8, 1, 6]
 */
