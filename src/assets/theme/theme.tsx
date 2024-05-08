import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
    },
    error: {
      main: "#d32f2f",
      light: "#c62828",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
      disabled: "#666",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontSize: 14,
  },
  spacing: 4,
});
