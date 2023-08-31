import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Column from "./column";

export default function Row({ rowClasses, colClasses, columns }) {
  return (
    <div className={rowClasses}>
      {columns.map((value, index) => {
        return (
          <Column key={index} colClasses={colClasses[index]} children={value} />
        );
      })}
    </div>
  );
}
