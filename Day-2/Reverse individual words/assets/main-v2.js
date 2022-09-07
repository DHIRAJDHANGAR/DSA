let str = "Hello World";
function reverseWord(str) {
  let array = str.split("");
  let length = array.length;
  let Output = [];
  for (let i = 0; i < length; i++) {
    if (array[i] === " ") {
      Output.unshift(array[i]);
      // console.log("push", Output);
    } else {
      Output.unshift(array[i]);
      Output = [Output.join("")];
    }
  }
  let revers = Output.toString();
  return revers;
}
reverseWord(str);
