import * as React from "react";
// import { useMediaQuery } from "react-responsive";
// import { slide as Menu } from "react-burger-menu";
import { SCREENS } from "./Responsive";
import { Close as CloseIcon } from "@styled-icons/evil/";
import { Menu as OpenIcon } from "@styled-icons/feather/";
import styled from "styled-components";
import { mobileNavStyles } from "@/styles/MobileNavStyles";
import NavLinks, { NavStyles, MobileStyles } from "./NavLinks";

const Navigation = () => {
  // const isMobile = useMediaQuery({ maxWidth: SCREENS.md });
  const isMobile = false;
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  if (isMobile) {
    return (
      <>
        <span onClick={handleClick}>
          {isClicked ? <CloseIcon size='50' /> : <OpenIcon size='50' />}
        </span>
        <MobileStyles>{isClicked && <NavLinks />}</MobileStyles>
      </>
    );
  }
  return (
    <NavStyles>
      <NavLinks />
    </NavStyles>
  );
};

export default Navigation;

{
  /* <Menu styles={mobileNavStyles} right>
<NavLinks />
</Menu> */
}
