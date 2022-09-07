/**
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 */
// const x = 121;
// const isPalindrome = function (x) {
//   console.log("x", typeof x);
//   let z = x.toString();
//   const xx = z.split("");
//   console.log(xx);
// };
// console.log("isPalindrome:", isPalindrome(x));

/**
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 */
const s = "III";
const ss = s.split("");
console.log(ss);
const sss = ss.filter((i) => {
  if (i == "I") {
    i = 1;
    return i;
  }
});
console.log(sss);
function romanToInt(s) {}
romanToInt(s);
