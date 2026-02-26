import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/react-homepage">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
