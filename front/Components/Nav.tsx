import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavStyles = styled.div`
  ul {
    display: flex;
    padding: 1rem;
    li {
      list-style: none;
      padding: 1rem;
    }
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
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
          <Link href='/contacts'>Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
