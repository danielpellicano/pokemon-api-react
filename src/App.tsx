import { Fragment, useEffect, useState } from "react";
import { Header } from "./components/Header";
import GlobalStyle, { Container } from "./assets/styles/globalStyles";
import { ListPokemons } from "./components/PokeCard/styled";
import api from "./services/pokemonApi";
import { Title } from "./components/Header/Title";
import { Loader } from "./components/Loader";
import { PokeCard } from "./components/PokeCard";
import PokemonApiContext from "./contexts/pokemonsContext";
import { Footer } from "./components/Footer";

function App() {
  // interface IPokemonProps {
  //   id: number;
  //   name: string;
  // }

  const [pokemonsData, setPokemonsData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      api
        .get("pokedex.json")
        .then((response) => {
          let pokemonData = response.data.pokemon;
          setPokemonsData(pokemonData);
          setLoader(false);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, 3000);
  }, []);

  console.log(pokemonsData);

  return (
    <Fragment>
      {loader && <Loader />}
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
      <Footer />
    </Fragment>
  );
}

export default App;
