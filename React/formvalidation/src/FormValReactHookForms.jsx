/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const FormValReactHookForms = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input
            type="text"
            name="age"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <select name="gender" {...register("gender", { required: true })}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValReactHookForms;
