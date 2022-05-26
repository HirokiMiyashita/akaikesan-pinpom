import React from "react";
import { Routes, Route } from "react-router-dom";
import TopPage from "./component/TopPage";
import { ColorCeneration } from "./component/ColorGeneration/ColorGeneration";
import { BmiCalculation } from "./component/BmiCalculation/BmiCalculation";
import { TodoList } from "./component/TodoList/TodoList";

export const Router = () => {
  return (
    <Routes>
      <Route path="/ColorGeneration" element={<ColorCeneration />} />
      <Route path="/BmiCalculation" element={<BmiCalculation />} />
      <Route path="/" element={<TopPage />} />
    </Routes>
  );
};
