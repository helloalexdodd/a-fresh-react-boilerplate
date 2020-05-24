import React from 'react';
import Logo from 'assets/logo.png';
import { Container, P } from './style/App.style';

const App = () => (
  <Container>
    <img src={Logo} alt="A Fresh React Boilerplate" />
    <P>Thanks for downloading!</P>
  </Container>
);

export default App;
