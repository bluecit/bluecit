import styled from "styled-components";

export const ServiceStyles = styled.div`
  background: var(--light_1_1);
  padding: var(--paddingLayout);

  h1 {
    color: var(--light_3);
    text-align: center;
  }

  .cardbox {
    display: grid;
    grid-template-columns: 50% 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .card {
    background: var(--light_1);
    border-radius: 7px;
    display: grid;
    grid-template-columns: 30% 70% 1fr;
  }
  .cardRight {
    padding: 1.5rem;
  }
  .cardRight a {
    color: var(--light_1);
    font-size: 1rem;
    background: rgba(84, 138, 196);
    border: none;
  }
  .cardRight a:hover {
    background: var(--primary-color);
  }
  .card h2 {
    color: var(--light_3);
    font-weight: 300;
  }
  .card span {
    color: var(--primary-color-light);
    font-weight: 700;
  }
  .cardLeft {
    /* background: linear-gradient(
      0deg,
      rgba(11, 88, 142, 0.9),
      rgba(84, 138, 196, 0.2)
    ),
    url('/assets/software.jpeg'); */

    background: linear-gradient(
      0deg,
      rgb(11, 88, 142),
      rgba(84, 138, 196, 0.3)
    );

    background-size: cover;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
  .cardLeft span {
    width: 100%;
    font-size: 4rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .card:hover {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    transition: all 600ms ease-in-out;
  }

  /* Mobile Responsive  */
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 960px) {
  }
  @media only screen and (max-width: 860px) {
    .cardbox {
      grid-template-columns: 100% !important;
    }
  }
  @media only screen and (max-width: 768px) {
    /* Responsive */
  }
  @media only screen and (max-width: 560px) {
    .cardLeft {
      display: none;
    }
    .card {
      grid-template-columns: 100%;
    }
  }
`;
