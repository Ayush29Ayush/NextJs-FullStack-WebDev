// Get a reference to the element
var myDiv = document.getElementById("myDiv");

// Get the value of the id attribute
var idValue = myDiv.getAttribute("id");
console.log("Initial value of id attribute:", idValue);

// Set the value of the id attribute
myDiv.setAttribute("id", "updatedId");

// Get the updated value of the id attribute
var updatedIdValue = myDiv.getAttribute("id");
console.log("Updated value of id attribute:", updatedIdValue);

// myDiv.setAttribute("dummy_attribute", "123");
myDiv.setAttribute("dummy_attribute", 123);
console.log(myDiv.outerHTML);
