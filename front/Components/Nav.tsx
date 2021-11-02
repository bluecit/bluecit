import * as React from "react";
import styled from "styled-components";
// Added staff

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
        <li>Home</li>
        <li>About Us</li>
        <li>Products</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
