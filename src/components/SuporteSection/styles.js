import styled from "styled-components";

export const SC_SuporteSection = styled.section`
  position: relative;
  padding: 30px 5px;
  color: white;
  display: flex;
  align-items: center;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 40px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  > button {
    border-radius: 15px;
    border: 1px solid black;
    padding: 10px 15px;
    background-color: #1e8428;
    color: white;
    white-space: nowrap;
    font-size: clamp(16px, 2vw + 2.5px, 22px);
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.5s ease;

    &:hover {
      cursor: pointer;
      box-shadow: inset 0px 0px 0px 0px green;
      transform: scale(1.05);
    }
  }

  & h3,
  h1 {
    text-align: left;
  }

  & h1 {
    font-size: clamp(20px, 3vw + 2.5px, 40px);
  }

  &::before {
    content: "";
    position: absolute;
    top: -2%;
    left: -50%;
    width: 200%;
    height: 104%;
    background-color: #2ac539;
    transform: rotate(-3deg);
    z-index: -1;

    @media (min-width: 768px) {
      height: 110%;
      top: -7%;
      transform: rotate(-1.5deg);
    }
  }
`;
