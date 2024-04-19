//! VARIABLES
"use strict";
// a=5

// This is allowed when using var is JS
// var name="Ayush"
// var name="Senapati"
// console.log(name)

// This is not allowed when using let in JS
// let name="Ayush"
// let name="Senapati"
// console.log(name)

// This is allowed when using let in JS
// let name="Ayush"
// name="Senapati"
// console.log(name)

// This is not allowed when using const in JS
// const name="Ayush"
// const name="Senapati"
// console.log(name)

// This is not allowed when using const in JS
// const name = "Ayush";
// name = "Senapati";
// console.log(name);

//! DATA TYPES
// Primitive Datatype
// 1. Number
let num = 50;
console.log(typeof num);
// 2. String
let str = "Hello";
console.log(typeof str);
// 3. Boolean
let bool = true;
console.log(typeof bool);
// 4. Null
let nullVar = null;
console.log(typeof nullVar);
// 5. Undefined
let undef;
console.log(typeof undef);

// Non Primitive Datatype
// 1. Object
let obj = { name: "Ayush", age: 25 };
console.log(typeof obj);
// 2. Array
let arr = [1, 2, 3];
console.log(typeof arr);
// 3. Function
function func() {}
console.log(typeof func);

//! TYPE CONVERSIONS
let result = "50";
console.log(result + 10);
console.log(typeof result);
result = Number(result);
console.log(result + 10);
console.log(typeof result);
result = String(result);
console.log(result + 10);
console.log(typeof result);

let number = 1250.1234;
number = parseInt(number);
console.log(number);
number = parseFloat(number);
console.log(number);

//! OPERATORS
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 ** 10);
console.log(10 >> 10);
console.log(10 << 10);
console.log(10 & 10);
console.log(10 | 10);
console.log(10 ^ 10);

let a = 1;
a++;
console.log(a);
++a;
console.log(a);
a--;
console.log(a);
--a;
console.log(a);

//! Comparison Operators
console.log(10 == 10);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != 10);
console.log(10 != "10");
console.log(10 !== "10");
console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);

console.log(2 > 3 && 2 > 4);
