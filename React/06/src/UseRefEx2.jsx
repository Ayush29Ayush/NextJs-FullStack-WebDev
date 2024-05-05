import React, { useEffect } from "react";

const UseRefEx2 = () => {
  //   const [count, setCount] = React.useState(0);
  const count = React.useRef(0);

  useEffect(() => {
    console.log("The component have been rendered...");
  });
  const handle = () => {
    // setCount(count + 1);
    count.current = count.current + 1;
    console.log(`count is ${count.current}`);
  };
  return (
    <div>
      <button onClick={handle}>Click Me</button>
    </div>
  );
};

export default UseRefEx2;
