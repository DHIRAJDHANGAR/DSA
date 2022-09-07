/*******if-else*******/


let arr= [1,0,0,2,0,3];
let zero = [];
let one = [];
let two = [];

for(i=0; i<arr.length; i++)
{
    if(arr[i] === 0)
    {
        zero.push(arr[i]);
    }
    else if(arr[i] === 1)
    {
        one.push(arr[i]);
    }
    else{
        two.push(arr[i]);
    }
}
for(j=0; j<arr.length; j++)
{
    arr = [...zero, ...one, ...two];
}
console.log("assending-order:", arr);


// /*******switch case*******/


// let arr_1= [1,0,0,2,0,3];
// let zero_1 = [];
// let one_1 = [];
// let two_1 = [];

// for(i=0; i<arr_1.length; i++)
// switch (arr_1[i])
// {
//     case (0):
//         zero_1.push(arr_1[i]);
//     case (arr_1[i]===1):
//         one_1.push(arr_1[i]);
//     default:
//         two_1.push(arr_1[i]);;
// };

// for(j=0; j<arr_1.length; j++)
// {
//     arr_1 = [...zero_1, ...one_1, ...two_1];
// };
// console.log("assending-order:", arr_1);