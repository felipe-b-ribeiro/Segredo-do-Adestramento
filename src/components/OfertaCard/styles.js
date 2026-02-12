import styled from "styled-components";

export const SC_OfertaCard1 = styled.div`
  border: 1px solid #545454;
  background-color: #d1d1d1;
  border-radius: 25px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: min(90%, 500px);
  position: relative;

  > p {
    text-align: left;
    line-height: 1.1;
  }
`;
export const SC_OfertaCard2 = styled.div`
  border: 1px solid #545454;
  background-color: #bbbbbb;
  border-radius: 25px;
  padding: 15px 15px 30px;

  > div {
    width: 100%;

    > hr {
      position: absolute;
      height: 33%;
      width: 1px;
      left: 23px;
      top: 15px;
      z-index: 1;
      border: none;
      background-color: #545454;
    }

    > p:not(:last-child) {
      padding-left: 20px;
      position: relative;

      > svg {
        position: relative;
        display: block;
        margin-bottom: -20px;
        margin-left: -20px;
        z-index: 2;
        background-color: #d1d1d1;
      }

      @media (min-width: 768px) {
        margin-left: 10px;

        > svg {
          margin-left: -33px;
        }
      }

      @media (min-width: 1024px) {
        padding-left: 20px;

        > svg {
          margin-left: -33px;
          margin-bottom: -27px;
        }
      }

      > span {
        max-width: 100%;
        display: inline-block;
        line-height: 1;
        margin-bottom: 8px;
      }
    }

    > p:last-child {
      text-align: center;
      margin: 0;
      > strong {
        color: #ff701f;
      }
    }

    > h1 {
      line-height: 1;
    }

    > div {
      background-color: #0a5c52;
      border-radius: 20px;
      padding: 8px;
      color: white;

      > h5 {
        /* margin-top: -7px; */
      }

      > .forma-pag {
        display: flex;
        flex-direction: column;
        gap: -5px;
        margin-top: 5px;

        > span {
          display: flex;
          gap: 10px;
          align-self: center;
        }
      }

      & strong {
        color: #2ac539 !important;
      }
    }
  }
`;
