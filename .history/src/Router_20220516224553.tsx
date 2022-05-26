import React from "react";
import { Routes, Route } from "react-router-dom";
import TopPage from "./Components/TopPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
};
