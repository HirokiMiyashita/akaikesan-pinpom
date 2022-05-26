import React, { useState } from "react";

export const Carender = () => {
  const week = ["日", "月", "火", "水", "木", "金", "土"];
  const today = new Date();
  const [name, setName] = useState("");
  const date = new Date().getDate();

  const handleName = (event: any) => {
    setName(event.target.value);
  };
  console.log(name);
  // 月末だとずれる可能性があるため、1日固定で取得
  var showDate = new Date(today.getFullYear(), today.getMonth(), 1);
  return (
    <div>
      <input type="date" id="date" onChange={handleName} />
    </div>
  );
};
