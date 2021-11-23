import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import { SCREENS } from "./Responsive";
import { Close as CloseIcon } from "@styled-icons/evil/";
import { Menu as OpenIcon } from "@styled-icons/feather/";
import styled from "styled-components";
import { mobileNavStyles } from "@/styles/MobileNavStyles";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.md });
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  if (isMobile) {
    // clicked ? OpenIcon : CloseIcon
    return (
      <div className='mobile'>
        <a onClick={handleClick}>
          {isClicked ? <OpenIcon size='50' /> : <CloseIcon size='50' />}
        </a>
      </div>
    );
  }
  return <NavLinks />;
};

export default Navigation;

{
  /* <Menu styles={mobileNavStyles} right>
<NavLinks />
</Menu> */
}
