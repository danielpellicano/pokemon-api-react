import {
  PokeCardStyled,
  PokemonNumber,
  PokemonType,
  PokemonName,
  PokemonBackInfo,
} from "./styled";
import {
  GiHighGrass,
  GiDragonfly,
  GiLadybug,
  GiElectric,
  GiFallingRocks,
  GiGroundbreaker,
  GiPsychicWaves,
  GiIceCube,
  GiGhost,
  GiBoxingGloveSurprise,
  GiSpikedDragonHead,
  GiCandyCanes,
  GiEasterEgg,
  GiWeight,
  GiTimeBomb,
} from "react-icons/gi";
import {
  FaSkullCrossbones,
  FaCandyCane,
  FaRulerVertical,
  FaSearchLocation,
} from "react-icons/fa";
import { ImFire } from "react-icons/im";
import { IoWaterSharp } from "react-icons/io5";
export const PokeCard = ({
  id,
  name,
  img,
  num,
  type,
  weight,
  height,
  candy,
  candy_count,
  egg,
  spawn_chance,
  spawn_time,
  next_evolution,
  weaknesses,
}: any) => {
  return (
    <PokeCardStyled key={id}>
      <div className="flipcards">
        <div className="flipcard flipcard">
          <div className="flipcard__inner">
            <div className="__front">
              <img src={img} alt={name} />
              <PokemonNumber>#{num}</PokemonNumber>
              <PokemonName>{name}</PokemonName>
              <PokemonType>
                <ul>
                  {type.map(function (typePokemon: any) {
                    return (
                      <li
                        className={typePokemon.toLowerCase()}
                        key={typePokemon + id}
                      >
                        {(() => {
                          if (typePokemon === "Grass") {
                            return (
                              <span>
                                <GiHighGrass />
                                Grass
                              </span>
                            );
                          } else if (typePokemon === "Poison") {
                            return (
                              <span>
                                <FaSkullCrossbones size="13px" />
                                Poison
                              </span>
                            );
                          } else if (typePokemon === "Fire") {
                            return (
                              <span>
                                <ImFire size="13px" />
                                Fire
                              </span>
                            );
                          } else if (typePokemon === "Flying") {
                            return (
                              <span>
                                <GiDragonfly size="13px" />
                                Flying
                              </span>
                            );
                          } else if (typePokemon === "Water") {
                            return (
                              <span>
                                <IoWaterSharp size="13px" />
                                Water
                              </span>
                            );
                          } else if (typePokemon === "Bug") {
                            return (
                              <span>
                                <GiLadybug size="13px" />
                                Bug
                              </span>
                            );
                          } else if (typePokemon === "Normal") {
                            return (
                              <span>
                                <GiLadybug size="13px" />
                                Normal
                              </span>
                            );
                          } else if (typePokemon === "Electric") {
                            return (
                              <span>
                                <GiElectric size="15px" />
                                Electric
                              </span>
                            );
                          } else if (typePokemon === "Rock") {
                            return (
                              <span>
                                <GiFallingRocks size="15px" />
                                Rock
                              </span>
                            );
                          } else if (typePokemon === "Ground") {
                            return (
                              <span>
                                <GiGroundbreaker size="15px" />
                                Ground
                              </span>
                            );
                          } else if (typePokemon === "Psychic") {
                            return (
                              <span>
                                <GiPsychicWaves size="15px" />
                                Psychic
                              </span>
                            );
                          } else if (typePokemon === "Ice") {
                            return (
                              <span>
                                <GiIceCube size="15px" />
                                Ice
                              </span>
                            );
                          } else if (typePokemon === "Ghost") {
                            return (
                              <span>
                                <GiGhost size="15px" />
                                Ghost
                              </span>
                            );
                          } else if (typePokemon === "Fighting") {
                            return (
                              <span>
                                <GiBoxingGloveSurprise size="15px" />
                                Fighting
                              </span>
                            );
                          } else if (typePokemon === "Dragon") {
                            return (
                              <span>
                                <GiSpikedDragonHead size="15px" />
                                Dragon
                              </span>
                            );
                          } else {
                            return (
                              <span>
                                <FaSkullCrossbones size="13px" />
                                {typePokemon}
                              </span>
                            );
                          }
                        })()}
                      </li>
                    );
                  })}
                </ul>
              </PokemonType>
            </div>
            <div className="__back">
              <PokemonBackInfo>
                <h4>{name}</h4>
                <ul>
                  <li>
                    <strong>
                      <FaCandyCane />
                      Candy
                    </strong>{" "}
                    <span>{candy}</span>
                  </li>
                  <li>
                    <strong>
                      <GiCandyCanes />
                      Candy Count
                    </strong>
                    <span> {candy_count}</span>
                  </li>
                  <li>
                    <strong>
                      <GiEasterEgg />
                      Egg
                    </strong>{" "}
                    <span>{egg}</span>
                  </li>
                  <li>
                    <strong>
                      <FaRulerVertical />
                      Height
                    </strong>{" "}
                    <span>{height}</span>
                  </li>
                  <li>
                    <strong>
                      <GiWeight />
                      Weight
                    </strong>{" "}
                    <span>{weight}</span>
                  </li>
                  <li>
                    <strong>
                      <FaSearchLocation />
                      Spawn
                    </strong>{" "}
                    <span>{spawn_chance}</span>
                  </li>
                  <li>
                    <strong>
                      <GiTimeBomb />
                      Time
                    </strong>{" "}
                    <span>{spawn_time}</span>
                  </li>
                </ul>
              </PokemonBackInfo>
              <div className="type-wikness">
                <PokemonType>
                  <h5>Type</h5>
                  <ul>
                    {type.map(function (typePokemon: any) {
                      return (
                        <li
                          className={typePokemon.toLowerCase()}
                          key={typePokemon + id}
                        >
                          {(() => {
                            if (typePokemon === "Grass") {
                              return (
                                <span>
                                  <GiHighGrass />
                                  Grass
                                </span>
                              );
                            } else if (typePokemon === "Poison") {
                              return (
                                <span>
                                  <FaSkullCrossbones size="13px" />
                                  Poison
                                </span>
                              );
                            } else if (typePokemon === "Fire") {
                              return (
                                <span>
                                  <ImFire size="13px" />
                                  Fire
                                </span>
                              );
                            } else if (typePokemon === "Flying") {
                              return (
                                <span>
                                  <GiDragonfly size="13px" />
                                  Flying
                                </span>
                              );
                            } else if (typePokemon === "Water") {
                              return (
                                <span>
                                  <IoWaterSharp size="13px" />
                                  Water
                                </span>
                              );
                            } else if (typePokemon === "Bug") {
                              return (
                                <span>
                                  <GiLadybug size="13px" />
                                  Bug
                                </span>
                              );
                            } else if (typePokemon === "Normal") {
                              return (
                                <span>
                                  <GiLadybug size="13px" />
                                  Normal
                                </span>
                              );
                            } else if (typePokemon === "Electric") {
                              return (
                                <span>
                                  <GiElectric size="15px" />
                                  Electric
                                </span>
                              );
                            } else if (typePokemon === "Rock") {
                              return (
                                <span>
                                  <GiFallingRocks size="15px" />
                                  Rock
                                </span>
                              );
                            } else if (typePokemon === "Ground") {
                              return (
                                <span>
                                  <GiGroundbreaker size="15px" />
                                  Ground
                                </span>
                              );
                            } else if (typePokemon === "Psychic") {
                              return (
                                <span>
                                  <GiPsychicWaves size="15px" />
                                  Psychic
                                </span>
                              );
                            } else if (typePokemon === "Ice") {
                              return (
                                <span>
                                  <GiIceCube size="15px" />
                                  Ice
                                </span>
                              );
                            } else if (typePokemon === "Ghost") {
                              return (
                                <span>
                                  <GiGhost size="15px" />
                                  Ghost
                                </span>
                              );
                            } else if (typePokemon === "Fighting") {
                              return (
                                <span>
                                  <GiBoxingGloveSurprise size="15px" />
                                  Fighting
                                </span>
                              );
                            } else if (typePokemon === "Dragon") {
                              return (
                                <span>
                                  <GiSpikedDragonHead size="15px" />
                                  Dragon
                                </span>
                              );
                            } else {
                              return (
                                <span>
                                  <FaSkullCrossbones size="13px" />
                                  {typePokemon}
                                </span>
                              );
                            }
                          })()}
                        </li>
                      );
                    })}
                  </ul>
                  <h5>Weaknesses</h5>
                  <ul>
                    {weaknesses.map(function (typePokemon: any) {
                      return (
                        <li
                          className={typePokemon.toLowerCase()}
                          key={typePokemon + id}
                        >
                          {(() => {
                            if (typePokemon === "Grass") {
                              return (
                                <span>
                                  <GiHighGrass />
                                  Grass
                                </span>
                              );
                            } else if (typePokemon === "Poison") {
                              return (
                                <span>
                                  <FaSkullCrossbones size="13px" />
                                  Poison
                                </span>
                              );
                            } else if (typePokemon === "Fire") {
                              return (
                                <span>
                                  <ImFire size="13px" />
                                  Fire
                                </span>
                              );
                            } else if (typePokemon === "Flying") {
                              return (
                                <span>
                                  <GiDragonfly size="13px" />
                                  Flying
                                </span>
                              );
                            } else if (typePokemon === "Water") {
                              return (
                                <span>
                                  <IoWaterSharp size="13px" />
                                  Water
                                </span>
                              );
                            } else if (typePokemon === "Bug") {
                              return (
                                <span>
                                  <GiLadybug size="13px" />
                                  Bug
                                </span>
                              );
                            } else if (typePokemon === "Normal") {
                              return (
                                <span>
                                  <GiLadybug size="13px" />
                                  Normal
                                </span>
                              );
                            } else if (typePokemon === "Electric") {
                              return (
                                <span>
                                  <GiElectric size="15px" />
                                  Electric
                                </span>
                              );
                            } else if (typePokemon === "Rock") {
                              return (
                                <span>
                                  <GiFallingRocks size="15px" />
                                  Rock
                                </span>
                              );
                            } else if (typePokemon === "Ground") {
                              return (
                                <span>
                                  <GiGroundbreaker size="15px" />
                                  Ground
                                </span>
                              );
                            } else if (typePokemon === "Psychic") {
                              return (
                                <span>
                                  <GiPsychicWaves size="15px" />
                                  Psychic
                                </span>
                              );
                            } else if (typePokemon === "Ice") {
                              return (
                                <span>
                                  <GiIceCube size="15px" />
                                  Ice
                                </span>
                              );
                            } else if (typePokemon === "Ghost") {
                              return (
                                <span>
                                  <GiGhost size="15px" />
                                  Ghost
                                </span>
                              );
                            } else if (typePokemon === "Fighting") {
                              return (
                                <span>
                                  <GiBoxingGloveSurprise size="15px" />
                                  Fighting
                                </span>
                              );
                            } else if (typePokemon === "Dragon") {
                              return (
                                <span>
                                  <GiSpikedDragonHead size="15px" />
                                  Dragon
                                </span>
                              );
                            } else {
                              return (
                                <span>
                                  <FaSkullCrossbones size="13px" />
                                  {typePokemon}
                                </span>
                              );
                            }
                          })()}
                        </li>
                      );
                    })}
                  </ul>
                </PokemonType>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PokeCardStyled>
  );
};
