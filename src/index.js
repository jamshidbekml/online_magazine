import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Product from "./Context/GetProduct";
import Value from "./Context/GetValue";
import { Data } from "./Context/GetData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Product>
        <Value>
          <Data>
            <App />
          </Data>
        </Value>
      </Product>
    </Router>
  </React.StrictMode>
);
