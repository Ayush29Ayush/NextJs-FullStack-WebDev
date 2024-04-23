{/* <div id="loc">
        Hey
    </div>
    <script src="DOM/window_location.js"></script> */}

let loc = document.getElementById("loc");
// loc.innerHTML = window.location.href;
// loc.innerHTML = window.location.hostname;
// loc.innerHTML = window.location.pathname;
// loc.innerHTML = window.location.protocol;
// loc.innerHTML = window.location.assign("https://www.google.com");

let myfunc = () => {
  console.log(window.location.href);
  window.location.assign("https://www.google.com");
};

loc.addEventListener("click", myfunc);
