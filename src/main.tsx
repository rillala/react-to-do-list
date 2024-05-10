import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/theme/theme";
import { secondTheme } from "./assets/theme/secondTheme.tsx";
import ErrorPage from "./pages/error-page.tsx";

// router
const errorElement = <ErrorPage />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement,
  },
]);

// theme type
const themeType = 1;
const currentTheme = themeType ? theme : secondTheme;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={currentTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
