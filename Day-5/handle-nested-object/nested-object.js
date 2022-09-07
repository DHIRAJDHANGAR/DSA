/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

const obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};
let obj2 = [];
let str = "a.b";
let newstr = str.split(".");

// const findPath = (object, path) => {
    for(let i=0; i<newstr.length; i++)
    {
        if(obj2 = obj[newstr[i]])
        {
            console.log(obj2);
        }else if (obj != obj[newstr[i]])
        {
            console.log(undefined);
        }
    };
// };

// console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null
