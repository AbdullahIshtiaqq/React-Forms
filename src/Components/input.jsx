import React from "react";
import { useFormContext } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";

export default function Input({ id, name, label, type, classes, constraints }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label htmlFor={id}>
        {label}
        <span style={{ color: "red" }}>{constraints?.required && " *"}</span>
      </label>

      <br />

      <input
        id={id}
        type={type}
        className={classes}
        {...register(name, constraints)}
      />

      <p className="text-danger text-sm">{errors?.[name]?.message}</p>
    </>
  );
}
