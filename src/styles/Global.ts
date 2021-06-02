import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: #d9d9d9;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html, border-style, #root {
        max-width: 100vw;
        max-height: 100vh;

        width: 100%;
        height: 100%;
    }

    html {
        background: #000;
    }
`;