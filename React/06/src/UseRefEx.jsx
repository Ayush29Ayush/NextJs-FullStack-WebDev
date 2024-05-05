import React, { useEffect, useRef, useState } from "react";

const UseRefEx = () => {
  // const reference = useRef(initialValue);
  // const reference = useRef(0); //! 0 is the initial value which is stored as value to the key named "current" in the reference object.
  // console.log(reference)
  //! V1 for USE CASE => To check how many times the component is rendered.
  //   const [userInput, setUserInput] = useState("");
  //   const [renders, setRenders] = useState(0);

  //   useEffect(() => {
  //     setRenders(renders + 1);
  //   }, [userInput]);

  //! V2 for USE CASE => The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
  const [userInput, setUserInput] = useState("");
  const renders = useRef(0);
  useEffect(() => {
    renders.current = renders.current + 1;
  }, [userInput]);

  return (
    <div>
      {/* <input
        type="text"
        value={userInput}
        onChange={(e) => {
          console.log(e);
          setUserInput(e.target.value);
        }}
      />
      <p>Renders: {renders}</p> */}
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          console.log(e);
          setUserInput(e.target.value);
        }}
      />
      <p>Renders: {renders.current}</p>
    </div>
  );
};

export default UseRefEx;
