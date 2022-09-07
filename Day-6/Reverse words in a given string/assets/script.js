const S = "i.like.this.program.very.much";
//Output: much.very.program.this.like.i
const T = "pqr.mno";
function reverseWords(s) {
  const ss = [];
  const array = s.split(".");
  for (let i = array.length - 1; i >= 0; i--) {
    if ([i] !== 0) {
      ss.push(array[i]);
    } else {
      ss.push(array[i]);
    }
  }
  s = ss.join(".");
  return s;
}
reverseWords(S);
console.log(reverseWords(S));
reverseWords(T);
console.log(reverseWords(T));
