let Name = "aaa";
let list = ["aaa", "aaa", "bbb", "aaa", "ccc", "ddd"];
let result = [];
function removeMatching(name, list) {
  for (let i = 0; i < list.length; i++) {
    if (name !== list[i]) {
      result.push(list[i]);
    }
  }
  return console.log("result", result);
}
removeMatching(Name, list);
