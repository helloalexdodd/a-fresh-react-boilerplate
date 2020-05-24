import React from 'react';
import { render } from 'react-dom';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
<<<<<<< HEAD
import { App } from 'components';
import GlobalStyle, { WebfontLoaderConfig } from './Global.style';
=======
import GlobalStyle, { WebfontLoaderConfig } from './Global.style';
import App from './components/containers/App';
>>>>>>> d2c7d3f9e07f4e2eebc7bd4b3ff23452a523c3c9

render(
  <React.StrictMode>
    <GlobalStyle />
    <WebfontLoader config={WebfontLoaderConfig}>
      <App />
    </WebfontLoader>
  </React.StrictMode>,
  document.querySelector('#app'),
);
