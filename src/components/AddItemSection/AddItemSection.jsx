import React from "react";
import "./style.css";
import { Input } from "../input/Input";
import Button from "../Button/Button";

export function AddItemSection({ onClick, onChange, label, title }) {
  return (
    <div className="task">
      <Input onChange={onChange} label={label} />
      <Button title={title} onClick={onClick} />
    </div>
  );
}
