import React from "react";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Your Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your Password must be at least 8 characters",
                },
              })}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? "border-red-500" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label="Full Name" error={errors.fname}>
            <input
              {...register("fname", {
                required: "Full Name is required",
              })}
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter full name"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.fname ? "border-red-500" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label="Age" error={errors.age}>
            <input
              {...register("age", {
                required: "Age is required",
                max: {
                  value: 100,
                  message: "Age must be between 0 and 100",
                },
              })}
              type="number"
              name="age"
              id="age"
              placeholder="Enter age"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.age ? "border-red-500" : "border-gray-200"
              }`}
            />
          </Field>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="text-md text-white m-auto cursor-pointer p-1 border rounded-lg bg-purple-500">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};

export default RegistrationForm;
