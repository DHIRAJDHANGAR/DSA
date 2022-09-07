let a = "geeksforgeeks";
let b = "forgeeksgeeks";

function isAnagram(x, y) {
  let array_1 = a.split("");
  let array_2 = b.split("");
  array_1.sort();
  array_2.sort();
  let array_3 = array_1.join("");
  let array_4 = array_2.join("");
  if (array_3 === array_4) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
isAnagram(a, b);
