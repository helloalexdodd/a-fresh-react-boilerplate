import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'assets/logo.png';
import { Container, P } from './style/App.style';

const App = ({ message }) => (
  <Container>
    <img src={Logo} alt="A Fresh React Boilerplate" />
    <P>{message}</P>
  </Container>
);

App.defaultProps = {
  message: 'Thank-you for downloading!',
};

App.propTypes = {
  message: PropTypes.string,
};

export default App;
