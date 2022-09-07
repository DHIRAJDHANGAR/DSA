/**Fibonacci Series (0,1,1,2,3,5,8,13....1000) */
function Fibonacci(n) {
  let array = [];
  for (let i = 0; i < 1000; i++) {
    if (array[i] === undefined) {
      array.push(0, 1);
    } else {
      let elem = array[i - 1] + array[i];
      array.push(elem);
    }
  }
  console.log(array);
  return array;
}
Fibonacci(20);
