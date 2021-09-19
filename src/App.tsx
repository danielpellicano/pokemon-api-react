import { Fragment, useEffect, useState } from "react";
import { Header } from "./components/Header";
import GlobalStyle, {
  Container,
  ListPokemons,
} from "./assets/styles/globalStyles";
import api from "./services/pokemonApi";
import { Title } from "./components/Header/Title";
// import { Loader } from "./components/Loader";
import { PokeCard } from "./components/PokeCard";
import PokemonApiContext from "./contexts/pokemonsContext";

function App() {
  // interface IPokemonProps {
  //   id: number;
  //   name: string;
  // }

  const [pokemonsData, setPokemonsData] = useState([]);

  useEffect(() => {
    api
      .get("pokedex.json")
      .then((response) => {
        let pokemonData = response.data.pokemon;
        setPokemonsData(pokemonData);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  console.log(pokemonsData);

  return (
    <Fragment>
      {/* <Loader /> */}
      {/*  */}
      <PokemonApiContext.Provider value={{ pokemonsData, setPokemonsData }}>
        <GlobalStyle />
        <Header />
        <Container>
          <Title />
          <ListPokemons>
            {pokemonsData.map(
              ({
                id,
                name,
                img,
                num,
                type,
                weight,
                candy,
                height,
                candy_count,
                egg,
                spawn_chance,
                spawn_time,
                next_evolution,
                weaknesses,
              }: any) => (
                <PokeCard
                  key={id}
                  num={num}
                  img={img}
                  name={name}
                  type={type}
                  weight={weight}
                  candy={candy}
                  height={height}
                  candy_count={candy_count}
                  egg={egg}
                  spawn_chance={spawn_chance}
                  spawn_time={spawn_time}
                  next_evolution={next_evolution}
                  weaknesses={weaknesses}
                />
              )
            )}
          </ListPokemons>
        </Container>
      </PokemonApiContext.Provider>
    </Fragment>
  );
}

export default App;
