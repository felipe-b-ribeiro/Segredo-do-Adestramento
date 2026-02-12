import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
    }

    body {
        max-height: 100vh;
        line-height: 1.1;
        scroll-behavior: smooth;
    }

    main::-webkit-scrollbar {
        display: none; 
    }

    main {
        -ms-overflow-style: none;  
        scrollbar-width: none;     
        overflow-y: auto;        
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .mb-40 {margin-bottom: 40px !important;}
    .mb-20 {margin-bottom: 20px !important;}
`;

export default globalStyles;
