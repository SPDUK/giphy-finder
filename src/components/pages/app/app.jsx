import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../navigation';
import { StyledApp, StyledContainer } from './app-styles';
import GiphyDisplay from '../../giphy-display/giphy-display';

const app = ({ children, giphy, giphyIsOpen, giphyOnClose }) => (
  <StyledApp>
    <Navigation />
    <StyledContainer>{children}</StyledContainer>
    <GiphyDisplay giphyIsOpen={giphyIsOpen} giphy={giphy} giphyOnClose={giphyOnClose} />
  </StyledApp>
);

app.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  giphyIsOpen: PropTypes.bool.isRequired,
  giphy: PropTypes.string,
  giphyOnClose: PropTypes.func.isRequired
};

export default app;
