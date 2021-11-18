import type { AppProps } from "next/app";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import Page from "../Components/Page";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "../Components/styles/ThemeConfig";
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState("light");
  const [isMounted, setIsMounted] = React.useState(false);
  const toggleTheme = (e) => {
    console.log(e);
    console.log("You clicked me");
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Change Theme</button>
      <Page>{isMounted && <Component {...pageProps} />}</Page>
    </ThemeProvider>
  );
}
export default MyApp;
