import type { AppProps } from "next/app";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme as ToggleThemeIcon } from "@styled-icons/fluentui-system-filled";
import Page from "../Components/Page";

import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "../Components/styles/ThemeConfig";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState("light");
  const [isMounted, setIsMounted] = React.useState(false);
  const toggleTheme = () => {
    console.log("You clicked me");
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ToggleThemeIcon
        onClick={toggleTheme}
        size='50'
        style={{ position: "absolute", top: 20, right: 20, zIndex: 100 }}
      />

      <Page>{isMounted && <Component {...pageProps} />}</Page>
    </ThemeProvider>
  );
}
export default MyApp;
