import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/Header.css";
import "./components/Products.css";
import "./components/Product.css";
import "./components/Loading.css";
import "./components/Cart.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
