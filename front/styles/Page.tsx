import styled from "styled-components";

export const PageHeading = styled.div`
  padding: var(--paddingLayout);
  background: linear-gradient(40deg, rgb(237, 29, 127), rgba(3, 37, 108));
  background-size: cover;
  h1 {
    color: var(--light_1);
    font-size: 4rem;
  }
  @media (max-width: 610px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const HeadingText = styled.p`
  font-size: 2rem;
  color: var(--light_1);
  padding: 1rem;
  @media (max-width: 610px) {
    p {
      font-size: 1.4rem;
    }
  }
`;

export const ServiceContainer = styled.div`
  position: relative;
  padding: var(--paddingLayout);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* width: 900px; */
  /* height: 600px; */
  background: #fff;
  margin: 3rem;

  @media (max-width: 1080px) {
    height: auto;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: #212121;
  transition: 0.3s linear;
  @media (max-width: 1080px) {
    padding: 40px;
    width: 100% !important;
    height: auto;
    text-align: center;
    overflow: hidden;
  }
`;

export const ImageStyle = styled.img`
  position: relative;
  width: 600px;
  transform: rotate(-30deg);
  left: -50px;
  transition: 0.9s linear;
  background-image: url("@/public/images/digital.jpg");
  background-repeat: no-repeat;
  @media (max-width: 1080px) {
    left: initial;
    max-width: 100%;
    transform: rotate(0deg);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 40px;
  @media (max-width: 1080px) {
    width: 100% !important;
    height: auto;
    padding: 20px;
  }
`;

export const ServiceHeading = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 2.4em;
  line-height: 1em;
  color: #444;
`;

export const P = styled.p`
  max-width: 85%;
  margin-left: 15%;
  color: #333;
  font-size: 15px;
  margin-bottom: 36px;
`;
