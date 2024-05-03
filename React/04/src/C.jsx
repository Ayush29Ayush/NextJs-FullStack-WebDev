import React, { useContext } from "react";
// import { GreetContext as GreetContext_from_A, GreetContext2 } from "./A";
import { GreetContext as GreetContext_from_A } from "./A";

//! Now component A has become a provider of context and C will be a consumer of context.
const C = () => {
  // console.log(props)
  const useCon = useContext(GreetContext_from_A);
  //   const useCon2 = useContext(GreetContext2);
  console.log(useCon);
  return (
    <div>
      <h1>Hey</h1>
      <br />
      {useCon.greet}
      <br />
      {useCon.greet2}
    </div>

    //! V2 => Here we use 2 useContext to get 2 diff context values.
    // <h1>
    //   First: {useCon} <br /> Second: {useCon2}
    // </h1>

    //! V1 => This has become a nested consumer which is not feasible for lots of context values. To solve this, we have useContext.
    // <GreetContext_from_A.Consumer>
    //   {(vaal) => {
    //     return (
    //       // <h1>{vaal}</h1>
    //       <GreetContext2.Consumer>
    //         {(vaal2) => {
    //           return (
    //             <h1>
    //               {vaal}
    //               <br />
    //               {vaal2}
    //             </h1>
    //           );
    //         }}
    //       </GreetContext2.Consumer>
    //     );
    //   }}
    // </GreetContext_from_A.Consumer>
    //! Without any context, just using props to pass data from A to C.
    //     <div>
    //     C
    //     <br />
    //     {/* {props.greet} */}
    //   </div>
  );
};

export default C;
