import React from "react";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    const user = { email: "x@example.com", password: "12345678" };

    const found =
      formData.email === user.email && formData.password === user.password;

    if (!found) {
      setError("root.random", {
        message: `User with email "${formData.email}" is not found`,
        type: "random",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
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
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="text-md text-white m-auto cursor-pointer p-1 border rounded-lg bg-purple-500">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
