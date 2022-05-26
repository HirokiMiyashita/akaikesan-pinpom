import React from "react";
import { Routes, Route } from "react-router-dom";
import TopPage from "./component/TopPage";
import { ColorCeneration } from "./component/ColorGeneration/ColorGeneration";

export const Router = () => {
  return (
    <Routes>
      <Route path="/Color" element={<TopPage />} />
      <Route path="/" element={<TopPage />} />
    </Routes>
  );
};
