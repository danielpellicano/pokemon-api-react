import { Fragment } from "react";
import { Container } from "../../assets/styles/globalStyles";
import { HeaderContainer, HeaderStyled } from "./styled";
import { Search } from "./Search";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Fragment>
      <HeaderStyled>
        <HeaderContainer>
          <Logo />
          <Search />
        </HeaderContainer>
      </HeaderStyled>
    </Fragment>
  );
}
