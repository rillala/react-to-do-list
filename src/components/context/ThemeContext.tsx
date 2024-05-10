// ThemeContext.js
import { createContext, useState, useMemo } from "react";
import { theme } from "../../assets/theme/theme"; // 確保導入路徑正確
import { secondTheme } from "../../assets/theme/secondTheme"; // 確保導入路徑正確

export const ThemeContext = createContext({});

export const CustomThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState("main");

  const changeTheme = () => {
    setThemeType((prevThemeType) =>
      prevThemeType === "main" ? "second" : "main"
    );
  };

  const currentTheme = themeType === "main" ? theme : secondTheme;

  const value = useMemo(
    () => ({ changeTheme, currentTheme, themeType }),
    [themeType]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
