import React from "react";
import "./style.css";
import { Input } from "../input/Input";
import Button from "../Button/Button";

export function AddItemSection() {
  return (
    <div className="task">
      <Input />
      <Button title="Add" />
    </div>
  );
}
