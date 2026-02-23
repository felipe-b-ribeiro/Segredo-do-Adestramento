import styled from "styled-components";

export const SC_Main = styled.main`
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 4vw 6vw 0 6vw;
  color: white;
  line-height: 1.3;

  & button {
    border: none;
    position: fixed;
    top: 17px;
    left: 17px;
    background-color: #1e9587;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 7px;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
      background-color: 1e9587;
    }
  }

  > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  & strong {
    font-weight: 700;
  }

  & h2 {
    font-family: "Poetsen One", sans-serif;
    text-align: center;
    font-size: clamp(24px, 4vw, 38px);
  }

  & h4,
  img,
  p {
    margin-bottom: 20px;
  }

  & h4 {
    font-weight: 800;
  }

  & .double-space {
    margin-bottom: 40px;
  }

  & p:first-of-type {
    line-height: 1.5;
    > span {
      display: block;
    }
  }

  & p {
    hyphens: auto;
    overflow-wrap: break-word;
  }

  & ul,
  ol {
    list-style-position: inside;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & ul,
    ol {
      margin: 10px 0 0 20px;
    }
  }

  > footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    font-size: clamp(13px, 2vw + 2.5px, 17px);
    border-top: 1px solid white;

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
    & strong {color: #1e9587}
  }
`;
