/* Example 1:
             Input: Str = geeksforgeeks
              Output: geksforgek*/

/* Example 2:
             Input: Str = HappyNewYear
              Output: HapyNewYear*/

// let Str = "geeksforgeeks";
let Str = "HappyNewYear";

let input = [];

for (let i = 0; i < Str.length; i++) {
  if (Str[i] !== Str[i + 1]) {
    input.push(Str[i]);
  }
}
// console.log(newStr + " ");
const newStr = input.join("");
console.log("NewString:", newStr);
