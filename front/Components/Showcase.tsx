import React from "react";
import Link from "next/link";
import styled from "styled-components";

const SVGStyles = styled.svg`
  width: 100%;
  background: cover;
  margin: 0 auto;
  z-index: -1;
`;

const ShowcaseBackground = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: -10rem;
  background: var(--mainColor);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1147%26quot%3b)' fill='none'%3e%3cpath d='M343.79 493.54a41.03 41.03 0 1 0-61.56 54.25z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1342.08 396.37a49.01 49.01 0 1 0 13.38-97.1z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M373.17 543.75 a8.36 8.36 0 1 0 16.72 0 a8.36 8.36 0 1 0 -16.72 0z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1094.8 211.85 a54.73 54.73 0 1 0 109.46 0 a54.73 54.73 0 1 0 -109.46 0z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M79.39 275.75L112.85 275.75L112.85 309.21L79.39 309.21z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1042.89 482.58L1043.82 482.58L1043.82 483.08L1042.89 483.08z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M774.05 387.1L819.1 387.1L819.1 438.92L774.05 438.92z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M522.96 487.11 a23.98 23.98 0 1 0 47.96 0 a23.98 23.98 0 1 0 -47.96 0z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M710.48 94.1a11.95 11.95 0 1 0-17.67 16.09z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M591.02 113.53L601.5 113.53L601.5 124.01L591.02 124.01z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M1216.84 528.05a17.59 17.59 0 1 0-33.01 12.17z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M614.32 376.75 a36.13 36.13 0 1 0 72.26 0 a36.13 36.13 0 1 0 -72.26 0z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1069.01 338.14L1109.28 338.14L1109.28 378.41L1069.01 378.41z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1309.31 367.03a51.02 51.02 0 1 0-12.23 101.31z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M319.97 319.91L329.28 319.91L329.28 373.67L319.97 373.67z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M775.63 206.89 a52.96 52.96 0 1 0 105.92 0 a52.96 52.96 0 1 0 -105.92 0z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M102.48 162.95 a24.25 24.25 0 1 0 48.5 0 a24.25 24.25 0 1 0 -48.5 0z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1351.49 414.81a5.02 5.02 0 1 0 9.76-2.38z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M391.67 428.11L434.52 428.11L434.52 434.83L391.67 434.83z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M804.59 304.42a44.81 44.81 0 1 0 24.71-86.15z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M1116.41 480.34L1150.53 480.34L1150.53 485.42L1116.41 485.42z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M985.96 221.66L1013.07 221.66L1013.07 274.11L985.96 274.11z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M1437.11 219.59L1439.12 219.59L1439.12 264.04L1437.11 264.04z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M937.95 259a33.63 33.63 0 1 0-64.39-19.43z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M723.79 323.76 a49.67 49.67 0 1 0 99.34 0 a49.67 49.67 0 1 0 -99.34 0z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M491.96 287.8L504.34 287.8L504.34 300.18L491.96 300.18z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M1310.92 89.53L1357.21 89.53L1357.21 135.82L1310.92 135.82z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1235.59 338.89L1239.14 338.89L1239.14 342.44L1235.59 342.44z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1155.79 467.72L1186.48 467.72L1186.48 498.41L1155.79 498.41z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M946.18 409.65a47.62 47.62 0 1 0 21.44-92.8z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M239.58 434.31L248.96 434.31L248.96 443.69L239.58 443.69z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M453.94 58.06L506.06 58.06L506.06 110.18L453.94 110.18z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M560.88 179.95L594.42 179.95L594.42 213.49L560.88 213.49z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1147'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  z-index: -1;
  position: relative;
  max-height: 70vh;
`;

const ShowcaseArea = styled.div`
  position: absolute;
  padding: var(--paddingLayout);
  top: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShowcaseText = styled.div`
  /* background: rgba(0, 0, 0, 0.9); */

  color: white;
  text-align: center;
  width: 80%;
  h1 {
    color: var(--light_2);
    font-size: 4.5rem;
    line-height: 60px;
    margin-bottom: 2rem;
  }
  p {
    font-size: 2rem;
    font-weight: 400;
  }
  button {
    margin: 0 auto;
    display: block;
  }
  @media (max-width: 1050px) {
    width: 100% !important;
    h1 {
      font-size: 3.5rem;
    }
    /* p {
      font-size: 1.5rem;
    }
    button {
      font-size: 1.5rem;
    } */
  }
  @media (max-width: 850px) {
    h1 {
      font-size: 3rem;
    }
    p {
      display: none;
    }
  }
  @media (max-width: 610px) {
    width: 100% !important;
    h1 {
      font-size: 2rem;
    }
  }
`;
const ShowcaseIcon = styled.div``;
function Showcase() {
  return (
    <>
      <ShowcaseBackground />
      <ShowcaseArea>
        <ShowcaseText>
          <h1>Your Cybersecurity and Digital Transformation Partner</h1>
          <p>
            We are an innovative internet security & Software development
            consulting fırm that is dedicated to provide high quality services,
            strategic solutions, technical consulting, and data protection to
            businesses and organizations
          </p>
          <button className='btn'>
            <Link href='/contacts'>Explore More</Link>
          </button>
        </ShowcaseText>
      </ShowcaseArea>
    </>
  );
}

export default Showcase;
