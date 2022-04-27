import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./App";

import "./global.css";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
