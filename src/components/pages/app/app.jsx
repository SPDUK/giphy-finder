import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../navigation';
import { StyledContainer } from './app-styles';
import GiphyDisplay from '../../giphy-display/giphy-display';
import Footer from '../../footer/footer';
import '../../styles/app.css';

const app = ({ children, giphy, giphyIsOpen, giphyOnClose }) => (
  <>
    <Navigation />
    <StyledContainer>{children}</StyledContainer>
    <GiphyDisplay giphyIsOpen={giphyIsOpen} giphy={giphy} giphyOnClose={giphyOnClose} />
    <Footer />
  </>
);

app.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  giphyIsOpen: PropTypes.bool.isRequired,
  giphy: PropTypes.string,
  giphyOnClose: PropTypes.func.isRequired
};

export default app;
