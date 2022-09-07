let a = 15;
let b = 8;
function swapNum(x, y) {
  return ([y, x] = [x, y]);
}
swapNum(a, b);
// [a, b] = [b, a];
// console.log(a, b);
