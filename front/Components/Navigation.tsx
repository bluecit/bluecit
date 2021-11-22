import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import { SCREENS } from "./Responsive";
import { mobileNavStyles } from "@/styles/MobileNavStyles";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.md });
  if (isMobile) {
    return (
      <Menu styles={mobileNavStyles} right>
        <NavLinks />
      </Menu>
    );
  }
  return <NavLinks />;
};

export default Navigation;
