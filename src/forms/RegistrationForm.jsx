import React from "react";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import NumberInput from "../components/NumberInput";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Your Basic Details">
          <Field label="Picture" error={errors.picture}>
            <input
              {...register("picture", {
                required: "Picture is required",
              })}
              type="file"
              id="picture"
              name="picture"
            />
          </Field>
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
            <Controller
              name="age"
              control={control}
              defaultValue={1}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  className={`p-2 border box-border w-full rounded-md ${
                    errors.age ? "border-red-500" : "border-gray-200"
                  }`}
                  {...field}
                />
              )}
              rules={{
                max: {
                  value: 100,
                  message: "Age can be between 0 and 100",
                },
              }}
            />
          </Field>
        </FieldSet>

        <FieldSet label="Enter Social Handles">
          {fields.map((field, index) => {
            return (
              <div
                className="flex justify-center items-center w-max"
                key={field.id}
              >
                <Field label="Social Name">
                  <input
                    {...register(`socials[${index}].name`)}
                    type="text"
                    name={`socials[${index}].name`}
                    id={`socials[${index}].name`}
                    placeholder="Enter age"
                    className="p-2 border box-border w-full rounded-md"
                  />
                </Field>
                <Field label="Social URL">
                  <input
                    {...register(`socials[${index}].url`)}
                    type="text"
                    name={`socials[${index}].url`}
                    id={`socials[${index}].url`}
                    placeholder="Enter URL"
                    className="p-2 border box-border w-full rounded-md"
                  />
                </Field>
                <button
                  className="mt-8 mr-2 text-md"
                  onClick={() => remove(index)}
                >
                  Delete
                </button>
              </div>
            );
          })}
          <button
            className="mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-1 m-auto"
            onClick={() => append({ name: "", url: "" })}
          >
            Add A Social Handle
          </button>
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
