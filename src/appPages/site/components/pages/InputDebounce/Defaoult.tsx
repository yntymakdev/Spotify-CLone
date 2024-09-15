"use client";
import { log } from "console";
import React, { ChangeEvent, useState } from "react";

const Defaoult = () => {
  const [render, setRender] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRender(e.target.value);
    console.log("rendering input count: ");
  };
  return (
    <div>
      <h5>{render}</h5>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Defaoult;
