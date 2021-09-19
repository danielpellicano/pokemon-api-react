import styled, { createGlobalStyle } from "styled-components";
// @ts-ignore
import PokemonFontWoff from "../fonts/pokemon_hollow-webfont.woff";
// @ts-ignore
import PokemonFontWoff2 from "../fonts/pokemon_hollow-webfont.woff2";

const GlobalStyle = createGlobalStyle`
 @font-face {
        font-family: 'PokemonFont';
        src: local('PokemonFont'), local('PokemonFont'),
        url(${PokemonFontWoff}) format('woff2'),
        url(${PokemonFontWoff2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

  body {
    margin: 0;
    padding: 0;
    background: #eee;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  input {
    border: 0;
    outline: none;
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
`;

export default GlobalStyle;
