import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@clayui/css/lib/css/atlas.css";
import "./index.css";

const spritemap = "icons.svg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
