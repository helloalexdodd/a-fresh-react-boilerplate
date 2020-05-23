import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {-moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; font-size: 62.5%}

  *, *:before, *:after {box-sizing: inherit}

  body {font-family: 'Open Sans', 'Segoe UI', Tahoma, sans-serif; font-size: 1.2rem;}
`;

export const WebfontLoaderConfig = {
  google: {
    families: ['Open Sans'],
  },
};

export default GlobalStyle;
