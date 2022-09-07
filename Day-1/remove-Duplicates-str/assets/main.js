/* Example 1:
             Input: Str = geeksforgeeks
              Output: geksforgek*/

/* Example 2:
             Input: Str = HappyNewYear
              Output: HapyNewYear*/

let Str = "geeksforgeeks";
// let Str = "HappyNewYear";

let array = Str.split("");
let newStr = [];

function removeDuplicates() {
  let input = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      input.push(array[i]);
    }
  }
  newStr = input.join("");
}
removeDuplicates(array);
console.log("NewString:", newStr);
