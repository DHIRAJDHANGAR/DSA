/*N = 7, X = 2
Arr[] = {1, 1, 2, 2, 2, 2, 3}*/
const array = [1, 1, 2, 2, 2, 2, 3];
const N = 7;
const X = 2;
function count(arr, n, x) {
  let output = array.filter((index) => {
    if (x == index) {
      return index;
    }
  });
  return output.length;
}
count(array, N, X);
console.log(count(array, N, X));
