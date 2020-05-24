import React from 'react';
import logo from 'assets/logo.png';
import { Container, P } from './App.style';

const App = () => (
  <Container>
    <img src={logo} alt="A Fresh React Boilerplate" />
    <P>Thanks for downloading!</P>
  </Container>
);

export default App;
