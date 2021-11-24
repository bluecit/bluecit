import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

export const NavStyles = styled.div`
  ul {
    display: flex;
    li {
      list-style: none;
      padding: 1.5rem;
      font-size: 1.7rem;
      font-weight: 500;
      color: ${({ theme }) => theme.text};
      :hover {
        color: var(--secondaryColor);
      }
    }
  }
`;

export const MobileStyles = styled.div`
  background: blue;
  position: absolute;
  color: yellow;
  width: 40%;
  height: 300px;
  z-index: 1;
  left: 40;
  top: 40;
  z-index: 100;
  ul {
    display: flex;
    flex-direction: column;

    /* margin-top: 10rem; */
    li {
      list-style: none;
      padding: 1.5rem;
      font-size: 1.7rem;
      font-weight: 500;
      color: red;
      :hover {
        color: yellow;
      }
    }
  }
`;

const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link href='/about'>About Us </Link>
      </li>
      <li>
        <Link href='/products'>Products</Link>
      </li>
      <li>
        <Link href='/services'>Services</Link>
      </li>
      <li>
        <Link href='/contacts'>Contacts</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
