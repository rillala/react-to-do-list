import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/theme/theme";
import { secondTheme } from "./assets/theme/secondTheme.tsx";

const themeType = 1;

const currentTheme = themeType ? theme : secondTheme;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={currentTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
