import { createTheme } from "@mui/material/styles";

export const secondTheme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1", // 深藍色，比原始 "#1976d2" 更深
      light: "#1565c0", // 較深的亮藍色，比原始 "#42a5f5" 更深
    },
    secondary: {
      main: "#6a1b9a", // 深紫色，比原始 "#9c27b0" 更深
      light: "#8e24aa", // 較深的亮紫色，比原始 "#ba68c8" 更深
    },
    error: {
      main: "#b71c1c", // 深紅色，比原始 "#d32f2f" 更深
      light: "#c2185b", // 較深的亮紅色，比原始 "#c62828" 更深
    },
    text: {
      primary: "#fff", // 白色，對比原始的黑色 "#000"
      secondary: "#000", // 黑色，對比原始的白色 "#fff"
      disabled: "#424242", // 深灰色，比原始的 "#666" 更深，提高對比
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontSize: 14,
  },
  spacing: 4,
});
