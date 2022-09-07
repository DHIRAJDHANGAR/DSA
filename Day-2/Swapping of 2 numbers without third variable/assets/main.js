/*Input: a = 15, b = 8
Output: 8 15*/
let a = 15;
let b = 8;
function swapNum() {
  a = a + b;
  b = a - b;
  a = a - b;
  return console.log("a:", +a, "b:", +b);
}
swapNum(a, b);
// swapNum(0, 12);
// swapNum(978, 518);
