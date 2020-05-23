import React from 'react';
import { render } from 'react-dom';
import GlobalStyle, { WebfontLoaderConfig } from './Global.style';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import App from './components/containers/App';

render(
	<React.StrictMode>
		<GlobalStyle />
		<WebfontLoader config={WebfontLoaderConfig}>
			<App />
		</WebfontLoader>
	</React.StrictMode>,
	document.querySelector('#app')
);
