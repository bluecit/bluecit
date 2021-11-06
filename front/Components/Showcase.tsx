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
  /* background: var(--primary-color); */
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1062%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1063)'%3e%3c/rect%3e%3cpath d='M1209.89 259.32L1247.13 259.32L1247.13 271.02L1209.89 271.02z' stroke='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M297.9 83.65 a34.69 34.69 0 1 0 69.38 0 a34.69 34.69 0 1 0 -69.38 0z' stroke='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3cpath d='M1135.55 538.39a34 34 0 1 0-19.25-65.22z' stroke='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M1382.98 214.94L1415.48 214.94L1415.48 247.44L1382.98 247.44z' fill='rgba(11%2c 88%2c 142%2c 1)'%3e%3c/path%3e%3cpath d='M232.22 135.15L235.86 135.15L235.86 138.79L232.22 138.79z' fill='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3cpath d='M986.41 88.11L1040.26 88.11L1040.26 141.96L986.41 141.96z' stroke='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3cpath d='M519.62 74.07L539.37 74.07L539.37 109.15L519.62 109.15z' fill='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M16.02 247.46a19.49 19.49 0 1 0 29.41 25.58z' fill='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M6.76 554.94L40.56 554.94L40.56 559.8L6.76 559.8z' fill='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M1044.75 86.07L1100.18 86.07L1100.18 105.95L1044.75 105.95z' fill='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3cpath d='M194.7 248.24L240.5 248.24L240.5 271.62L194.7 271.62z' fill='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M310.25 174.08a1.63 1.63 0 1 0-1.13-3.05z' stroke='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3cpath d='M616.58 479.96L631.56 479.96L631.56 494.94L616.58 494.94z' stroke='rgba(11%2c 88%2c 142%2c 1)'%3e%3c/path%3e%3cpath d='M600.82 189.92L616.59 189.92L616.59 223.5L600.82 223.5z' fill='rgba(11%2c 88%2c 142%2c 1)'%3e%3c/path%3e%3cpath d='M126.63 447.73 a50.04 50.04 0 1 0 100.08 0 a50.04 50.04 0 1 0 -100.08 0z' fill='rgba(11%2c 88%2c 142%2c 1)'%3e%3c/path%3e%3cpath d='M586.17 507.05L594.47 507.05L594.47 515.35L586.17 515.35z' fill='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3cpath d='M236.58 293.58L256.49 293.58L256.49 313.49L236.58 313.49z' fill='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M909.44 486.95a14.59 14.59 0 1 0-29.16 1.1z' stroke='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M1301.5 243.96a28.29 28.29 0 1 0-8.43 55.95z' fill='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3cpath d='M477.22 547.69L485.1 547.69L485.1 562.18L477.22 562.18z' fill='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M1243.62 475.88L1286.52 475.88L1286.52 489.13L1243.62 489.13z' fill='rgba(11%2c 88%2c 142%2c 1)'%3e%3c/path%3e%3cpath d='M1196.39 368.53a8.48 8.48 0 1 0-16.74-2.78z' stroke='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3cpath d='M902.76 113.51a33.38 33.38 0 1 0-46.2 48.19z' stroke='rgba(11%2c 88%2c 142%2c 1)'%3e%3c/path%3e%3cpath d='M953.64 365.1 a7.6 7.6 0 1 0 15.2 0 a7.6 7.6 0 1 0 -15.2 0z' fill='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M820.17 128.52L861.41 128.52L861.41 169.76L820.17 169.76z' fill='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3cpath d='M948.29 121.51L962.38 121.51L962.38 135.6L948.29 135.6z' stroke='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M135.6 463.42L137.83 463.42L137.83 465.65L135.6 465.65z' fill='rgba(11%2c 88%2c 142%2c 1)'%3e%3c/path%3e%3cpath d='M886.27 64.79L896.99 64.79L896.99 75.51L886.27 75.51z' stroke='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3cpath d='M468.46 356.51L513.72 356.51L513.72 401.77L468.46 401.77z' stroke='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3cpath d='M100.55 478.18L132.98 478.18L132.98 531.18L100.55 531.18z' fill='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M869.71 441.48L881.53 441.48L881.53 453.3L869.71 453.3z' fill='rgba(11%2c 88%2c 142%2c 1)'%3e%3c/path%3e%3cpath d='M566.51 310.58a46.55 46.55 0 1 0 83.22-41.75z' stroke='rgba(16%2c 131%2c 213%2c 1)'%3e%3c/path%3e%3cpath d='M834.99 344.08 a31.74 31.74 0 1 0 63.48 0 a31.74 31.74 0 1 0 -63.48 0z' fill='rgba(222%2c 160%2c 30%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1062'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1063'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(2%2c 14%2c 29%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"); */
  /* background: var(--primary-color-lighter); */
  /* clip-path: polygon(100% 0, 100% 65%, 0 100%, 0 0); */
  //background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask3038%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath3039%26quot%3b)' x='503.93' y='-17.61' fill='url(%23SvgjsPattern3040)' transform='rotate(180.76%2c 533.93%2c 12.39)'%3e%3c/rect%3e%3cpath d='M1402.6699999999998 148.88 L1286.76 144.28L1386.399150507251 104.89584949274888z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M499.3 202.01a5.6 5.6 0 1 0 11.03-1.9 5.6 5.6 0 1 0-11.03 1.9zM515.06 199.29a5.6 5.6 0 1 0 11.04-1.91 5.6 5.6 0 1 0-11.04 1.91zM530.83 196.56a5.6 5.6 0 1 0 11.03-1.9 5.6 5.6 0 1 0-11.03 1.9zM546.59 193.84a5.6 5.6 0 1 0 11.04-1.9 5.6 5.6 0 1 0-11.04 1.9z' stroke='rgba(237%2c 29%2c 127%2c 1)' stroke-width='2.68' stroke-dasharray='2%2c 2'%3e%3c/path%3e%3cpath d='M8.69 522.7L18 513.91 28.62 521.06 37.93 512.26 48.55 519.41 57.86 510.62 68.48 517.77M9.35 530.68L18.65 521.88 29.28 529.03 38.59 520.23 49.21 527.38 58.52 518.59 69.14 525.74M10 538.65L19.31 529.85 29.94 537 39.24 528.21 49.87 535.36 59.18 526.56 69.8 533.71' stroke='rgba(237%2c 29%2c 127%2c 1)' stroke-width='2.61'%3e%3c/path%3e%3crect width='331.36' height='331.36' clip-path='url(%26quot%3b%23SvgjsClipPath3041%26quot%3b)' x='120.3' y='279.28' fill='url(%23SvgjsPattern3042)' transform='rotate(179.94%2c 285.98%2c 444.96)'%3e%3c/rect%3e%3crect width='127.8' height='127.8' clip-path='url(%26quot%3b%23SvgjsClipPath3043%26quot%3b)' x='1184.17' y='121.47' fill='url(%23SvgjsPattern3044)' transform='rotate(260.77%2c 1248.07%2c 185.37)'%3e%3c/rect%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath3045%26quot%3b)' x='467.34' y='13.52' fill='url(%23SvgjsPattern3046)' transform='rotate(216.01%2c 497.34%2c 43.52)'%3e%3c/rect%3e%3cpath d='M985.2 103.39a5.6 5.6 0 1 0-0.59-11.19 5.6 5.6 0 1 0 0.59 11.19zM984.36 87.41a5.6 5.6 0 1 0-0.58-11.18 5.6 5.6 0 1 0 0.58 11.18zM983.53 71.43a5.6 5.6 0 1 0-0.59-11.18 5.6 5.6 0 1 0 0.59 11.18zM982.69 55.45a5.6 5.6 0 1 0-0.59-11.18 5.6 5.6 0 1 0 0.59 11.18z' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/path%3e%3ccircle r='46.666666666666664' cx='1154.14' cy='96.96' stroke='rgba(3%2c 37%2c 108%2c 1)' stroke-width='1' stroke-dasharray='3%2c 2'%3e%3c/circle%3e%3cpath d='M1188.54 132.01a5.6 5.6 0 1 0 4.34 10.32 5.6 5.6 0 1 0-4.34-10.32zM1194.74 146.76a5.6 5.6 0 1 0 4.35 10.32 5.6 5.6 0 1 0-4.35-10.32zM1200.95 161.5a5.6 5.6 0 1 0 4.34 10.33 5.6 5.6 0 1 0-4.34-10.33zM1207.15 176.25a5.6 5.6 0 1 0 4.35 10.32 5.6 5.6 0 1 0-4.35-10.32zM1161.38 108.72a5.6 5.6 0 1 0 4.34 10.32 5.6 5.6 0 1 0-4.34-10.32zM1167.59 123.47a5.6 5.6 0 1 0 4.34 10.32 5.6 5.6 0 1 0-4.34-10.32zM1173.79 138.21a5.6 5.6 0 1 0 4.34 10.33 5.6 5.6 0 1 0-4.34-10.33zM1180 152.96a5.6 5.6 0 1 0 4.34 10.32 5.6 5.6 0 1 0-4.34-10.32zM1134.22 85.43a5.6 5.6 0 1 0 4.34 10.32 5.6 5.6 0 1 0-4.34-10.32zM1140.43 100.18a5.6 5.6 0 1 0 4.34 10.32 5.6 5.6 0 1 0-4.34-10.32zM1146.63 114.92a5.6 5.6 0 1 0 4.35 10.33 5.6 5.6 0 1 0-4.35-10.33zM1152.84 129.67a5.6 5.6 0 1 0 4.34 10.32 5.6 5.6 0 1 0-4.34-10.32z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M600.39 550.1 L784.76 596.8299999999999L790.2148326224598 475.82516737754025z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3crect width='372' height='372' clip-path='url(%26quot%3b%23SvgjsClipPath3047%26quot%3b)' x='400.69' y='105.49' fill='url(%23SvgjsPattern3048)' transform='rotate(72.45%2c 586.69%2c 291.49)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask3038'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='60' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern3040'%3e%3crect width='60' height='3' x='0' y='0' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/rect%3e%3crect width='60' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath3039'%3e%3ccircle r='15' cx='533.93' cy='12.39'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='8.72' height='8.72' patternUnits='userSpaceOnUse' id='SvgjsPattern3042'%3e%3cpath d='M0 8.72L4.36 0L8.72 8.72' stroke='rgba(237%2c 29%2c 127%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath3041'%3e%3ccircle r='82.84' cx='285.98' cy='444.96'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='127.8' height='12.78' patternUnits='userSpaceOnUse' id='SvgjsPattern3044'%3e%3crect width='127.8' height='6.39' x='0' y='0' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/rect%3e%3crect width='127.8' height='6.39' x='0' y='6.39' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath3043'%3e%3ccircle r='31.95' cx='1248.07' cy='185.37'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern3046'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(3%2c 37%2c 108%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath3045'%3e%3ccircle r='15' cx='497.34' cy='43.52'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='372' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern3048'%3e%3crect width='372' height='3' x='0' y='0' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/rect%3e%3crect width='372' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath3047'%3e%3ccircle r='93' cx='586.69' cy='291.49'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask3049%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M872.86 348.07a5.6 5.6 0 1 0 6.34 9.23 5.6 5.6 0 1 0-6.34-9.23zM881.92 361.25a5.6 5.6 0 1 0 6.34 9.23 5.6 5.6 0 1 0-6.34-9.23zM890.98 374.44a5.6 5.6 0 1 0 6.34 9.23 5.6 5.6 0 1 0-6.34-9.23zM900.04 387.63a5.6 5.6 0 1 0 6.34 9.23 5.6 5.6 0 1 0-6.34-9.23z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M745.95 535.97a5.6 5.6 0 1 0-11.18-0.58 5.6 5.6 0 1 0 11.18 0.58zM729.97 535.13a5.6 5.6 0 1 0-11.18-0.58 5.6 5.6 0 1 0 11.18 0.58zM713.99 534.3a5.6 5.6 0 1 0-11.18-0.59 5.6 5.6 0 1 0 11.18 0.59zM698.02 533.46a5.6 5.6 0 1 0-11.19-0.59 5.6 5.6 0 1 0 11.19 0.59zM778.74 521.67a5.6 5.6 0 1 0-11.18-0.59 5.6 5.6 0 1 0 11.18 0.59zM762.77 520.83a5.6 5.6 0 1 0-11.19-0.58 5.6 5.6 0 1 0 11.19 0.58zM746.79 519.99a5.6 5.6 0 1 0-11.19-0.58 5.6 5.6 0 1 0 11.19 0.58zM730.81 519.16a5.6 5.6 0 1 0-11.18-0.59 5.6 5.6 0 1 0 11.18 0.59zM811.54 507.37a5.6 5.6 0 1 0-11.19-0.59 5.6 5.6 0 1 0 11.19 0.59zM795.56 506.53a5.6 5.6 0 1 0-11.18-0.59 5.6 5.6 0 1 0 11.18 0.59zM779.58 505.69a5.6 5.6 0 1 0-11.18-0.59 5.6 5.6 0 1 0 11.18 0.59zM763.6 504.85a5.6 5.6 0 1 0-11.18-0.58 5.6 5.6 0 1 0 11.18 0.58z' stroke='rgba(3%2c 37%2c 108%2c 1)' stroke-width='2.77'%3e%3c/path%3e%3crect width='246.24' height='246.24' clip-path='url(%26quot%3b%23SvgjsClipPath3050%26quot%3b)' x='1309.11' y='312.06' fill='url(%23SvgjsPattern3051)' transform='rotate(184.47%2c 1432.23%2c 435.18)'%3e%3c/rect%3e%3cpath d='M926.96 458.12L925.88 445.36 938.1 441.51 937.03 428.75 949.24 424.9 948.17 412.14 960.39 408.29M933.6 462.57L932.53 449.81 944.74 445.97 943.67 433.21 955.89 429.36 954.81 416.6 967.03 412.75M940.24 467.03L939.17 454.27 951.39 450.42 950.31 437.66 962.53 433.82 961.46 421.05 973.67 417.21' stroke='rgba(3%2c 37%2c 108%2c 1)' stroke-width='1.36'%3e%3c/path%3e%3cpath d='M906.8499999999999 263.03 L936.49 327.49L954.5992974623275 262.3307025376725z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3ccircle r='46.666666666666664' cx='1267.69' cy='423.83' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/circle%3e%3cpath d='M999.8 176.39a5.6 5.6 0 1 0-10.53-3.82 5.6 5.6 0 1 0 10.53 3.82zM984.76 170.93a5.6 5.6 0 1 0-10.53-3.82 5.6 5.6 0 1 0 10.53 3.82zM969.72 165.48a5.6 5.6 0 1 0-10.53-3.82 5.6 5.6 0 1 0 10.53 3.82zM954.68 160.02a5.6 5.6 0 1 0-10.53-3.81 5.6 5.6 0 1 0 10.53 3.81zM1035.34 172.25a5.6 5.6 0 1 0-10.53-3.82 5.6 5.6 0 1 0 10.53 3.82zM1020.3 166.8a5.6 5.6 0 1 0-10.53-3.82 5.6 5.6 0 1 0 10.53 3.82zM1005.26 161.34a5.6 5.6 0 1 0-10.53-3.81 5.6 5.6 0 1 0 10.53 3.81zM990.22 155.89a5.6 5.6 0 1 0-10.53-3.82 5.6 5.6 0 1 0 10.53 3.82zM1070.88 168.12a5.6 5.6 0 1 0-10.53-3.82 5.6 5.6 0 1 0 10.53 3.82zM1055.84 162.66a5.6 5.6 0 1 0-10.53-3.81 5.6 5.6 0 1 0 10.53 3.81zM1040.79 157.21a5.6 5.6 0 1 0-10.52-3.82 5.6 5.6 0 1 0 10.52 3.82zM1025.75 151.76a5.6 5.6 0 1 0-10.53-3.82 5.6 5.6 0 1 0 10.53 3.82z' fill='rgba(3%2c 37%2c 108%2c 1)'%3e%3c/path%3e%3cpath d='M1046.72 112.93L1033.91 112.73 1031.3 100.19 1018.49 99.99 1015.88 87.46 1003.07 87.25 1000.46 74.72M1051.81 106.76L1039.01 106.56 1036.39 94.03 1023.59 93.82 1020.97 81.29 1008.17 81.09 1005.56 68.55' stroke='rgba(237%2c 29%2c 127%2c 1)' stroke-width='1.57' stroke-dasharray='2%2c 2'%3e%3c/path%3e%3crect width='129.6' height='129.6' clip-path='url(%26quot%3b%23SvgjsClipPath3052%26quot%3b)' x='1229.03' y='119.86' fill='url(%23SvgjsPattern3053)' transform='rotate(317.06%2c 1293.83%2c 184.66)'%3e%3c/rect%3e%3ccircle r='87.12759003835488' cx='1394.2' cy='18.95' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/circle%3e%3cpath d='M1375.03 328.92L1385.56 321.62 1394.98 330.28 1405.51 322.99 1414.94 331.65 1425.46 324.35 1434.89 333.02' stroke='rgba(237%2c 29%2c 127%2c 1)' stroke-width='1' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3cpath d='M898.11 101.24L910.17 105.53 908.64 118.25 920.7 122.54 919.16 135.25 931.23 139.54 929.69 152.26' stroke='rgba(3%2c 37%2c 108%2c 1)' stroke-width='2.45' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask3049'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='13.68' height='13.68' patternUnits='userSpaceOnUse' id='SvgjsPattern3051'%3e%3cpath d='M6.84 1L6.84 12.68M1 6.84L12.68 6.84' stroke='rgba(3%2c 37%2c 108%2c 1)' fill='none' stroke-width='3.19'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath3050'%3e%3ccircle r='61.56' cx='1432.23' cy='435.18'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='129.6' height='7.2' patternUnits='userSpaceOnUse' id='SvgjsPattern3053'%3e%3crect width='129.6' height='3.6' x='0' y='0' fill='rgba(237%2c 29%2c 127%2c 1)'%3e%3c/rect%3e%3crect width='129.6' height='3.6' x='0' y='3.6' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath3052'%3e%3ccircle r='32.4' cx='1293.83' cy='184.66'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  z-index: -1;
  position: relative;
`;

const ShowcaseArea = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: var(--paddingLayout);
  top: 20%;
  /* left: 10%; */
  width: 100%;
`;
const ShowcaseText = styled.div`
  /* background: rgba(0, 0, 0, 0.9); */
  height: 100%;
  width: 50%;

  h1 {
    color: var(--secondaryColor);
    font-size: 4.5rem;
    line-height: 50px;
  }
  button {
    border: none;
    /* margin: 2.5rem 0rem; */
    padding: 1.5rem 4rem;
    border-radius: 6rem;
    font-size: 1.5rem;
    color: var(--light_2);
    background-color: var(--secondaryColor);
    :hover {
      color: var(--secondaryColor);
      border: 1px solid var(--secondaryColor);
      background: transparent;
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
          <h1>
            We develop SaaS products that simpilifies your day to day business
            transactions
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, in?
            Fuga labore minus commodi. Laboriosam aliquam eaque porro quia nam
          </p>
          <button>
            <Link href='/contacts'>Explore More</Link>
          </button>
        </ShowcaseText>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          data-name='Layer 1'
          width='480'
          height='300'
          viewBox='0 0 980 489.48047'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <path
            d='M317.06006,205.25977a205.979,205.979,0,0,0-77.68457,15.06689c-.99365.40723-1.99121.81641-2.98828,1.23486A206.78061,206.78061,0,0,0,110,412.31982v225.94a9.01016,9.01016,0,0,0,9,9l.17871.01562c173.4668,31.50195,342.106,47.46484,501.37207,47.46484q3.58155,0,7.15625-.01074c156.55469-.47656,308.99414-16.43945,453.083-47.44726l.21-.02246a9.00984,9.00984,0,0,0,9-9v-424a9.01015,9.01015,0,0,0-9-9Z'
            transform='translate(-110 -205.25977)'
            fill='#03256C'
          />
          <path
            id='f4300551-56ef-4356-8f30-d0080b223343-2271'
            data-name='Path 40'
            d='M855.79948,385.45241a5.94683,5.94683,0,0,0,0,11.89205H1004.8852a5.94683,5.94683,0,1,0,.19525-11.89205q-.09762-.00165-.19525,0Z'
            transform='translate(-110 -205.25977)'
            fill='#3f3d56'
          />
          <path
            d='M1038.69419,383.79676a1.17,1.17,0,0,0,0,1.65472l5.02282,5.02288H1031.3312a1.17005,1.17005,0,1,0,0,2.34011H1043.717l-5.02282,5.02287a1.17005,1.17005,0,1,0,1.65468,1.65473l7.02029-7.02029a1.17011,1.17011,0,0,0,0-1.65473l-7.02029-7.02029A1.17,1.17,0,0,0,1038.69419,383.79676Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M821.92744,383.79676a1.17,1.17,0,0,1,0,1.65472l-5.02282,5.02288h12.38581a1.17006,1.17006,0,1,1,0,2.34011H816.90462l5.02282,5.02287a1.17,1.17,0,0,1-1.65467,1.65473l-7.0203-7.02029a1.17011,1.17011,0,0,1,0-1.65473l7.0203-7.02029A1.17,1.17,0,0,1,821.92744,383.79676Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <g opacity='0.4'>
            <circle cx='751.81992' cy='50.3899' r='6.3899' fill='#fff' />
            <circle cx='778.44451' cy='50.3899' r='6.3899' fill='#fff' />
            <circle cx='805.06909' cy='50.3899' r='6.3899' fill='#fff' />
            <circle cx='831.69368' cy='50.3899' r='6.3899' fill='#fff' />
            <circle cx='858.31826' cy='50.3899' r='6.3899' fill='#fff' />
            <circle cx='884.94285' cy='50.3899' r='6.3899' fill='#fff' />
            <circle cx='911.56744' cy='50.3899' r='6.3899' fill='#fff' />
            <circle cx='751.81992' cy='70.62459' r='6.3899' fill='#fff' />
            <circle cx='778.44451' cy='70.62459' r='6.3899' fill='#fff' />
            <circle cx='805.06909' cy='70.62459' r='6.3899' fill='#fff' />
            <circle cx='831.69368' cy='70.62459' r='6.3899' fill='#fff' />
            <circle cx='858.31826' cy='70.62459' r='6.3899' fill='#fff' />
            <circle cx='884.94285' cy='70.62459' r='6.3899' fill='#fff' />
            <circle cx='911.56744' cy='70.62459' r='6.3899' fill='#fff' />
            <circle cx='751.81992' cy='90.85927' r='6.3899' fill='#fff' />
            <circle cx='778.44451' cy='90.85927' r='6.3899' fill='#fff' />
            <circle cx='805.06909' cy='90.85927' r='6.3899' fill='#fff' />
            <circle cx='831.69368' cy='90.85927' r='6.3899' fill='#fff' />
            <circle cx='858.31826' cy='90.85927' r='6.3899' fill='#fff' />
            <circle cx='884.94285' cy='90.85927' r='6.3899' fill='#fff' />
            <circle cx='911.56744' cy='90.85927' r='6.3899' fill='#fff' />
            <circle cx='751.81992' cy='111.09396' r='6.3899' fill='#fff' />
            <circle cx='778.44451' cy='111.09396' r='6.3899' fill='#fff' />
            <circle cx='751.81992' cy='131.32864' r='6.3899' fill='#fff' />
            <circle cx='778.44451' cy='131.32864' r='6.3899' fill='#fff' />
            <circle cx='805.06909' cy='131.32864' r='6.3899' fill='#fff' />
            <circle cx='805.06909' cy='111.09396' r='6.3899' fill='#fff' />
            <circle cx='831.69368' cy='111.09396' r='6.3899' fill='#fff' />
            <circle cx='858.31826' cy='111.09396' r='6.3899' fill='#fff' />
            <circle cx='884.94285' cy='111.09396' r='6.3899' fill='#fff' />
            <circle cx='911.56744' cy='111.09396' r='6.3899' fill='#fff' />
          </g>
          <path
            d='M770.15723,580.71875a35.27246,35.27246,0,1,1,35.27246-35.27246A35.31251,35.31251,0,0,1,770.15723,580.71875Zm0-68.54492a33.27246,33.27246,0,1,0,33.27246,33.27246A33.30991,33.30991,0,0,0,770.15723,512.17383Z'
            transform='translate(-110 -205.25977)'
            fill='#3f3d56'
          />
          <path
            d='M783.68058,542.06548H773.53835V531.92315a3.38081,3.38081,0,0,0-6.76162,0v10.14233H756.6344a3.38076,3.38076,0,0,0,0,6.76152h10.14233v10.14233a3.38081,3.38081,0,0,0,6.76162,0V548.827h10.14223a3.38076,3.38076,0,1,0,0-6.76152Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <g opacity='0.4'>
            <circle cx='54.0239' cy='374.76553' r='5.02391' fill='#fff' />
            <circle cx='54.0239' cy='353.83257' r='5.02391' fill='#fff' />
            <circle cx='54.0239' cy='332.89961' r='5.02391' fill='#fff' />
            <circle cx='54.0239' cy='311.96665' r='5.02391' fill='#fff' />
            <circle cx='54.0239' cy='291.03369' r='5.02391' fill='#fff' />
            <circle cx='54.0239' cy='270.10073' r='5.02391' fill='#fff' />
            <circle cx='54.0239' cy='249.16777' r='5.02391' fill='#fff' />
            <circle cx='69.93295' cy='374.76553' r='5.02391' fill='#fff' />
            <circle cx='69.93295' cy='353.83257' r='5.02391' fill='#fff' />
            <circle cx='69.93295' cy='332.89961' r='5.02391' fill='#fff' />
            <circle cx='69.93295' cy='311.96665' r='5.02391' fill='#fff' />
            <circle cx='69.93295' cy='291.03369' r='5.02391' fill='#fff' />
            <circle cx='69.93295' cy='270.10073' r='5.02391' fill='#fff' />
            <circle cx='69.93295' cy='249.16777' r='5.02391' fill='#fff' />
            <circle cx='85.842' cy='374.76553' r='5.02391' fill='#fff' />
            <circle cx='85.842' cy='353.83257' r='5.02391' fill='#fff' />
            <circle cx='85.842' cy='332.89961' r='5.02391' fill='#fff' />
            <circle cx='85.842' cy='311.96665' r='5.02391' fill='#fff' />
            <circle cx='85.842' cy='291.03369' r='5.02391' fill='#fff' />
            <circle cx='85.842' cy='270.10073' r='5.02391' fill='#fff' />
            <circle cx='85.842' cy='249.16777' r='5.02391' fill='#fff' />
            <circle cx='101.75105' cy='374.76553' r='5.02391' fill='#fff' />
            <circle cx='101.75105' cy='353.83257' r='5.02391' fill='#fff' />
            <circle cx='117.6601' cy='374.76553' r='5.02391' fill='#fff' />
            <circle cx='117.6601' cy='353.83257' r='5.02391' fill='#fff' />
            <circle cx='117.6601' cy='332.89961' r='5.02391' fill='#fff' />
            <circle cx='101.75105' cy='332.89961' r='5.02391' fill='#fff' />
            <circle cx='101.75105' cy='311.96665' r='5.02391' fill='#fff' />
            <circle cx='101.75105' cy='291.03369' r='5.02391' fill='#fff' />
            <circle cx='101.75105' cy='270.10073' r='5.02391' fill='#fff' />
            <circle cx='101.75105' cy='249.16777' r='5.02391' fill='#fff' />
          </g>
          <path
            d='M607.40837,238.262H273.66631a6.18856,6.18856,0,0,0-6.1823,6.18237v285.3832a6.18855,6.18855,0,0,0,6.1823,6.18236H607.40837a6.1886,6.1886,0,0,0,6.18237-6.18236V244.44434A6.18861,6.18861,0,0,0,607.40837,238.262Zm3.70479,291.56557a3.71813,3.71813,0,0,1-3.70479,3.71637H273.66631a3.71067,3.71067,0,0,1-3.70472-3.71637V244.44434a3.71067,3.71067,0,0,1,3.70472-3.71637H607.40837a3.71813,3.71813,0,0,1,3.70479,3.71637Z'
            transform='translate(-110 -205.25977)'
            fill='#3f3d56'
          />
          <path
            d='M350.70245,485.26609c0,.43995-.01159.87989-.03477,1.30825a25.17464,25.17464,0,0,1-50.28069,0c-.02317-.42836-.03469-.8683-.03469-1.30825a25.17508,25.17508,0,1,1,50.35015,0Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M581.475,468.47884H383.66331a4.19682,4.19682,0,0,0,0,8.39363H581.475a4.19682,4.19682,0,0,0,0-8.39363Z'
            transform='translate(-110 -205.25977)'
            fill='#3f3d56'
          />
          <path
            d='M468.78046,493.65971H383.66331a4.191,4.191,0,0,0,0,8.382h85.11715a4.191,4.191,0,1,0,0-8.382Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M686.69824,438.84082H352.958a8.559,8.559,0,0,1-8.54883-8.5498V283.8291a8.55888,8.55888,0,0,1,8.54883-8.54931H686.69824a8.55888,8.55888,0,0,1,8.54883,8.54931V430.291A8.559,8.559,0,0,1,686.69824,438.84082ZM352.958,278.27979a5.55529,5.55529,0,0,0-5.54883,5.54931V430.291a5.55572,5.55572,0,0,0,5.54883,5.5498H686.69824a5.55572,5.55572,0,0,0,5.54883-5.5498V283.8291a5.55529,5.55529,0,0,0-5.54883-5.54931Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M420.9242,328.69922a4.19591,4.19591,0,1,0,0,8.39182H618.73156a4.19591,4.19591,0,1,0,0-8.39182Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M420.9242,353.01178a4.19591,4.19591,0,0,0,0,8.39183H618.73156a4.19592,4.19592,0,0,0,0-8.39183Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M420.9242,377.02952a4.19591,4.19591,0,0,0,0,8.39183h85.11711a4.19592,4.19592,0,0,0,0-8.39183Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M741.72363,500.89258l-33.51977-47.30731,10.85107,2.2611a1.50113,1.50113,0,1,0,.61212-2.9392l-16.17059-3.36628-2.18262,16.37055a1.50115,1.50115,0,1,0,2.976.39642l1.46319-10.99322L739.27637,502.627a1.49976,1.49976,0,1,0,2.44726-1.73437Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M559.66593,638.58034H321.40883a4.41735,4.41735,0,0,1-4.41216-4.41216V575.06677a4.41735,4.41735,0,0,1,4.41216-4.41216h238.2571a4.41735,4.41735,0,0,1,4.41216,4.41216v59.10141A4.41735,4.41735,0,0,1,559.66593,638.58034Zm-238.2571-66.16087a2.65019,2.65019,0,0,0-2.6473,2.6473v59.10141a2.65019,2.65019,0,0,0,2.6473,2.64729h238.2571a2.65019,2.65019,0,0,0,2.64729-2.64729V575.06677a2.65019,2.65019,0,0,0-2.64729-2.6473Z'
            transform='translate(-110 -205.25977)'
            fill='#3f3d56'
          />
          <circle cx='248.42913' cy='397.08997' r='17.97281' fill='#fff' />
          <path
            d='M399.93776,590.36787a2.99547,2.99547,0,1,0,0,5.99093H541.15269a2.99546,2.99546,0,1,0,0-5.99093Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M399.93776,608.34068a2.99547,2.99547,0,1,0,0,5.99093H460.703a2.99546,2.99546,0,1,0,0-5.99093Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M874.0245,428.0156H979.91678a4.41735,4.41735,0,0,1,4.41216,4.41216V542.71023a4.41735,4.41735,0,0,1-4.41216,4.41216H874.0245a4.41736,4.41736,0,0,1-4.41217-4.41216V432.42776A4.41736,4.41736,0,0,1,874.0245,428.0156ZM979.91678,545.35752a2.65019,2.65019,0,0,0,2.6473-2.64729V432.42776a2.6502,2.6502,0,0,0-2.6473-2.6473H874.0245a2.65019,2.65019,0,0,0-2.6473,2.6473V542.71023a2.65019,2.65019,0,0,0,2.6473,2.64729Z'
            transform='translate(-110 -205.25977)'
            fill='#3f3d56'
          />
          <path
            d='M957.35324,524.38014a2.99547,2.99547,0,0,0,0-5.99094H896.588a2.99547,2.99547,0,0,0,0,5.99094Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M957.35324,506.73149a2.99547,2.99547,0,1,0,0-5.99093H896.588a2.99547,2.99547,0,1,0,0,5.99093Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
          <path
            d='M926.97042,450.75785a18.85509,18.85509,0,1,1-18.85509,18.85509A18.87645,18.87645,0,0,1,926.97042,450.75785Z'
            transform='translate(-110 -205.25977)'
            fill='#fff'
          />
        </svg>
      </ShowcaseArea>

      {/* <SVGStyles
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        preserveAspectRatio='none'
        viewBox='0 0 1440 560'
        height='560'
      >
        <g mask='url("#SvgjsMask1193")' fill='none'>
          <rect
            width='1440'
            height='560'
            x='0'
            y='0'
            fill='rgba(3, 37, 108, 1)'
          ></rect>
          <rect
            width='346.64'
            height='346.64'
            clipPath='url("#SvgjsClipPath1194")'
            x='642.13'
            y='-102.55'
            fill='url(#SvgjsPattern1195)'
            transform='rotate(133.84, 815.45, 70.77)'
          ></rect>
          <circle
            r='46.666666666666664'
            cx='1182.94'
            cy='404.31'
            fill='rgba(255, 254, 18, 1)'
          ></circle>
          <path
            d='M295.29 464.19a5.6 5.6 0 1 0-1.35 11.11 5.6 5.6 0 1 0 1.35-11.11zM293.36 480.07a5.6 5.6 0 1 0-1.35 11.12 5.6 5.6 0 1 0 1.35-11.12zM291.43 495.95a5.6 5.6 0 1 0-1.35 11.12 5.6 5.6 0 1 0 1.35-11.12zM289.5 511.83a5.6 5.6 0 1 0-1.35 11.12 5.6 5.6 0 1 0 1.35-11.12zM283.27 430.49a5.6 5.6 0 1 0-1.35 11.12 5.6 5.6 0 1 0 1.35-11.12zM281.34 446.37a5.6 5.6 0 1 0-1.35 11.12 5.6 5.6 0 1 0 1.35-11.12zM279.41 462.25a5.6 5.6 0 1 0-1.35 11.12 5.6 5.6 0 1 0 1.35-11.12zM277.48 478.14a5.6 5.6 0 1 0-1.35 11.12 5.6 5.6 0 1 0 1.35-11.12z'
            fill='rgba(255, 254, 18, 1)'
          ></path>
          <rect
            width='181.44'
            height='181.44'
            clipPath='url("#SvgjsClipPath1196")'
            x='-89.53'
            y='102.8'
            fill='url(#SvgjsPattern1197)'
            transform='rotate(123.21, 1.19, 193.52)'
          ></rect>
          <rect
            width='300'
            height='300'
            clipPath='url("#SvgjsClipPath1198")'
            x='745.97'
            y='40.48'
            fill='url(#SvgjsPattern1199)'
            transform='rotate(113.77, 895.97, 190.48)'
          ></rect>
          <rect
            width='276'
            height='276'
            clipPath='url("#SvgjsClipPath1200")'
            x='145.2'
            y='-134.69'
            fill='url(#SvgjsPattern1201)'
            transform='rotate(332.81, 283.2, 3.31)'
          ></rect>
          <path
            d='M387.29 336.76a5.6 5.6 0 1 0-6.74-8.94 5.6 5.6 0 1 0 6.74 8.94zM377.66 323.98a5.6 5.6 0 1 0-6.74-8.94 5.6 5.6 0 1 0 6.74 8.94zM368.03 311.2a5.6 5.6 0 1 0-6.74-8.94 5.6 5.6 0 1 0 6.74 8.94zM358.4 298.43a5.6 5.6 0 1 0-6.74-8.95 5.6 5.6 0 1 0 6.74 8.95zM419.32 352.69a5.6 5.6 0 1 0-6.74-8.95 5.6 5.6 0 1 0 6.74 8.95zM409.7 339.91a5.6 5.6 0 1 0-6.74-8.94 5.6 5.6 0 1 0 6.74 8.94zM400.07 327.13a5.6 5.6 0 1 0-6.74-8.94 5.6 5.6 0 1 0 6.74 8.94zM390.44 314.35a5.6 5.6 0 1 0-6.74-8.94 5.6 5.6 0 1 0 6.74 8.94zM451.36 368.62a5.6 5.6 0 1 0-6.74-8.95 5.6 5.6 0 1 0 6.74 8.95zM441.73 355.84a5.6 5.6 0 1 0-6.74-8.95 5.6 5.6 0 1 0 6.74 8.95zM432.1 343.06a5.6 5.6 0 1 0-6.74-8.95 5.6 5.6 0 1 0 6.74 8.95zM422.47 330.28a5.6 5.6 0 1 0-6.74-8.94 5.6 5.6 0 1 0 6.74 8.94z'
            stroke='rgba(237, 29, 127, 1)'
            strokeWidth='1.56'
            strokeDasharray='4, 4'
          ></path>
          <circle
            r='46.666666666666664'
            cx='1216.06'
            cy='485.06'
            fill='rgba(255, 254, 18, 1)'
          ></circle>
          <path
            d='M1436.22 77.08 L1443.24 94.27L1430.5697400547492 94.83525994525091z'
            fill='rgba(255, 254, 18, 1)'
          ></path>
          <rect
            width='346.92'
            height='346.92'
            clipPath='url("#SvgjsClipPath1202")'
            x='634.55'
            y='256.72'
            fill='url(#SvgjsPattern1203)'
            transform='rotate(184.02, 808.01, 430.18)'
          ></rect>
          <circle
            r='66.45051660083284'
            cx='562.59'
            cy='260.44'
            fill='rgba(237, 29, 127, 1)'
          ></circle>
          <circle
            r='46.666666666666664'
            cx='33.8'
            cy='317.58'
            fill='rgba(237, 29, 127, 1)'
          ></circle>
        </g>
        <defs>
          <mask id='SvgjsMask1193'>
            <rect width='1440' height='560' fill='#ffffff'></rect>
          </mask>
          <pattern
            x='0'
            y='0'
            width='12.38'
            height='12.38'
            patternUnits='userSpaceOnUse'
            id='SvgjsPattern1195'
          >
            <path
              d='M6.19 1L6.19 11.38M1 6.19L11.38 6.19'
              stroke='rgba(255, 254, 18, 1)'
              fill='none'
              strokeWidth='3.27'
            ></path>
          </pattern>
          <clipPath id='SvgjsClipPath1194'>
            <circle r='86.66' cx='815.45' cy='70.77'></circle>
          </clipPath>
          <pattern
            x='0'
            y='0'
            width='10.08'
            height='10.08'
            patternUnits='userSpaceOnUse'
            id='SvgjsPattern1197'
          >
            <path
              d='M5.04 1L5.04 9.08M1 5.04L9.08 5.04'
              stroke='rgba(237, 29, 127, 1)'
              fill='none'
              strokeWidth='3.3'
            ></path>
          </pattern>
          <clipPath id='SvgjsClipPath1196'>
            <circle r='45.36' cx='1.19' cy='193.52'></circle>
          </clipPath>
          <pattern
            x='0'
            y='0'
            width='6'
            height='6'
            patternUnits='userSpaceOnUse'
            id='SvgjsPattern1199'
          >
            <path
              d='M3 1L3 5M1 3L5 3'
              stroke='rgba(255, 254, 18, 1)'
              fill='none'
              strokeWidth='1'
            ></path>
          </pattern>
          <clipPath id='SvgjsClipPath1198'>
            <circle r='75' cx='895.97' cy='190.48'></circle>
          </clipPath>
          <pattern
            x='0'
            y='0'
            width='276'
            height='6'
            patternUnits='userSpaceOnUse'
            id='SvgjsPattern1201'
          >
            <rect
              width='276'
              height='3'
              x='0'
              y='0'
              fill='rgba(255, 254, 18, 1)'
            ></rect>
            <rect
              width='276'
              height='3'
              x='0'
              y='3'
              fill='rgba(0, 0, 0, 0)'
            ></rect>
          </pattern>
          <clipPath id='SvgjsClipPath1200'>
            <circle r='69' cx='283.2' cy='3.31'></circle>
          </clipPath>
          <pattern
            x='0'
            y='0'
            width='346.92'
            height='8.26'
            patternUnits='userSpaceOnUse'
            id='SvgjsPattern1203'
          >
            <rect
              width='346.92'
              height='4.13'
              x='0'
              y='0'
              fill='rgba(237, 29, 127, 1)'
            ></rect>
            <rect
              width='346.92'
              height='4.13'
              x='0'
              y='4.13'
              fill='rgba(0, 0, 0, 0)'
            ></rect>
          </pattern>
          <clipPath id='SvgjsClipPath1202'>
            <circle r='86.73' cx='808.01' cy='430.18'></circle>
          </clipPath>
        </defs>
      </SVGStyles> */}
    </>
  );
}

export default Showcase;
