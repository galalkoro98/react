// import ReactDOM from "react-dom";
// // import { gameRules } from "./rules";
// ReactDOM.render(<App />, document.getElementById("root"));
// Path: src/index.js
// Compare this snippet from src/rules.js:
// import { createRoot } from "react-dom/server";

import React from "react";
import MyComponent from "./App.js";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MyComponent />);
