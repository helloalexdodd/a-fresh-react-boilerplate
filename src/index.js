import React from 'react';
import { render } from 'react-dom';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import GlobalStyle, { WebfontLoaderConfig } from './Global.style';
import App from './components/containers/App';

render(
  <React.StrictMode>
    <GlobalStyle />
    <WebfontLoader config={WebfontLoaderConfig}>
      <App />
    </WebfontLoader>
  </React.StrictMode>,
  document.querySelector('#app'),
);
