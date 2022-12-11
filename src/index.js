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
