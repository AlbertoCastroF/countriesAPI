import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import { ContextProvider } from "./Context";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./components";
import "./Index.css";

//all the login contained in context.js is passed down to the main component with context provider, router for multiple pages app and globalStyles for general styles.
ReactDOM.render(
  <ContextProvider>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
