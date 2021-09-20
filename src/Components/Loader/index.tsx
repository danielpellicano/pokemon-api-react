import { PokeballLoader } from "./styled";

export const Loader = () => {
  return (
    <PokeballLoader>
      <div className="pokeball">
        <div className="pokeball__button"></div>
      </div>
      <p>Carregando Pokemons, por favor aguarde...</p>
    </PokeballLoader>
  );
};
