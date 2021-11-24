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

export const MobileStyles = styled.div`
  background: blue;

  position: relative;

  color: ${(props) => props.theme.text};
  /* height: 500px; */
  ul {
    position: absolute;
    display: block;
    flex-direction: column;
    width: 40%;
    height: 300px;
    z-index: 1;
    background: blue;
    right: 40;
    top: 40;
    z-index: 100;

    /* margin-top: 10rem; */
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
