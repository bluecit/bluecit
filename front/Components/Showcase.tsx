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
  background: ${(prop) => prop.theme.background};
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1147%26quot%3b)' fill='none'%3e%3cpath d='M343.79 493.54a41.03 41.03 0 1 0-61.56 54.25z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1342.08 396.37a49.01 49.01 0 1 0 13.38-97.1z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M373.17 543.75 a8.36 8.36 0 1 0 16.72 0 a8.36 8.36 0 1 0 -16.72 0z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1094.8 211.85 a54.73 54.73 0 1 0 109.46 0 a54.73 54.73 0 1 0 -109.46 0z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M79.39 275.75L112.85 275.75L112.85 309.21L79.39 309.21z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1042.89 482.58L1043.82 482.58L1043.82 483.08L1042.89 483.08z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M774.05 387.1L819.1 387.1L819.1 438.92L774.05 438.92z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M522.96 487.11 a23.98 23.98 0 1 0 47.96 0 a23.98 23.98 0 1 0 -47.96 0z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M710.48 94.1a11.95 11.95 0 1 0-17.67 16.09z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M591.02 113.53L601.5 113.53L601.5 124.01L591.02 124.01z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M1216.84 528.05a17.59 17.59 0 1 0-33.01 12.17z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M614.32 376.75 a36.13 36.13 0 1 0 72.26 0 a36.13 36.13 0 1 0 -72.26 0z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1069.01 338.14L1109.28 338.14L1109.28 378.41L1069.01 378.41z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1309.31 367.03a51.02 51.02 0 1 0-12.23 101.31z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M319.97 319.91L329.28 319.91L329.28 373.67L319.97 373.67z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M775.63 206.89 a52.96 52.96 0 1 0 105.92 0 a52.96 52.96 0 1 0 -105.92 0z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M102.48 162.95 a24.25 24.25 0 1 0 48.5 0 a24.25 24.25 0 1 0 -48.5 0z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1351.49 414.81a5.02 5.02 0 1 0 9.76-2.38z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M391.67 428.11L434.52 428.11L434.52 434.83L391.67 434.83z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M804.59 304.42a44.81 44.81 0 1 0 24.71-86.15z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M1116.41 480.34L1150.53 480.34L1150.53 485.42L1116.41 485.42z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M985.96 221.66L1013.07 221.66L1013.07 274.11L985.96 274.11z' stroke='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M1437.11 219.59L1439.12 219.59L1439.12 264.04L1437.11 264.04z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M937.95 259a33.63 33.63 0 1 0-64.39-19.43z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M723.79 323.76 a49.67 49.67 0 1 0 99.34 0 a49.67 49.67 0 1 0 -99.34 0z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M491.96 287.8L504.34 287.8L504.34 300.18L491.96 300.18z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M1310.92 89.53L1357.21 89.53L1357.21 135.82L1310.92 135.82z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1235.59 338.89L1239.14 338.89L1239.14 342.44L1235.59 342.44z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1155.79 467.72L1186.48 467.72L1186.48 498.41L1155.79 498.41z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M946.18 409.65a47.62 47.62 0 1 0 21.44-92.8z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M239.58 434.31L248.96 434.31L248.96 443.69L239.58 443.69z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M453.94 58.06L506.06 58.06L506.06 110.18L453.94 110.18z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M560.88 179.95L594.42 179.95L594.42 213.49L560.88 213.49z' stroke='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1147'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"); */
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1208%26quot%3b)' fill='none'%3e%3cpath d='M1291.43 504.07L1323.19 504.07L1323.19 535.83L1291.43 535.83z' stroke='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M576.34 165.01a50.29 50.29 0 1 0-99.04 17.53z' fill='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M843.77 57.73L898.25 57.73L898.25 112.21L843.77 112.21z' fill='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M641.23 309.02 a34.7 34.7 0 1 0 69.4 0 a34.7 34.7 0 1 0 -69.4 0z' stroke='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M596.08 49.74a4.26 4.26 0 1 0-7.82-3.38z' fill='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M1063.94 227.07L1100.67 227.07L1100.67 259.42L1063.94 259.42z' fill='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M48.7 146.34a11.47 11.47 0 1 0 18.4 13.69z' fill='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M893.32 109.11L912.48 109.11L912.48 139.86L893.32 139.86z' fill='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M83.03 73.6 a27.85 27.85 0 1 0 55.7 0 a27.85 27.85 0 1 0 -55.7 0z' stroke='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M344.74 231.43 a13.19 13.19 0 1 0 26.38 0 a13.19 13.19 0 1 0 -26.38 0z' fill='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M225.23 501.06a51.01 51.01 0 1 0 67.98 76.07z' fill='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M1375.41 52.42L1427.8 52.42L1427.8 104.81L1375.41 104.81z' fill='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M939.53 61.48L985.75 61.48L985.75 100.94L939.53 100.94z' stroke='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M440.43 497.38 a8.05 8.05 0 1 0 16.1 0 a8.05 8.05 0 1 0 -16.1 0z' stroke='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M264.43 330.62L318.55 330.62L318.55 366L264.43 366z' stroke='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M1001.64 206.14 a18.37 18.37 0 1 0 36.74 0 a18.37 18.37 0 1 0 -36.74 0z' fill='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M1327.47 25.24L1333.34 25.24L1333.34 60.75L1327.47 60.75z' stroke='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M1283.15 205.55a13.56 13.56 0 1 0-26.15-7.17z' fill='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M680.28 335.13L712.77 335.13L712.77 380.01L680.28 380.01z' fill='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M530.78 441.02L577.69 441.02L577.69 487.93L530.78 487.93z' stroke='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M704.72 183.18a39.15 39.15 0 1 0-59.87 50.46z' fill='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M1192.32 296.55L1213.47 296.55L1213.47 317.7L1192.32 317.7z' stroke='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M947.51 409.93a44.7 44.7 0 1 0-61.22 65.15z' stroke='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M1221.38 236.62 a12.05 12.05 0 1 0 24.1 0 a12.05 12.05 0 1 0 -24.1 0z' stroke='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M995.41 85.39L1034.3 85.39L1034.3 104.16L995.41 104.16z' stroke='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M929.95 360.15L947.61 360.15L947.61 377.81L929.95 377.81z' stroke='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M705.27 145.6a42.31 42.31 0 1 0 38.07 75.57z' stroke='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M235.44 545.64L278.9 545.64L278.9 586.65L235.44 586.65z' fill='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M116.97 471.83L159.85 471.83L159.85 514.71L116.97 514.71z' fill='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M796.05 99.23L849.35 99.23L849.35 137.16L796.05 137.16z' stroke='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M442.45 377.32a47.81 47.81 0 1 0-26.31 91.93z' stroke='rgba(3%2c 37%2c 108%2c 0.5)'%3e%3c/path%3e%3cpath d='M726.41 437.46L762.71 437.46L762.71 477.95L726.41 477.95z' fill='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3cpath d='M851.15 529.71a27.86 27.86 0 1 0-54.27-12.63z' stroke='rgba(237%2c 29%2c 127%2c 0.4)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1208'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"); */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1257%26quot%3b)' fill='none'%3e%3cpath d='M981.13 498.01 a34.16 34.16 0 1 0 68.32 0 a34.16 34.16 0 1 0 -68.32 0z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M437.95 243.19L458.37 243.19L458.37 280.41L437.95 280.41z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M1125.7 509.52L1159.99 509.52L1159.99 543.81L1125.7 543.81z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M624.12 525.81L633.69 525.81L633.69 535.38L624.12 535.38z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M822.02 188.2a19.88 19.88 0 1 0-39.52 4.39z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M883.83 417.66L884.09 417.66L884.09 417.92L883.83 417.92z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M370.31 289 a27.57 27.57 0 1 0 55.14 0 a27.57 27.57 0 1 0 -55.14 0z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M756.08 428.38L798.62 428.38L798.62 472.67L756.08 472.67z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M1403.43 51.32L1434.75 51.32L1434.75 82.64L1403.43 82.64z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M461.33 283.65L513.83 283.65L513.83 294.27L461.33 294.27z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M1432.76 65.68L1473.41 65.68L1473.41 106.33L1432.76 106.33z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M291.33 73.54L297.38 73.54L297.38 101.89L291.33 101.89z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M1364.85 480.52a13.36 13.36 0 1 0 26.22-5.18z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M1039.03 248.47L1045.45 248.47L1045.45 284.52L1039.03 284.52z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M1396.05 298.13L1409.03 298.13L1409.03 313.67L1396.05 313.67z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M780.78 103.16L815.15 103.16L815.15 129.46L780.78 129.46z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M934.33 246.62L984.07 246.62L984.07 293.9L934.33 293.9z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M986.89 523.5L1013.91 523.5L1013.91 550.52L986.89 550.52z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M562.55 158.66a33.86 33.86 0 1 0 27.17-62.03z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M1348.81 92.11L1350.15 92.11L1350.15 146.98L1348.81 146.98z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M275.96 65.74 a45.28 45.28 0 1 0 90.56 0 a45.28 45.28 0 1 0 -90.56 0z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M242.71 335.55 a15.55 15.55 0 1 0 31.1 0 a15.55 15.55 0 1 0 -31.1 0z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M1339.53 192.99 a24.39 24.39 0 1 0 48.78 0 a24.39 24.39 0 1 0 -48.78 0z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M49.49 397.04L91.23 397.04L91.23 433.14L49.49 433.14z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M914.2 540.92 a21.01 21.01 0 1 0 42.02 0 a21.01 21.01 0 1 0 -42.02 0z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M582.78 184.43L620.35 184.43L620.35 222L582.78 222z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M424.19 358.04a41.66 41.66 0 1 0-37.8-74.25z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M393.22 55.27L411.15 55.27L411.15 73.2L393.22 73.2z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M1297.26 452.6a51.5 51.5 0 1 0-10.14 102.5z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M201.75 531.56L215.74 531.56L215.74 580.28L201.75 580.28z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M777.23 103.35L826.35 103.35L826.35 152.47L777.23 152.47z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M652.61 268.67a4.48 4.48 0 1 0 5.09-7.38z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M664.18 354.11L713.14 354.11L713.14 391.41L664.18 391.41z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1257'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
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

  color: ${({ theme }) => theme.text};
  text-align: center;
  width: 80%;
  h1 {
    font-size: 4.5rem;
    line-height: 60px;
    margin-bottom: 2rem;
  }
  p {
    font-size: 2rem;
    font-weight: 300;
    /* color: var(--grey_2); */
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
