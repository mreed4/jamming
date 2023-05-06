import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./assets/css/reset.css";
import "./assets/css/index.css";
import { AppProvider } from "./Components/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
