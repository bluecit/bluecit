import * as React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Link from "next/link";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 15rem;
  position: sticky;
  width: 100%;
  background-color: transparent;
  /* border-bottom: 2px solid var(--ofWhite); */
  top: 0;
  overflow: hidden;
  &.active {
    background-color: white;
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

  button {
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
  }
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
      <h1>
        <Link href='/'> BLUECIT</Link>
      </h1>
      <Nav />
      <button className='btn'>
        <Link href='/contacts'>Contacts</Link>
      </button>
    </HeaderStyle>
  );
}

export default Header;
