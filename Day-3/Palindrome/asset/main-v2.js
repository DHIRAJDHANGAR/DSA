/******By Reverse******/
let S = "abba";

function isPalindrome(string) {
  let array = string.split("");
  let revArray = array.reverse();
  let revString = revArray.join("");
  if (string == revString) {
    return 1;
  } else {
    return 0;
  }
}
isPalindrome(S);
console.log(isPalindrome(S));
