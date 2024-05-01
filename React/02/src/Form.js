import React, { useState } from "react";

const Form = () => {
  //   ! Multiple States with Multiple Inputs States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    //* Here, see  in the console the structure of this event object.
    console.log(e);
    //* We can get the values of different inputs using e.target with its specific index.
    console.log(e.target[0].name, e.target[0].value);
    console.log(e.target[1].name, e.target[1].value);
    console.log(e.target[2].name, e.target[2].value);
    e.preventDefault();
    // console.log(name, email, password);
  };
  //! Multiple States with Single Inputs States
  //! Single State with object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    //! First way of doing it
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
    //! Second way of doing it with destructuring
    const { name, value } = e.target;
    setFormData({
      ...formData, // spread operator is used here to copy the previous state
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <form> */}
      <label htmlFor="">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}
        />
      </label>
      <label htmlFor="">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
        />
      </label>
      <label htmlFor="">
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
