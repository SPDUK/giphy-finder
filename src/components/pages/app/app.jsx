import React from 'react';
import Navigation from '../../navigation';
import { StyledApp, StyledContainer } from './app-styles';

const app = ({ children }) => (
  <StyledApp>
    <Navigation />
    <StyledContainer>{children}</StyledContainer>
  </StyledApp>
);

export default app;
