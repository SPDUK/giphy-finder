import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog';
import { CenteredImage } from './giphy-display-styles';

const giphyDisplay = ({ giphyIsOpen, giphyOnClose, giphy }) => (
  <ModalTransition>
    {giphyIsOpen && (
      <ModalDialog onClose={giphyOnClose}>
        <CenteredImage src={giphy} />
        <div>{giphy}</div>
      </ModalDialog>
    )}
  </ModalTransition>
);

giphyDisplay.propTypes = {
  giphyIsOpen: PropTypes.bool.isRequired,
  giphyOnClose: PropTypes.func.isRequired,
  giphy: PropTypes.string
};
export default giphyDisplay;
