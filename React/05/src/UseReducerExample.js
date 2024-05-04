import React, { useReducer } from "react";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state, action) => {
  console.log(
    "At starting of reducer",
    "state => ",
    state,
    "action =>",
    action
  );
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_USER":
      return {
        ...state,
        data: state.data.filter((user) => user.id !== action.payload),
      };
    case "ADD_USER":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type: "FETCH_DATA_START" });
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
        console.log(data);
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
    } catch (error) {
      //   console.log(error);
      dispatch({ type: "FETCH_DATA_ERROR", payload: error.message });
    }
  };

  const deleteUser = (id) => {
    return () => {
      dispatch({ type: "DELETE_USER", payload: id });
    };
  };

  const addUser = (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  }
  return (
    <div>
      <h1>useReducer Example</h1>
      <button onClick={fetchData}>fetch Data</button>
      <button onClick={() => console.log(state)}>show data in console</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}
      <ul>
        {state.data.map((user) => (
          <li key={user.id}>
            {user.login} <button onClick={deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addUser({
            id: Math.random(),
            login: e.target.title.value,
          });
        }}
      >
        <input type="text" name="title" placeholder="Add new user" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default UseReducerExample;
