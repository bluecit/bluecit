import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavStyles = styled.div`
  ul {
    display: flex;
    li {
      list-style: none;
      padding: 1.5rem;
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--grey_2);
      :hover {
        color: var(--secondaryColor);
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavStyles>
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
      </ul>
    </NavStyles>
  );
};

export default Nav;
