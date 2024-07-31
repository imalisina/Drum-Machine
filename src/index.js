import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import { ContextProvider } from "./container/Context";

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById("root")
);
