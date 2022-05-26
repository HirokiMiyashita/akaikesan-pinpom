import React from "react";
import { Routes, Route } from "react-router-dom";
import TopPage from "./component/TopPage";
import { ColorCeneration } from "./component/ColorGeneration/ColorGeneration";
import { BmiCalculation } from "./component/BmiCalculation/BmiCalculation";
import { TodoList } from "./component/TodoList/TodoList";
import { Carender } from "./component/Carender/Carender";

export const Router = () => {
  return (
    <Routes>
      <Route path="/ColorGeneration" element={<ColorCeneration />} />
      <Route path="/BmiCalculation" element={<BmiCalculation />} />
      <Route path="/TodoList" element={<TodoList />} />
      <Route path="/Carender" element={<Carender />} />
      <Route path="/" element={<TopPage />} />
    </Routes>
  );
};
