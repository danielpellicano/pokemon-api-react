import { Fragment, useContext, useEffect, useState } from "react";
// import { FcSearch } from "react-icons/fc";
import { CgPokemon } from "react-icons/cg";
import { MdClose } from "react-icons/md";

import { SearchBox, SearchMobile, SearchScreenMobile } from "./styled";
import { Input } from "../../Form/Input";
import api from "../../../services/pokemonApi";
import PokemonApiContext from "../../../contexts/pokemonsContext";

export const Search = () => {
  const [inputSearch, setInputSearch] = useState();
  const [dataSearch, setDataSearch] = useState([] as any);
  const [searchMobile, setSearchMobile] = useState(false);

  const PokemonContext = useContext(PokemonApiContext);

  useEffect(() => {
    api
      .get("pokedex.json")
      .then((response) => {
        console.log(response);
        let filteredArray = response.data.pokemon.filter(function (
          pokemon: any
        ) {
          if (pokemon.num.startsWith(inputSearch)) return true;
          return pokemon.name.toLowerCase().startsWith(inputSearch);
        });
        setDataSearch(filteredArray);
        //@ts-ignore
        PokemonContext.setPokemonsData(filteredArray);
        console.log(dataSearch);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [inputSearch]); //eslint-disable-line

  return (
    <Fragment>
      <SearchBox>
        <Input
          name="nome"
          placeholder="Pesquise seu pokemón por nome ou número"
          onChange={(e: any) => setInputSearch(e.target.value)}
        />
        <CgPokemon />
      </SearchBox>
      <SearchMobile onClick={() => setSearchMobile(true)}>
        <CgPokemon />
      </SearchMobile>
      {searchMobile && (
        <>
          <SearchScreenMobile>
            <Input
              name="nome"
              placeholder="Pesquise seu pokemón por nome ou número"
              onChange={(e: any) => setInputSearch(e.target.value)}
            />
            <MdClose
              onClick={() => {
                setSearchMobile(false);
              }}
            />
          </SearchScreenMobile>
        </>
      )}
    </Fragment>
  );
};
