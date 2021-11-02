import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const PrimaryTheme = {
  colors: {
    header: "#ddd",
    footer: "#dddd",
    body: "#fff",
  },
};

export const DarkTheme = {};

export const GlobalStyles = createGlobalStyle`
@font-face{
font-family:'Roboto' ;
src: url('/assets/Roboto-Black.ttf')
format('ttf')
}
html {
    --primaryColor: #03256C;
    --secondaryColor : #ED1D7F;
    --black: #000000;
    --grey:#AAAAAA;
    --ofWhite:#ededed;
    --maxWidth:1200px;
    --bs: 'box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1)';
    box-sizing: border-box;
    font-size: 62.5%;
}
*,*:after, *:before {
    box-sizing: inherit;
}
body {
font-family: 'Roboto',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
padding: 0;
margin: 0;
font-size: 1.5rem;
line-height: 2;
}
a {
    text-decoration: none;
    color: var(---black)
}
button {
    font-family: 'Roboto',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}`;

export const MainContentStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

// export const ContainerStyle = styled.div`
// width:1200px;
// margin: 0 auto;
// padding:0 1rem;
// max-width: 100%;
// `

const name = "Ali";
