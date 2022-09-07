// let Array = [2, 2, 2, 2, 2];
// let N = 5;
let Array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];
let N = 11;
// let Array = [1, 2, 2];
// let N = 3;
var TotalCount = 0;
let count = 1;

for (let i = 0; i < N; i++) {
  if (Array[i] !== Array[i + 1]) {
    TotalCount += count++;
    count = 1;
  }
}
console.log("TotalCount:", TotalCount);
