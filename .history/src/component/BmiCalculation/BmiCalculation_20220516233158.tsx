import React, { useState } from "react";
import { useBmiCalculation } from "../../hooks/useBmiCalculation";

export const BmiCalculation = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const useCalculation = useBmiCalculation();

  const handleName = (event: {
    target: { value: React.SetStateAction<number> };
  }) => {
    setHeight(event.target.value);
  };

  return (
    <>
      <h1>BMI計算</h1>
      <BmiCalculation />
    </>
  );
};
