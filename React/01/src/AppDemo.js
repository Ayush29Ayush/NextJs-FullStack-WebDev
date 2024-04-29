import React from "react";
import "./AppDemo.css";

function App() {
  let a = 2;
  return (
    <div>
      {/* The value of a is a */}
      The value of a is {a}
      <br />
      Adding {a}+2 = {a + 2}
      <h1 className="main">App</h1>
      <p style={{ color: "white", backgroundColor: "black" }}>This is a para</p>
    </div>
  );
}

export default App;
