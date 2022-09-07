let N = 5;
// let N = 4;
// let N = 10;
let Output;
function factorial(n) {
  let fact = 1;
  for (let i = n; i > 0; --i) {
    if (i !== 0) {
      fact = fact * i;
    }
  }
  return (Output = fact);
}
factorial(N);
console.log("Output:", Output);
