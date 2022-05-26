import React, { useState } from "react";

export const BmiCalculation = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  return (
    <>
      <h1>BMI計算</h1>
      <p>
        身長：
        <input type="text" />
        cm
      </p>
    </>
  );
};
