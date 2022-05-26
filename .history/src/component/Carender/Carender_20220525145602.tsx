import React, { useState } from "react";

export const Carender = () => {
  const [name, setName] = useState("");
  const date = new Date().getDate();

  const createCalendar = () => {
    const calendar = [];
    for (let i = 0; i < date; i++) {
      calendar.push(i);
    }
    return calendar;
  };
  console.log(createCalendar());
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
      <button onClick={createCalendar}>表示</button>
      {calendar.map((calendar) => (
        <p>{calendar}</p>
      ))}
    </div>
  );
};
