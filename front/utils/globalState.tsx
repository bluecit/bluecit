import * as React from "react";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
const LocalStateContext = React.createContext(null);
const LocalStateProvider = LocalStateContext.Provider;
import { lightTheme, darkTheme } from "../Components/styles/ThemeConfig";

export const ToggleThemeStateProvider = ({ children }) => {
  const darkMode = useDarkMode(true);

  const theme = darkMode.value ? darkTheme : lightTheme;
  console.log({ darkMode, theme });
  return (
    <LocalStateProvider value={{ darkMode, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalStateProvider>
  );
};

export const useToggle = () => {
  const all = React.useContext(LocalStateContext);
  return all;
};
