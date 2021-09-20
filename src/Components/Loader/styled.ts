import styled from "styled-components";

export const PokeballLoader = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffffcf;
  z-index: 9;

  p {
    position: absolute;
    bottom: 20%;
    font-weight: bold;
    font-family: "PokemonFont";
    font-size: 24px;
    text-align: center;

    @media (max-width: 468px) {
      bottom: 15%;
    }
  }
  .pokeball {
    position: relative;
    width: 200px;
    height: 200px;
    background: #fff;
    border: 10px solid #000;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset -10px 10px 0 10px #ccc;
    animation: fall 0.25s ease-in-out,
      shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;
  }
  .pokeball::before,
  .pokeball::after {
    content: "";
    position: absolute;
  }
  .pokeball::before {
    background: red;
    width: 100%;
    height: 50%;
  }
  .pokeball::after {
    top: calc(50% - 10px);
    width: 100%;
    height: 20px;
    background: #000;
  }
  .pokeball__button {
    position: absolute;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    width: 60px;
    height: 60px;
    background: #7f8c8d;
    border: 10px solid #fff;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 10px black;
    animation: blink 0.5s alternate 7;
  }
  /* Animation */
  @keyframes blink {
    from {
      background: #eee;
    }
    to {
      background: #e74c3c;
    }
  }
  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-20deg);
    }
    30% {
      transform: translate(10px, 0) rotate(20deg);
    }
    50% {
      transform: translate(-10px, 0) rotate(-10deg);
    }
    60% {
      transform: translate(10px, 0) rotate(10deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
  @keyframes fall {
    0% {
      top: -200px;
    }
    60% {
      top: 0;
    }
    80% {
      top: -20px;
    }
    100% {
      top: 0;
    }
  }
`;
