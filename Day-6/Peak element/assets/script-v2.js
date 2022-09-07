/*Input:
s = GeeksForGeeks, x = Fr
Output: -1*/
const str = "GeeksForGeeks";
const x = "fr";
const arrayStr = str.split("");
const arrayX = x.split("");
function strstr(s, x) {
  const arrayStr = s.split("");
  const arrayX = x.split("");
  for (let i = 0; i < arrayStr.lenght; i++) {
    for (let j = 0; j < arrayX.lenght; j++) {
      function samestr(i, j) {
        if (arrayStr[i] === arrayX[j]) {
          samestr(arrayStr[i++], arrayX[j++]);
        } else {
        }
      }
      samestr(arrayStr[i], arrayX[j]);
    }
  }
}
strstr(s, x);
