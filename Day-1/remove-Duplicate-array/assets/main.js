let Array = [2, 2, 2, 2, 2];
// let Array = [1, 2, 2]
let length = Array.length;
var TotalCount = 0;
let count = 1;

for (let i = 0; i < length; i++) {
  if (Array[i] !== Array[i + 1]) {
    TotalCount += count++;
    count = 1;
  }
}
console.log("TotalCount:", TotalCount);
