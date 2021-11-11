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
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@font-face{
font-family:'Roboto' ;
src: url('/assets/Roboto-Black.ttf')
format('ttf')
}
html {
    --primaryColor: #03256C;
    --primaryColorDark: #011f5e;
    --secondaryColor : #ED1D7F;
    --black: #000000;
    --grey:#AAAAAA;
    --greyDark:#AAAAAA;
    --ofWhite:#ededed;
    --maxWidth:1200px;
    --bs: 'box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1)';
    --dark-color: #29313e;
    --darker-color: #131b25;
    --light_1: #fbfbfd;
    --light_2: #e9ecef;
    --light_3: #828282;
    --grey_1: #d4d1d1;
    --grey_2: #45526c;
    --grey_3: #333;
    --menu-font-size: 1.2rem;
    --paddingLayout:0 15rem;
    box-sizing: border-box;
    font-size: 62.5%;
}
*,*:after, *:before {
    box-sizing: inherit;
}
body {
font-family: 'Lato','Roboto',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
padding: 0;
margin: 0;
font-size: 1.5rem;
line-height: 2;
}
a {
    text-decoration: none;
    color: var(---black)
}
.btn {
    font-family: 'Roboto',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: none;
    /* margin: 2.5rem 0rem; */
    padding: 1.5rem 4rem;
    border-radius: 6rem;
    font-size: 1.5rem;
    color: var(--light_2);
    background-color: var(--secondaryColor);
    &:hover {
      color: var(--secondaryColor);
      border: 1px solid var(--secondaryColor);
      background: transparent;
    }
  
}`;

export const MainContentStyles = styled.div`
  /* max-width: var(--maxWidth); */
  /* margin: auto; */
  /* margin-top: 10rem; */
`;

// export const ContainerStyle = styled.div`
// width:1200px;
// margin: 0 auto;
// padding:0 1rem;
// max-width: 100%;
// `
