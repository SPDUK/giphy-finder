import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../navigation';
import { StyledApp, StyledContainer } from './app-styles';

const app = ({ children }) => (
  <StyledApp>
    <Navigation />
    <StyledContainer>{children}</StyledContainer>
  </StyledApp>
);

app.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default app;
