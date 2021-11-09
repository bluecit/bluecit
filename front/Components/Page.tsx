import { GlobalStyles, MainContentStyles } from "./styles/GlobalStyles";
import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Index from "./Index";

const Page: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <MainContentStyles>{children}</MainContentStyles>
      <Footer />
    </div>
  );
};
export default Page;
