/******Input: a = 13, c = 9
 * Output: 9 13*********/
let a = 13;
let c = 9;
function swap(x, y) {
  let a1 = x;
  let c1 = y;
  x = c1;
  y = a1;
  console.log("swapNum:", x, y);
}
swap(a, c);
