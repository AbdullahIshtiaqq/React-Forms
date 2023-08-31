import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Column({ colClasses, children }) {
  return <div className={colClasses}>{children}</div>;
}
