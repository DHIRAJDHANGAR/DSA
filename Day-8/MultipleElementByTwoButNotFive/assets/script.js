// Task 2 - Multiple every number by 2 but ignore of divisible by 5 (print same number)
const multipleElementByTwoButNotFive = (numArr) => {
  return numArr.map((item) => (item % 5 == 0 ? item : item * 2));
};
const numbers = [5, 3, 9, 30];
console.log(multipleElementByTwoButNotFive(numbers)); // [ 5, 6, 18, 30 ]
