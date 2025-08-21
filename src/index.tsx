import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./styles/index.css";

var root = createRoot(document.getElementById('app') as Element);
root.render(<App></App>);