import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { blue } from "@mui/material/colors";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
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
