import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TeamsApp } from "./TeamsApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <TeamsApp />
    </React.StrictMode>
  </BrowserRouter>
);
