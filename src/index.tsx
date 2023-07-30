import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "states/AppContextProvider";
import Modal from "react-modal";

require("typeface-work-sans");
require("typeface-source-sans-pro");

// Set the App element for react-modal
Modal.setAppElement("#root"); // Use the ID of your root element

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/fulcrum.ai-frontend">
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
