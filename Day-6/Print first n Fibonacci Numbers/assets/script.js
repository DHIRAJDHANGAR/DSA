function printFibb(N) {
  let array = [];
  array[0] = 1;
  for (let i = 1; i < N; i++) {
    array[i] = array[i - 1] + (array[i - 2] || 0);
  }
  return array;
}
printFibb(27);
console.log(printFibb(27));
printFibb(7);
console.log(printFibb(7));
printFibb(5);
console.log(printFibb(5));
