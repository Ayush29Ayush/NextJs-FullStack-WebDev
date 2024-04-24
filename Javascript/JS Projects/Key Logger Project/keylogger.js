const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
});

stopBtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  logDiv.textContent = "";
  stateDiv.textContent = "";
});

function handleDown(e) {
  logDiv.textContent = `Key ${e.key} is now pressed..`;
  stateDiv.textContent = `Key ${e.key} is now pressed...`;
}

function handleUp(e) {
  logDiv.textContent = `Key ${e.key} is now released..`;
  stateDiv.textContent = `Key ${e.key} is now released...`;
}
