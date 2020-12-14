import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";
import App from "./App";
import store from "./redux/store";
import "./index.scss";

store.subscribe(() => {
  console.log("store.getState(): ", store.getState());
});

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
