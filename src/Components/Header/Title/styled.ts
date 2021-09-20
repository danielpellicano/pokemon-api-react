import styled from "styled-components";

export const TitleStyled = styled.div`
  font-family: "PokemonFont";
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 468px) {
    h1 {
      display: none;
    }
  }

  svg {
    margin-left: 20px;
  }
`;
