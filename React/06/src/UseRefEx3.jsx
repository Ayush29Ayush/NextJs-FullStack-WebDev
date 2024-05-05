import React, { useRef, useEffect } from "react";

const UseRefEx3 = () => {
  const inputEl = useRef(null);

  // useEffect(() => {
  //     inputEl.current.focus();
  // },[])
  function handleFocus() {
    // inputEl.current.focus();
    inputEl.current.style.backgroundColor = "black";
  }
  function handleBlur() {
    // inputEl.current.blur();
    inputEl.current.style.backgroundColor = "";
  }
  return (
    <div>
      <input
        ref={inputEl}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default UseRefEx3;
