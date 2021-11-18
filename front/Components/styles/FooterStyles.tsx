import styled from "styled-components";

export const FooterStyles = styled.footer`
  .footer {
    /* clip-path: ellipse(249% 100% at 57.96% 100%); */
    /* clip-path: ellipse(300% 100% at 205% 100%); */
    display: grid;
    grid-template-columns: 40% 20% 20% 20% 1fr;
    justify-content: center;
    align-content: center;
    background: var(--mainColor);
    padding: var(--paddingLayout);
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  /* @media only screen and (max-width: 1200px) {
  .footer {
    grid-template-columns: 40% 60%;
  }
} */

  @media only screen and (max-width: 960px) {
    .footer {
      grid-template-columns: 50% 50%;
    }
  }

  @media only screen and (max-width: 760px) {
    .footer {
      grid-template-columns: 100% !important;
    }
  }
  .footerMenu {
    color: #fff;
    padding-top: 1rem;
    li {
      list-style: none;
      color: var(--grey_1);
      font-weight: 400;
      font-size: 1.5rem;
    }
    h4 {
      text-transform: uppercase;
      font-size: 1.5rem;
    }
  }

  .social {
    background: var(--mainColor);
    padding-top: 1rem;
    padding-bottom: 4rem;
    ul {
      display: flex;
      justify-content: center;
      margin: 0rem;

      li {
        padding-right: 1rem;
        list-style: none;
      }
    }
  }
  .social .social ul .socialIcon {
    width: 40px;
    height: 40px;
    fill: var(--grey_1);
  }
  .socialIcon:hover {
    fill: var(--light_1);
  }

  .copyright {
    padding-bottom: 0.5rem;
    background: var(--mainColor);
    color: var(--grey_1);
    text-align: center;
  }
  .copyright p {
    margin: 0;
    padding: 1rem;
    font-size: 1.2rem;
  }
  .copyright a {
    color: #fff;
  }
  .footerAddress {
    padding-top: 1rem;
    color: var(--grey_1);
    font-size: 1rem;
  }

  .footerAddress h2 {
    padding-bottom: 0.3rem;
    font-size: 1.4rem;
    color: #fff;
  }
  .footerContact a {
    color: var(--grey_1);
  }
`;
