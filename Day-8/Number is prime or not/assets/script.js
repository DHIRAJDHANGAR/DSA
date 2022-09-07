/**
 * Input:N = 5
 * Output: 1
 */
let N = 5;
// let N =25;
function isPrime(n) {
  if (n <= 1) {
    return 0;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return 0;
    }
  }
  return 1;
}
isPrime(N);
console.log(isPrime(N));
