import React from "react";
import { useFormContext } from "react-hook-form";

export default function Select({
  id,
  name,
  label,
  options,
  classes,
  constraints,
}) {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor={id}>
        {label}
        <span style={{ color: "red" }}>{constraints?.required && " *"}</span>
      </label>

      <br />

      <select id={id} className={classes} {...register(name, constraints)}>
        {options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
        ;
      </select>
    </>
  );
}
