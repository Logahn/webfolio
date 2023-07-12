// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";

// import App from "./App";
// import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
  // document.getElementById("root")
);
