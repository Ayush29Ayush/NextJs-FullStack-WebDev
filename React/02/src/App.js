import React, { useState } from "react";
import "./App.css";

function App() {
  // console.log(useState())
  const [count, setCount] = useState(0);
  // console.log(count);
  // console.log(setCount);

  const increment_func =() => {
    setCount(count + 1);
  }
  const decrement_func = () => {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <div className="content">
        {/* <h1>0</h1> */}
        <h1>{count}</h1>
        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        <button onClick={increment_func}>Plus</button>
        <button onClick={decrement_func}>Minus</button>
      </div>
    </div>
  );
}

export default App;
