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
  @media (max-width: 640px) {
    ul {
      display: block;
    }
  }
`;

// const Mobile = styled.div`
//   position: relative;
//   background: ${(props) => props.background};
//   color: ;
// `;

const NavLinks = () => {
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
        <li>
          <Link href='/contacts'>Contacts</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default NavLinks;
