const isPalindrome = function (x) {
  let stringA = x.toString();

  let splitString = stringA.split("");

  let reverseString = splitString.reverse();

  let joinString = reverseString.join("");

  if (stringA === joinString) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(1234321));
