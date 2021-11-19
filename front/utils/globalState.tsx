import * as React from "react";
import { ThemeProvider } from "styled-components";
const LocalStateContext = React.createContext(null);
const LocalStateProvider = LocalStateContext.Provider;
import { DarkTheme as ToggleThemeIcon } from "@styled-icons/fluentui-system-filled";
import { lightTheme, darkTheme } from "../Components/styles/ThemeConfig";

export const ToggleTheme = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    console.log("You clicked me");
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
    <ToggleThemeIcon
      onClick={toggleTheme}
      size='50'
      style={{ position: "absolute", top: 20, right: 20, zIndex: 100 }}
    />
  </ThemeProvider>;
};
