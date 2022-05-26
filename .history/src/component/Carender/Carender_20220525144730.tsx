import React, { useState } from "react";

export const Carender = () => {
  const [name, setName] = useState("");
  const date = new Date();
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  console.log(date);
  const handleName = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };
  console.log(name);
  return (
    <div>
      <input type="date" onChange={handleName} />
    </div>
  );
};
