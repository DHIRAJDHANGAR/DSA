const str = "u";
function isVowel(c) {
  let Output;
  let char = c.toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    Output = "Yes";
  } else {
    Output = "NO";
  }
  return Output;
}
isVowel(str);
console.log(isVowel(str));
