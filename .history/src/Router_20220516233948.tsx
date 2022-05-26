import React from "react";
import { Routes, Route } from "react-router-dom";
import TopPage from "./component/TopPage";
import { ColorCeneration } from "./component/ColorGeneration/ColorGeneration";
import { BmiCalculation } from "./component/BmiCalculation/BmiCalculation";

export const Router = () => {
  return (
    <Routes>
      <Route path="/ColorCeneration" element={<ColorCeneration />} />
      <Route path="/ColorCeneration" element={<ColorCeneration />} />
      <Route path="/" element={<TopPage />} />
    </Routes>
  );
};
