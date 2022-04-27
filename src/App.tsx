import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./views/About";
import { Home } from "./views/Home/Home";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
