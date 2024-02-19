import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@clayui/css/src/scss/atlas.scss";
import "./index.scss";

const spritemap = "icons.svg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
