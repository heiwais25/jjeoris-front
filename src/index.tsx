import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Slices";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./axios";

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
