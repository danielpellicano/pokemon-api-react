import { Fragment, useEffect, useState } from "react";
import { Header } from "./components/Header";
import GlobalStyle, {
  Container,
  ListPokemons,
} from "./assets/styles/globalStyles";
import api from "./services/pokemonApi";

function App() {
  // interface IPokemonProps {
  //   id: number;
  //   name: string;
  // }

  const [pokemonsData, setPokemonsData] = useState([]);

  useEffect(() => {
    api
      .get("pokedex.json")
      .then((response) => setPokemonsData(response.data.pokemon))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  console.log(pokemonsData);

  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Container>
        <ListPokemons>
          {pokemonsData.map(({ name, img, num, type }: any) => (
            <div key={name}>
              <img src={img} alt={name} title={name} />
              <span>{num}</span>
              <h3>{name}</h3>
              <div className="type">
                <ul>
                  {type.map(function (nome: any) {
                    console.log(nome);
                    return <li>{nome}</li>;
                  })}
                </ul>
              </div>
            </div>
          ))}
        </ListPokemons>
      </Container>
    </Fragment>
  );
}

export default App;
