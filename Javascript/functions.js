//! Functions
// function name()
// {
//     console.log("Hello");
// }

// name();

// function function_with_parameters(a)
// {
//     console.log("Hello",a);
// }

// function_with_parameters("Ayush");

// let a=1;
// let b=2
// function add(a, b, c)
// {
//     return a+b+c;
// }
// let ans = add(a,b,3);
// console.log(ans);

// let a = 5; //! This is global variable and has scope all over the code

// function local() {
//   let b = 3; //! This is local variable and has scope inside this function only
//   console.log(b);
// }

// local();
// console.log(a);
// console.log(b);

//! Anonymous Function
// An anonymous function is a function that is defined without being assigned to a variable or having a name. It is often used as a way to define a function on the fly, without explicitly naming it. Here, the anonymous function is assigned to the variable add.
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

//! Arrow Function
let add_arrow = (a, b) => a + b;
console.log(add_arrow(1, 2));
