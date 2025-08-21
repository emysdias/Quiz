import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "@/pages";

import "./index.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
}
