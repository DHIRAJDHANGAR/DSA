/*Input: N = 10, K = 4
arr[] = 8 5 10 7 9 4 15 12 90 13
Output: 10 10 10 15 15 90 90*/
let arr = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13];
let N = 10;
let K = 4;
let Output = [];
function maximum(arr, N, K) {
  let maxNum = [];
  let count = 0;
  for (let i = 0; i < N; i++) {
    count++;
    if (count <= K) {
      if (maxNum < arr[i]) {
        maxNum.pop();
        maxNum.push(arr[i]);
      }
    } else {
      i = i - K;
      //   i = count - (K + 1);
      count = 0;
      Output.push(...maxNum);
      maxNum = [];
    }
  }
}
maximum(arr, N, K);
console.log("Output", Output);
