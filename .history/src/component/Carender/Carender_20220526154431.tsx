import React, { useState } from "react";

export const Carender = () => {
  const week = ["日", "月", "火", "水", "木", "金", "土"];
  const today = new Date();
  const [name, setName] = useState("");
  const date = new Date().getDate();

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="date" id="date" onchange={handleName} />
    </div>
  );
};
