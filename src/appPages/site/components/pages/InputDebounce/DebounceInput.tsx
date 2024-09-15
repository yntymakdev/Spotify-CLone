"use client";
import { log } from "console";
import React, { ChangeEvent, useState } from "react";
import { DebounceInput as Input } from "react-debounce-input";
const DebounceInput = () => {
  const [render, setRender] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRender(e.target.value);
    console.log("rendering input count: ");
  };
  return (
    <div>
      <h5>{render}</h5>
      <Input
        minLength={3}
        debounceTimeout={300}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default DebounceInput;
