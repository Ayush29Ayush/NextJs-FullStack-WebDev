//! JS is synchronous

// console.log("This")
// console.log("is")
// console.log("Synchronous")

//! JS can be made asynchronous
// JS asynchronous methods
//! 1. setTimeout

// Here, setTimeout is an asynchronous method due to which This and is will be printed first and then Asynchronous will be printed after 2 seconds
// console.log("This")
// let my_func = () => {
//     console.log("Asynchronous")
// }
// // setTimeout(() => {
// //     console.log("Asynchronous")
// // }, 2000)
// setTimeout(() => my_func(), 2000)
// console.log("is")

//! 2. callback function
// Use of callback function is to call another function. Here first add function is called and then fun function is called as we passed it as a parameter to act as an callback
// A callback function in JavaScript is a function that is passed as an argument to another function. This function is then executed after the other function has finished executing. Callback functions are often used to handle asynchronous operations, such as network requests or file I/O.
// let fun = (val) => console.log(val)

// let add = (a, b, callback) => {
//     let sum = a + b;
//     callback(sum);
// }

// add(5,10,fun);

//! 2.1 callback hell
// here we want the order to be printed in the order of 1. Loading Data, 2. Collecting Data, 3. Approving Data, 4. Approved
// function loadingData(callback) {
//   setTimeout(() => {
//     console.log("1. Loading Data");
//     callback();
//   }, 4000);
//   // console.log("1. Loading Data");
// }

// function collectingData(callback) {
//   setTimeout(() => {
//     console.log("2. Collecting Data");
//     callback();
//   }, 5000);
//   // console.log("2. Collecting Data");
// }

// function approvingData(callback) {
//   setTimeout(() => {
//     console.log("3. Approving Data");
//     callback();
//   }, 6000);
//   // console.log("3. Approving Data");
// }

// function approved() {
//   setTimeout(() => {
//     console.log("4. Approved");
//   }, 7000);
//   // console.log("4. Approved");
// }

// loadingData();
// collectingData();
// approvingData();
// approved();

// loadingData(function() {
//     collectingData();
//     approvingData();
//     approved();
// });

// loadingData(function() {
//     collectingData(function() {
//         approvingData();
//         approved();
//     });
// });
//! This is a classic example of callback hell where there is a nested function calling one another.
// loadingData(function() {
//     collectingData(function() {
//         approvingData(function() {
//             approved();
//         });
//     });
// });

// To resolve this callback hell, we use promises.
//! 3. Promises
// 3 stages of promises => pending, fulfilled, rejected

function fun(task) {
  return new Promise((resolve, reject) => {
    if (task) {
      resolve("Completed...");
    } else {
      reject("Not Completed...");
    }
  });
}

let onResolve = (res) => {
  console.log(res);
};

let onReject = (err) => {
  console.log(err);
};

fun(true).then(onResolve).catch(onReject);

//! SUMMARY
// In JavaScript, Promises represent the eventual completion or failure of asynchronous operations, transitioning through three stages: pending, fulfilled, and rejected. The function fun creates a Promise that resolves with 'Completed...' if task is true, otherwise rejects with 'Not Completed...'. onResolve and onReject functions handle the respective states, while fun(true).then(onResolve).catch(onReject) invokes fun with true, logging 'Completed...' upon resolution and 'Not Completed...' upon rejection.

//! Now lets solve this callback hell using promises
function loadingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we will see the example of resolve");
      console.log("1. Loading Data");
      resolve(); // By calling resolve here, we are telling the promise that it has been resolved so that it can go to the next .then or .catch
    }, 1000);
  });
}

function collectingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. Collecting Data");
      resolve();
    }, 2000);
  });
}

function approvingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. Approving Data");
      //   console.log("Now we will see the example of reject");
      console.error("Now we will see the example of reject");
      reject("Not fulfilled...");
      //   resolve();
    }, 3000);
  });
}

function approved() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4. Approved");
      //   console.log("Now we will see the example of reject");
      //   reject("Rejected...");
      resolve();
    }, 4000);
  });
}

// loadingData()
//   .then(collectingData)
//   .then(approvingData)
//   .then(approved)
//   .catch((err) => console.log("The Promise was rejected with error: ", err));

//TODO => READ THIS
//! promises are just the concept of asynchronous functions along with the logic of resolving or rejecting them. They help manage asynchronous operations in a more structured and readable way.

//! Async/Await
// Even better than using promises, we can use async/await.

//* You can use await only when your code is inside an async function.

let after_promise_func = () => {
  console.log("This is after the promise");
};

async function example() {
  await loadingData();
  //   await collectingData();
  //   await approvingData();
  await approved();
}

example()
  .then(after_promise_func)
  .catch((err) => console.log("The Promise was rejected with error:", err));
