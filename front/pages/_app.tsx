import type { AppProps } from "next/app";
import * as React from "react";
// import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
// import { DarkTheme as ToggleThemeIcon } from "@styled-icons/fluentui-system-filled";
import Page from "../Components/Page";
import { ToggleThemeStateProvider, useToggle } from "../utils/globalState";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "../Components/styles/ThemeConfig";

const toggleIconStyle = {
  position: "absolute",
  top: 20,
  right: 20,
  zIndex: 100,
};
function MyApp({ Component, pageProps }: AppProps) {
  // const { theme } = useToggle();
  // const darkMode = useDarkMode(true);

  // const theme = darkMode.value ? darkTheme : lightTheme;
  // const [theme, setTheme] = React.useState("light");
  const [isMounted, setIsMounted] = React.useState(false);
  // const toggleTheme = () => {
  //   console.log("You clicked me");
  //   theme == "light" ? setTheme("dark") : setTheme("light");
  // };
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  // theme={theme == "light" ? lightTheme : darkTheme}
  return (
    <ToggleThemeStateProvider>
      <GlobalStyles />
      {/* <ToggleThemeIcon
        onClick={toggleTheme}
        size='50'
        style={{ position: "absolute", top: 20, right: 20, zIndex: 100 }}
      /> */}

      <Page>{isMounted && <Component {...pageProps} />}</Page>
    </ToggleThemeStateProvider>
  );
}
export default MyApp;
