import { GlobalStyles } from "./styles/ThemeConfig";
import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Index from "./Index";

const Page: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Page;
