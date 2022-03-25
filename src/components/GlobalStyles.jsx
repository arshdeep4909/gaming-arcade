import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html{
    &::-webkit-scrollbar{
        width: 0.7rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
    &::-webkit-scrollbar-track {
    background: white;
  }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #ff7676
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969
    }
    a{
        text-decoration: none;
        color: #333;
    }
}
`;

export default GlobalStyles;

// font-family: 'Abril Fatface', cursive;
// font-family: 'Inter', sans-serif;
// font-family: 'Montserrat', sans-serif;
