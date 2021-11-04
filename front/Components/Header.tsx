import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Link from "next/link";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 15rem;
  position: fixed;
  width: 100%;
  background-color: var(--light_1);
  top: 0;
  overflow: hidden;
  button {
    border: none;
    margin: 2.5rem 0rem;
    padding: 1rem 4rem;
    border-radius: 6rem;
    font-size: 1.5rem;
    color: var(--light_2);
    background-color: var(--primaryColor);
    :hover {
      color: var(--secondaryColor);
    }
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <h1>
        <Link href='/'> BlueCIT</Link>
      </h1>
      <Nav />
      <button>
        <Link href='/contacts'>Contacts</Link>
      </button>
    </HeaderStyle>
  );
}

export default Header;
