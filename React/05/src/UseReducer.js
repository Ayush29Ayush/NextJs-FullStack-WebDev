// Reducer function
// It is a pure function
// It has 2 parameters, state and action
// Reducer is the coffee maker, state is the coffee powder and action is the milk. New state is returned which is the coffee.
import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  //   const [count, setCount] = useState(0);
  //!   const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: "DECREMENT" });
  };

  //   console.log(state);
  return (
    <div>
      {/* <h1>{count}</h1> */}
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default UseReducer;
