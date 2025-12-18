// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ParcelProvider } from "./context/ParcelContext";

// ⬇️ এখানে তোমার CSS file import করবে
import "./styles/index.css";      // যদি ফাইল src/styles/index.css হয়
// বা
// import "./index.css";         // যদি src/index.css হয়

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ParcelProvider>
        <App />
      </ParcelProvider>
    </BrowserRouter>
  </React.StrictMode>
);
