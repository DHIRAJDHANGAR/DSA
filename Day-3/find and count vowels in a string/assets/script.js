/**Program to count vowels in a string */
// const str = "abc de";
const str = "geeksforgeeks portal";

function isVowel(str) {
  const array = str.split("");
  let vowels = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "a" ||
      array[i] === "e" ||
      array[i] === "i" ||
      array[i] === "o" ||
      array[i] === "u"
    ) {
      vowels.push(array[i]);
      count++;
    }
  }
  return `Vowels: ${vowels} , Count: ${count}`;
}
isVowel(str);
console.log(isVowel(str));
