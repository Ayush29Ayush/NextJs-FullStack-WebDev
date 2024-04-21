//! Objects in JS are just like dictionaries in Python
let obj = {
  name: "Ayush",
  age: 18,
  city: "Delhi",
  "last name": "Senapati",
  getDetails: function () {
    return "Name: " + this.name + ", Age: " + this.age + ", City: " + this.city;
  },
  getUnknownDetails: () => {
    return "Unknown Details :" + this.unknown_key;
  },
  arr: [1, 2, 3, 4, 5],
};
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj["last name"]);
// console.log(obj.getDetails());
// console.log(obj.getUnknownDetails());
// console.log(obj.arr);
// console.log(obj.arr[2]);
// One more way to set key value
let dummy_key = "dummy_key";
obj[dummy_key] = "dummy_value";
// console.log(obj);

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// for (let i of Object.keys(obj)) {
//   console.log(i, obj[i]);
// }

//! Objects inside Array
let arr = [
  {
    name: "Ayush",
    age: 18,
  },
  {
    name: "Senapati",
    age: 19,
  },
  {
    name: "Human",
    age: 123,
  },
];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[0].name);

// for (let i in arr)
// {
//     // console.log(i);
//     console.log(arr[i]);
// }

let [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

//! Function inside Function
// function func() {
//     console.log("I am func1");
//     function func2() {
//         console.log("I am func2");
//     }
//     func2();
// }

// func();

//! Lexical Scope
// let x = 10;
// function func() {
//   let y = 20;
//   function func2() {
//     let z = 30;
//     console.log(x, y, z);
//   }
//   func2();
// }
// func();

//! Debugger
// for (let i = 0; i < 3; i++) {
//   debugger;
//   console.log(i);
// }

//! Sets
// In sets, all the elements are unique and duplicates are not allowed
let arr1 = [1, 2, 3, 4, 5, 5, 5];
console.log(arr1);

let arr2 = new Set(arr1);
console.log(arr2);

//! Maps
// In maps, all the key value pairs are unique and duplicates are not allowed
var map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");
map.set("key3", "value3");
console.log(map);

//! this

console.log(this); // this inside global scope is the global object. In node.js it is the module.exports object

var objj = {
  // this inside objj is objj itself.
  name: "Ayush",
  age: 23,
  func: function () {
    console.log(this);
    console.log(this.name);
  },
};

objj.func();

//! Symbol
// Symbol is used to create unique identifiers
var sym = Symbol("key");
console.log(sym);
console.log(typeof sym);
