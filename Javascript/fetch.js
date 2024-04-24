//! FetchAPI

//? fetch text file
// fetch("text.txt")
// fetch("textt.txt")
//   // fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network is not responding");
//     }

//     return response.text();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     //* In case of an error
//     // console.error("There has been a problem with your fetch operation:", error);
//     console.error(error);
//   });

//? fetch JSON
// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network is not responding");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach(element => {
//         console.log(element)
//         // console.log(element.name)
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//? fetch GET JSON
fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json));

//? fetch POST JSON
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
