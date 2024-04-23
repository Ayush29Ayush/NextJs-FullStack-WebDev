{/* <form action="" onsubmit="onSubmitfunc()">
      Your email id :
      <input type="email" id="input" onfocus="onfocusfunc()" onblur="onblurfunc()" onselect="onselectfunc()" required/>
      <input type="submit">
    </form>

    <script src="DOM/forms.js"></script> */}

let input = document.getElementById("input");

function onfocusfunc() {
  input.style.backgroundColor = "red";
//   console.log(input.value);
}

function onblurfunc() {
  input.style.backgroundColor = "green";
//   console.log(input.value);
}

function onSubmitfunc() {
  alert("Your email id is " + `${input.value}`);
  console.log(input.value);
}

function onselectfunc() {
  alert("You selected email");
  console.log(input.value);
}