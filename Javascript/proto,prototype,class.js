//! Proto
let obj = {
  fName: "Ayush",
};

let obj2 = {
  lName: "Senapati",
};

obj2.__proto__ = obj;
// console.log(obj2.fName);
// Here, first it tries to find fname in obj2. If it doesn't find it, it will try to find it in obj. If it doesn't find it, it will give undefined.

//* Another way to do so
let obj3 = Object.create(obj);
// console.log(obj3);
// console.log(obj3.fName);
obj3.lName = "Senapatiii";
// console.log(obj3);

//! prototype
// function Person(name, age) {
//   let person = Object.create(objj);

//   person.name = name;
//   person.age = age;

//   return person;
// }

// var objj = {
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// let user = Person("Ayush", 18);
// console.log(user);

//! Class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, my name is ${this.name} and my age is ${this.age}.`);
  }
}

let user_trial = new User("Ayush", 18);
user_trial.sayHi();

let user_trial_2 = new User("Senapati", 81);
user_trial_2.sayHi();
