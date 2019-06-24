import React from 'react';
import PropTypes from 'prop-types';
import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog';
import Button from '@atlaskit/button';
import { ToastContainer, toast } from 'react-toastify';
import { CenteredImage, StyledActions } from './giphy-display-styles';
import 'react-toastify/dist/ReactToastify.css';

const copyToClipBoard = async giphy => {
  try {
    await navigator.clipboard.writeText(giphy);
    toast('🦄 Copied URL to clipboard!');
  } catch (e) {
    toast.error("😡 Couldn't copy to clipboard!");
  }
};

const giphyDisplay = ({ giphyIsOpen, giphyOnClose, giphy }) => (
  <>
    <ToastContainer position="top-right" autoClose={5000} draggable pauseOnHover={false} />
    <ModalTransition>
      {giphyIsOpen && (
        <ModalDialog onClose={giphyOnClose}>
          <CenteredImage src={giphy} />
          <StyledActions>
            <Button aappearance="default" onClick={giphyOnClose}>
              Close
            </Button>

            <Button onClick={() => copyToClipBoard(giphy)} autoFocus appearance="primary">
              Copy to Clipboard
            </Button>
          </StyledActions>
        </ModalDialog>
      )}
    </ModalTransition>
  </>
);

giphyDisplay.propTypes = {
  giphyIsOpen: PropTypes.bool.isRequired,
  giphyOnClose: PropTypes.func.isRequired,
  giphy: PropTypes.string
};
export default giphyDisplay;
