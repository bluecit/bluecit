import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background: var(--primaryColor);
  padding: 2rem 10rem;
  color: white;
`;
function Footer() {
  return <FooterStyle>This is the footer</FooterStyle>;
}

export default Footer;
