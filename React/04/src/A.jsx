import React from "react";
import B from "./B";

//! Now component A has become a provider of context and C will be a consumer of context.
const GreetContext = React.createContext();
// const GreetContext2 = React.createContext();

const A = () => {
  const greet = "Hello, I am from component A";
  const greet2 = "Hello, I am from component A 2";
  return (
    <div>
      <GreetContext.Provider value={{greet,greet2}}>
      {/* <GreetContext2.Provider value={greet2}> */}
        <B />
      {/* </GreetContext2.Provider> */}
      </GreetContext.Provider>
      {/* <B greet={greet}/> */}
    </div>
  );
};

export default A;
// export { GreetContext , GreetContext2};
export { GreetContext };
