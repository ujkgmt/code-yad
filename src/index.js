import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import { store } from "./store/index";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
