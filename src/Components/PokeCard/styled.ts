import styled from "styled-components";

export const PokeCardStyled = styled.div`
  --cardW: 250px;
  --cardH: 300px;
  --fontFam: "Open Sans", sans-serif;
  --color1: #333;
  --color2: #333;
  --color3: #333;

  .flipcards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3em;
    font-family: var(--fontFam);
  }
  .flipcards .flipcard {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: var(--cardW);
    height: var(--cardH);
    border-radius: 10px;
    perspective: 1000px;
    box-shadow: 0;
    margin-bottom: 20px;
  }
  .flipcards .flipcard:hover .flipcard__inner {
    transform: rotateY(-180deg);
  }
  .flipcards .flipcard__inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
  }
  .flipcards .flipcard__inner .__front,
  .flipcards .flipcard__inner .__back {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Safari */
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    box-sizing: border-box;
    background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
    border: 5px solid #00000012;
    border-radius: 10px;
    padding: 20px;
  }
  .flipcards .flipcard__inner .__front {
    z-index: 1;
    flex-flow: column;
    background-color: var(--color3);
  }
  .flipcards .flipcard__inner .__back {
    transform: rotateY(-180deg);
    z-index: 2;
    display: block;

    h4 {
      margin-top: 5px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;

      li {
        padding: 5px;
        border: 1px solid #ccc;
        margin-bottom: 5px;
        font-size: 12px;
        margin: 3px;
      }
    }
  }
  .flipcards .flipcard__inner .__back p {
    font-size: 3em;
  }
`;

export const PokemonType = styled.div`
  margin: 0;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    margin: 0;
    justify-content: center;

    li {
      padding: 7px;
      border-radius: 5px;
      background: #000;
      margin: 5px;
      color: #fff;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 1px 1px 1px #000;
      }

      svg {
        margin-right: 5px;
      }

      &.grass {
        background: #77cc55;
      }

      &.poison {
        background: #aa5599;
      }

      &.fire {
        background: #ff6144;
      }
      &.flying {
        background: #8899ff;
      }

      &.water {
        background: #52a9ff;
      }

      &.bug {
        background: #aabb22;
      }

      &.normal {
        background: #b7b7a9;
      }
      &.electric {
        background: #ffd34f;
      }
      &.rock {
        background: #775544;
      }
      &.ground {
        background: #ddbb55;
      }
      &.psychic {
        background: #ff5599;
      }
      &.ice {
        background: #66ccff;
      }
      &.ghost {
        background: #6666bb;
      }
      &.fighting {
        background: #af4f40;
      }
      &.dragon {
        background: #7766ee;
      }
    }
  }
`;

export const PokemonName = styled.h3`
  margin-top: 5px;
`;

export const PokemonNumber = styled.span`
  font-size: 12px;
  font-style: italic;
  display: block;
  margin-top: 10px;
`;
