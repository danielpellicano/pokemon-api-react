import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #eee;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const ListPokemons = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    width: 24%;
    margin: 5px;
    box-sizing: border-box;
    background: #ddd;
    padding: 20px;
  }
`;

export default GlobalStyle;
