import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import App from "./App";
import "./index.scss";

render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
