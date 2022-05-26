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
      <table>
        <thead>
          <tr>
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
