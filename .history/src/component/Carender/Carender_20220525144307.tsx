import React, { useState } from "react";

export const Carender = () => {
  const [name, setName] = useState("");
  const [dates, setDates]: any = useState("");
  const date = new Date();
  const handleName = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };
  console.log(name);
  return (
    <div>
      <input type="date" onChange={handleName} />
      <div>{date}</div>
    </div>
  );
};
