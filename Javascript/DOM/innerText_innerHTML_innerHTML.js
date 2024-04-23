var a = document.querySelector("h1");
console.log(a);
console.log(a.innerText); // ... will not be visible as display: none
console.log(a.innerHTML); // gives the entire html
console.log(a.textContent); // ... will be visible even after display: none

var target = document.querySelector(".hero");
var newEle = document.createElement("p"); // Create a new paragraph element
newEle.textContent = "Lenovo"; // Set its text content

target.insertAdjacentElement("beforebegin", newEle);
target.insertAdjacentElement("beforeend", newEle);
target.insertAdjacentElement("afterend", newEle);
target.insertAdjacentElement("afterbegin", newEle);
