import React from "react";
import { Routes, Route } from "react-router-dom";
import TopPage from "../component/TopPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/ColorGeneration" element={<TopPage />} />
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
};
