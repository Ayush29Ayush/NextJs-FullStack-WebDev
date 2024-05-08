/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";

const FormVal = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");

  const [errors, setErrors] = React.useState({}); // initial state is an empty object

  const ValidationForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!age) {
      errors.age = "Age is required";
    } else if (isNaN(age)) {
      errors.age = "Age must be a number";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    // console.log("Form Submitted");
    e.preventDefault();
    // console.log(e);
    const validationErrors = ValidationForm();
    console.log(validationErrors);
    // setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted Successfully");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}

          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p>{errors.gender}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormVal;
