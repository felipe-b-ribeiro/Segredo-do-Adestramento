import styled from "styled-components";
import Fundo from "../../assets/fundo.webp";

export const SC_Main = styled.main`
  background: linear-gradient(#151515, #000);
  color: #f2f2f2;
  display: grid;
  font-size: clamp(12px, 2vw + 2px, 18px);
  grid-template-columns:
    [breakout-start] 6vw
    [content-start] 88vw [content-end]
    6vw [breakout-end];
  justify-items: center;
  overflow-x: hidden;
  position: relative;
  text-align: center;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns:
    [breakout-start] 20vw
    [content-start] 60vw [content-end]
    20vw [breakout-end];
  }

  > * {
    z-index: 1;
    grid-column: content;
  }

  & p {
    font-size: clamp(16px, 2.5vw + 2px, 26px);
    font-weight: 500;
    margin-bottom: 10px;
    max-width: min(100%, 700px);
  }

  & sup {
    font-size: 0.6em;
  }

  > .instagram-pic {
    width: min(500px, 100%);
    margin-top: 20px;
    border-radius: 20px;
  }

  > .secondary {
    position: relative;
    padding: 0 7vw 30px;
    color: black;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 0;

    @media (min-width: 1024px) {
      padding: 0 20vw 30px;
    }

    & strong {
      color: #1e9587;
      font-weight: inherit;
    }

    & small {
      font-size: clamp(12px, 2vw + 2px, 20px);
      text-align: left;
      width: 90%;
      margin-bottom: 20px;
      max-width: min(100%, 700px)
    }

    > .card-grid {
      display: grid;
      grid-template-columns: 47.5% 47.5%;
      grid-column: content;
      gap: 20px 5%;
      position: relative;
      width: 100%;

      & div {
        &:nth-child(1) {grid-area: 1 / 1;}
        &:nth-child(2) {grid-area: 2 / 2;}
        &:nth-child(3) {grid-area: 3 / 1;}
        &:nth-child(4) {grid-area: 4 / 2;}
        &:nth-child(5) {grid-area: 5 / 1;}
        &:nth-child(6) {grid-area: 6 / 2;}
        &:nth-child(7) {grid-area: 7 / 1;}
        &:nth-child(8) {grid-area: 8 / 2;}
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: -6%;
      width: 200%;
      height: 105%;
      background-image: url(${Fundo});
      background-size: cover;
      background-position: center;
      transform: rotate(-3deg);
      z-index: -1;
      filter: contrast(80%);

      @media (min-width: 768px) {
        transform: rotate(-1.5deg);
      }
    }

    &:nth-of-type(2) {
      &::before {
        top: 0%;
        height: 99%;
        transform: rotate(2deg);
      }
    }

    &:nth-of-type(4) {
      &::before {
        top: -10%;
        height: 107%;
        transform: rotate(0deg);
      }
    }

    > .question-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 80vw));
      gap: 20px;
    }

    & details {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border: 1px solid #545454;
      border-radius: 10px;
      transition: 0.5s ease;
      width: 100%;
      font-size: clamp(15px, 2vw + 2.5px, 20px);

      &[open] > p {
        max-height: 500px;
        opacity: 1;
        padding: 0 10px;
      }

      > p {
        font-size: inherit;
        text-align: left;
        padding-left: 23px;
        max-width: 100%;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: all 0.3s ease;
        padding: 0 10px;
      }
    }

    & summary {
      width: 100%;
      padding: 10px;
      text-align: left;
      
    }
  }

  > .logo {
    margin: 10px 0 5px 0;
    width: min(25vw, 150px);
  }

  & .subheadline {
    margin: 20px 0;
    font-family: "Poetsen One";
    > strong {
      font-family: inherit;
      color: #1e9587;
    }
  }

  > .headline {
    margin-top: min(25px, 5%);
    line-height: 1;
    font-family: "Poetsen One";
    font-size: clamp(24px, 2em + 0.5vw, 40px);
    max-width: min(85%, 700px);
    > strong {
      font-family: inherit;
      color: #1e9587;
    }
  }

  > .back-paw {
    position: absolute;
    z-index: 0;
    &:nth-child(1) {
      left: -20%;
      top: 60px;
      transform: rotateZ(20deg);
    }
    &:nth-child(2) {
      right: -30%;
      top: 300px;
      transform: rotateZ(-20deg);
    }
  }

  > .vsl {
    width: min(800px, 100%);
    margin: min(30px, 5%) 0;
    aspect-ratio: 16 / 9;
    border-radius: 15px;
    border: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  > footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
      padding: 20px 0 10px 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      width: min(100%, 500px);
      font-size: clamp(15px, 2vw + 2.5px, 20px);

      > img {
        margin: 10px 0;
      }

      > span:first-child {
        display: flex;
        flex-direction: column;
        gap: 5px;
        
        > a {
        text-decoration: underline;
      }
      }
      > span:nth-child(2) {
        max-width: 70%;
        > strong {
          color: red;
        }
      }
    }
    & strong {
      color: #1e9587;
    }
  }

  > .breakout {
    grid-column: breakout;
  }
`;
