import React from 'react';
import { Container, P } from './App.style';
import logo from '../../assets/logo.png';

const App = () => (
	<Container>
		<img src={logo} alt='A Fresh React Boilerplate' />
		<P>Thanks for downloading!</P>
	</Container>
);

export default App;
