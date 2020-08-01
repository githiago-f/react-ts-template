import { createGlobalStyle } from 'styled-components';

export const StyledBase = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
    }
    p {
        font-size: calc(1rem + .5vw);
    }
    .container {
        max-width: 700px;
        margin: auto;
    }
`;
