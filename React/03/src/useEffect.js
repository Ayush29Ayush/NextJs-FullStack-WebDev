// eslint-disable-next-line
import React, { useEffect } from "react";

//! useEffect has a callback function as first parameter and a dependency array as second parameter
const REACT_USE_EFFECT = () => {
  const [clicked_button, setClickedButton] = React.useState(null);
  const [count, setCount] = React.useState(0);

  // useEffect(() => {
  //   //! code to run after every render, update or every time the dependency changes
  //   console.log("useEffect");
  // },[dependency]);

  //! Whenever anything new is rendered, the useEffect will be called
  // useEffect(() => {
  //   alert("useEffect");
  // })

  //! Show alert only when the page is loaded for the first time
  // useEffect(() => {
  //   alert("useEffect");
  // }, []);

  //! Show alert only when clicked_button is changed
  // useEffect(() => {
  //   alert(clicked_button);
  // }, [clicked_button]);

  //! Show alert only when clicked_button or count is changed
  // useEffect(() => {
  //   console.log(
  //     `You have clicked ${clicked_button} or count was updated to ${count}`
  //   );
  // }, [clicked_button, count]);

  //! Example of CLEAN UP
  // Here we can observe that when the dependency changes, the return statement is called first and then the useEffect code is called
  useEffect(() => {
    console.log("Either clicked_button or count was updated");

    return () => {
      console.log("Clean up return statement...");
    };
  }, [clicked_button, count]);

  return (
    <div>
      <button onClick={() => setClickedButton("Say Hello")}>Say Hello</button>
      <br />
      <hr />
      <button onClick={() => setClickedButton("To")}>To</button>
      <br />
      <hr />
      <button onClick={() => setClickedButton("Ayush")}>Ayush</button>
      <h1>{clicked_button}</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};

export default REACT_USE_EFFECT;
