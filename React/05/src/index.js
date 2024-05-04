import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
// import UseReducer from './UseReducer';
import UseReducerExample from "./UseReducerExample";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Fragment>
    <UseReducerExample />
    {/* <UseReducer /> */}
    {/* <UseReducerExample /> */}
    {/* </React.StrictMode> */}
  </Fragment>
);
