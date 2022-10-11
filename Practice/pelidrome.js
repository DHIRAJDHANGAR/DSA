let x = 121;

const isPalindrome = function (x) {
  let stringA = x.toString();
  console.log(stringA);
  let splitString = stringA.split("");
  console.log(splitString);
  let reverseString = splitString.reverse();
  console.log(reverseString);
  let joinString = reverseString.join("");
  console.log(joinString);
  if (stringA === joinString) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(x));
