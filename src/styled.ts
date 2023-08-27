import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root {
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-primary: #242424;
    --color-secondary: #646cff;
    --color-white: #fff;
    --color-error: #ff322a;
  }

  body {
    display: flex;
    place-items: center;
    
    min-width: 320px;
    min-height: 100vh;

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;

    color: var(--color-white);
    background-color: var(--color-primary);
  }

  button {
    cursor: pointer;
  }

  p {
    margin: 0;
  }

`;
