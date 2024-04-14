// console.log("Hello World")
// a = 5;
// console.log(a);
// console.log(typeof(a));
// a = "This is a string";
// console.log(a);
// console.log(typeof(a));

//! Variables declared with let are block-scoped. They are only accessible within the block in which they are declared, including loops, conditionals, and functions.
// let a = "This is a let string";
// // let a = "This is a string 1";
// a = "This is a let string 1";
// console.log(a);

//! Variables declared with var are function-scoped. They are visible throughout the function in which they are declared, regardless of block scope.
// var b = "This is a var string";
// b = "This is a var string 1";
// console.log(b);

//! Variables declared with const are also block-scoped. However, const variables must be initialized upon declaration and cannot be reassigned. They are also immutable.
// const c = "This is a const string";
// c = "This is a const string 1";
// console.log(b);

let num = 10;

if (num > 0) {
    console.log("The number is positive.");
} else if (num === 0) {
    console.log("The number is zero.");
} else {
    console.log("The number is negative.");
}


let day = 3;
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("The day is " + dayName + ".");

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("The sum of numbers is: " + sum);

let i = 0;
let summ = 0;

while (i < 5) {
    summ += i;
    i++;
}

console.log("The sum of numbers from 0 to 4 is: " + summ);

let counter = 0;
let total = 0;

do {
    total += counter;
    counter++;
} while (counter < 5);

console.log("The sum of numbers from 0 to 4 is: " + total);
