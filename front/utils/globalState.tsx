import * as React from "react";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "@/styles/ThemeConfig";

interface ToggleTypes {
  darkMode: {};
  theme?: {};
}
const LocalStateContext = React.createContext<ToggleTypes | null>(null);
const LocalStateProvider = LocalStateContext.Provider;

export const ToggleThemeStateProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  const darkMode = useDarkMode(true);

  const theme = darkMode.value ? darkTheme : lightTheme;
  console.log({ darkMode, theme });
  return (
    <LocalStateProvider value={{ darkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalStateProvider>
  );
};

export const useToggle = () => {
  const all = React.useContext(LocalStateContext);
  return all;
};
