import { Fragment } from "react";
import { SiPokemon } from "react-icons/si";
import { TitleStyled } from "./styled";

export const Title = () => {
  return (
    <Fragment>
      <TitleStyled>
        <h1>Encontre seu</h1>
        <SiPokemon size="150" />
      </TitleStyled>
    </Fragment>
  );
};
