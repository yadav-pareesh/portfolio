import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import purple from "@mui/material/colors/purple";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: "#263238",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
