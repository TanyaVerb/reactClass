import React from "react";
import "./style.css";

export function Input(props) {
  const { onChange, label } = props;
  return (
    <>
      <input
        onChange={onChange}
        type="text"
        id="add"
        placeholder="Task to be done..."
        value={label}
      />
    </>
  );
}
