import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 10rem;
`;

function Header() {
  return (
    <HeaderStyle>
      <h1>BlueCIT</h1>
      <Nav />
    </HeaderStyle>
  );
}

export default Header;
