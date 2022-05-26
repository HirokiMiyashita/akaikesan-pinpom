import React, { useState } from "react";
import { useBmiCalculation } from "../../hooks/useBmiCalculation";

export const BmiCalculation = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const handleName = (event: any): void => {
    setHeight(event.target.value);
    setWeight(event.target.value);
    Calculation(height, weight);
  };

  const Calculation = (height: number, weight: number) => {
    const bmi = weight / (height / 100) ** 2;
    setBmi(bmi);
    return bmi;
  };

  return (
    <>
      <h1>BMI計算</h1>
      <p>
        身長：
        <input type="text" />
        cm
      </p>
      <p>
        体重：
        <input type="text" />
        kg
      </p>
      <p>
        BMI：
        <input type="text" readOnly />
      </p>
      <button onClick={handleName}>計算</button>
    </>
  );
};
