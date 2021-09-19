import logo from "../../../assets/images/logo.png";
import { LogoBox } from "./styled";

export function Logo() {
  return (
    <LogoBox>
      <img src={logo} alt="Pokedéx" width="300" />
    </LogoBox>
  );
}
