//! Normal function 1
function f(x) {
    console.log("Value of x is",x);
    return x * 2;
}
// let ans = f(2);
// console.log(ans);
// let ans = f(3);
// console.log(ans);
// const ans = f(2);
// console.log(ans);
// const ans = f(3);
// console.log(ans);
var ans = f(2);
console.log("Value of ans is",ans);
var ans = f(4);
console.log("Value of ans is",ans);

//! Normal function 2
let sum = function(a,b) {
    return a + b;
}
console.log(sum(2,3));

//! Arrow function
// let summ = (a,b) => {
//     return a + b;
// }
let summ = (a,b) => a + b;
console.log(summ(3,4));

//! Array
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);