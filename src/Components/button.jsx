import React from "react";

export default function Button({ classes, type, value }) {
  return (
    <button className={classes} type={type}>
      {value}
    </button>
  );
}
