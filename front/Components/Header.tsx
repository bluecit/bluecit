import * as React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Link from "next/link";
import Logo from "../public/images/Bluecit_logo.svg";
import Image from "next/image";
const HeaderStyle = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--paddingLayout);
  position: sticky;
  width: 100%;
  background-color: transparent;
  /* border-bottom: 2px solid var(--ofWhite); */
  top: 0;
  overflow: hidden;
  &.active {
    background-color: ${({ theme }) => theme.background};
    svg {
      fill: white;
    }
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    border-bottom: none;
    z-index: 1;
    h1 {
      color: var(--dark);
    }
    li {
      color: var(--dark);
    }
  }
  h1 {
    color: var(--greyDark);
  }

  /* button {
    border: none;
    margin: 2.5rem 0rem;
    padding: 1rem 4rem;
    border-radius: 6rem;
    font-size: 1.5rem;
    color: var(--light_2);
    background-color: var(--secondaryColor);
    :hover {
      color: var(--secondaryColor);
    }
  } */
`;

function Header() {
  const [headerColor, setHeaderColor] = React.useState(false);

  // Check if scrolling
  const changeHeaderColor = () => {
    if (window.scrollY > 80) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };
  typeof window !== "undefined" &&
    window.addEventListener("scroll", changeHeaderColor);

  return (
    <HeaderStyle className={headerColor ? "active" : ""}>
      <Link href='/'>
        <Image src={Logo} width='220px' height='80px' alt='BlueCIT Logo' />
      </Link>

      <Navigation />
    </HeaderStyle>
  );
}

export default Header;
