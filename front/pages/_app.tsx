import type { AppProps } from "next/app";
import * as React from "react";
import Page from "../Components/Page";
import { ToggleThemeStateProvider } from "../utils/globalState";
import { GlobalStyles } from "../Components/styles/ThemeConfig";

const toggleIconStyle = {
  position: "absolute",
  top: 20,
  right: 20,
  zIndex: 100,
};
function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ToggleThemeStateProvider>
      <GlobalStyles />
      <Page>{isMounted && <Component {...pageProps} />}</Page>
    </ToggleThemeStateProvider>
  );
}
export default MyApp;
