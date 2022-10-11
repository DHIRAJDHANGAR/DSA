function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();

//   A: Lydia and undefined
//   B: Lydia and ReferenceError
//   C: ReferenceError and 21
//   D: undefined and ReferenceError        ---ans

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

//   A: 0 1 2 and 0 1 2
//   B: 0 1 2 and 3 3 3
//   C: 3 3 3 and 0 1 2        ---ans

const a = 3;
const b = new Number(3);
const c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

//   A: true false false        ---ans
//   B: false true true
//   C: false false false
//   D: true true true
