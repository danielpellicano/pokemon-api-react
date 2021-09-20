import { FooterStyled } from "./styled";
import NovaticsLogo from "../../assets/images/novatics.svg";

export function Footer() {
  return (
    <FooterStyled>
      <p>
        Teste para vaga de Desenvolvedor Front-End da
        <img src={NovaticsLogo} alt="Novatics" title="Novatics" width="90" />,
        desenvolvido por{" "}
        <strong>
          <a
            href="https://www.linkedin.com/in/danielpellicano/"
            target="_blank"
          >
            Daniel Pellicano
          </a>
        </strong>
      </p>
    </FooterStyled>
  );
}
