/**Input: 
N = 3
arr[] = {1,2,3}
Possible Answer: 2
Generated Output: 1 */
const array = [1, 2, 3];
const N = 3;
let output = 0;
function peakElement(arr, n) {
  //   console.log(arr[n - 1]);
  if (arr[n - 1] > arr[n - 2]) {
    return 1;
  } else {
    return 0;
  }
}
peakElement(array, N);
console.log(peakElement(array, N));
