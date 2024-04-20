//! Arrays

// Array methods
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("arr", arr);
// console.log("Length", arr.length);
// console.log("0th element / first element", arr[0]);
// console.log("9th element / last element", arr[9]);
// console.log("10th index element", arr[10]);
// console.log(arr[-1]); // arr[-1] tries to access an element at index -1, which is not a valid index in JavaScript arrays. So, when you run this code, it will log undefined to the console.

// arr.push(11);
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.unshift(0); // This will push the element at the beginning of the array
// console.log(arr);

// arr.shift(); // This will remove the element at the beginning of the array
// console.log(arr);

// arr.splice(2, 0, 2, 3, 4, 5); // This will add 2, 3, 4, 5 at index 2
// console.log(arr);

// arr.splice(2, 3); // This will remove 3 elements from index 2
// console.log(arr);

// arr.reverse(); // This will reverse the array
// console.log(arr);

// arr.sort(); // This will sort the array to [1, 10, 2, 3, 4, 5, 5, 6, 7, 8, 9] in ascending order
// console.log(arr);

// //! The function (a, b) => a - b is a comparison function used with sort() to instruct JavaScript to sort the array numerically. It subtracts b from a, resulting in negative, zero, or positive value, indicating whether a should come before, after, or remain in the same position relative to b, respectively.
// arr.sort(function(a, b) {
//     return a - b;
//   });
// console.log(arr); // Output: [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < arr.length; i++) {
//     console.log("Element at index", i, "is", arr[i]);
// }

let num = [1, 2, 3, 4, 5];
// num.forEach(element => console.log(element));

// num.forEach((element, index) => console.log("Element at index", index, "is", element));

// num.forEach((element, index, array) =>
//   console.log("Element at index", index, "is", element, "in the array", array)
// );

// let xyz = "10,20,30";
// let output = xyz.split(",");
// console.log(output);
// console.log(typeof output);

// let output2 = output.join("and");
// console.log(output2);


for (let i in num) {
    console.log("Element at index", i, "is", num[i]);
}

for (let i of num) {
    console.log("Element is", i);
}

//! Multi-dimensional arrays
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Value at index [0][1] =",arr[0][1]);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log("Element at index", i, j, "is", arr[i][j]);
    }
}

//! Array Copy 

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2]; // This will copy all elements of arr1 and arr2 into arr3
console.log(arr3);


let arr4 = [arr1, arr2]; // This will copy the reference of arr1 and arr2 into arr4
console.log(arr4);

