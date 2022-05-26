import React from "react";
import { Routes, Route } from "react-router-dom";
import TopPage from "";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
};
