import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from { transform: translate(-50%, -50%) rotateZ(0deg);}
    to { transform: translate(-50%, -50%) rotateZ(360deg);}
`

export const SC_Selo = styled.article`
    width: min(400px, 60%);
    aspect-ratio: 1 / 1;
    position: relative;
    margin-bottom: 20px;

    > img {
        width: 100%;
        &:first-child {
            position: absolute;
            top: 50%;
            left: 50%;
            animation: ${rotate} 13s infinite linear;
        }
        &:nth-child(2) {
            position: absolute;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
        }
    }

    > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 86%;
        animation: ${rotate} 13s infinite linear reverse;
        animation-fill-mode: forwards;
    }

    & textPath {
        fill: white;
    }
`

export const SC_SvgResposivo = styled.svg`
    width: 100%;
    height: auto;
    display: block;
`;