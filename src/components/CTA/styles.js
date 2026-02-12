import styled from "styled-components";

export const SC_CTA = styled.button`
  background: linear-gradient(to top, #11ceb8, #028a7c);
  border: 1px solid black;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  margin: 5% 0;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: 0.1s ease;
  text-align: center;
  font-weight: 900;
  font-size: clamp(14px, 2vw + 2px, 25px);
  box-shadow: 0px 0px 19px 0px rgba(242, 242, 242, 0.5);
  z-index: 2;

  @media (min-width: 1024px) {
    font-weight: 700;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      filter: brightness(110%);
      box-shadow: 0px 0px 19px 6px rgba(242, 242, 242, 0.5);
    }
  }

  &.oferta {
    margin: 0;
    display: inline-block;
    position: relative;
    overflow: hidden;

    > .border-gradient-bottom {
      position: absolute;
      width: 300%;
      height: 50%;
      opacity: 0.7;
      bottom: -12px;
      right: -250%;
      border-radius: 50%;
      background: radial-gradient(circle, white, transparent 10%);
      animation: star-movement-bottom linear infinite alternate;
      animation-duration: 1.5s;
      z-index: 0;
    }

    > .border-gradient-top {
      position: absolute;
      opacity: 0.7;
      width: 300%;
      height: 50%;
      top: -12px;
      left: -250%;
      border-radius: 50%;
      background: radial-gradient(circle, white, transparent 10%);
      animation: star-movement-top linear infinite alternate;
      animation-duration: 1.5s;
      z-index: 0;
    }

    @keyframes star-movement-bottom {
      0% {
        transform: translate(0%, 0%);
        opacity: 1;
      }
      100% {
        transform: translate(-100%, 0%);
        opacity: 0;
      }
    }

    @keyframes star-movement-top {
      0% {
        transform: translate(0%, 0%);
        opacity: 1;
      }
      100% {
        transform: translate(100%, 0%);
        opacity: 0;
      }
    }
  }
`;
