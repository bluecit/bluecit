import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#102338",
  text: "#FAFAFA",
  toggleBorder: "#45526c",
  background: "#0c1e32",
  logo: {
    backgroundImage: `url("/images/bluecit_logo.svg")`,
  },
};
export const lightTheme = {
  body: "#ecf0f3",
  text: "#363537",
  toggleBorder: "#828282",
  background: "#fff",
  logo: {
    backgroundImage: `url("/images/bluecit_web_logo.png")`,
  },
};

export const GlobalStyles = createGlobalStyle`

html {
    --mainColor:#0c1e32;
    --primaryColor: #03256C;
    --primaryColorDark: #011f5e;
    --secondaryColor : #ED1D7F;
    --black: #000000;
    --grey:#AAAAAA;
    --greyDark:#AAAAAA;
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
  background:${({ theme }) => theme.body};
  color:${({ theme }) => theme.text};
  font-family: 'Ubuntu', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
}
a {
    text-decoration: none;
    color: var(---black)
}
h1{
  margin:0;
}
.btn {
    border: none;
    /* margin: 2.5rem 0rem; */
    padding: 1.5rem 4rem;
    border-radius: 6rem;
    font-size: 1.5rem;
  
    background: transparent;
    border: 1px solid var(--secondaryColor);
    color: var(--secondaryColor);
    &:hover {
      color: var(--light_2);
      background-color: var(--secondaryColor);
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
