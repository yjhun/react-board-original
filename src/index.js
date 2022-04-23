import React from "react";
import ReactDOM from "react-dom/client";
import "styles/common.css";
import Board from "Board";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);
