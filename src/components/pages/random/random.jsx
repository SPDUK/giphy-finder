import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '@atlaskit/spinner';
import Button from '@atlaskit/button';
import { SearchResult } from '../../../lib/custom-types';
import { StyledRandom } from './random-styles';
import randomEmoji from '../../../lib/randomEmoji';

class Random extends Component {
  render() {
    const { giphy, onClick, refresh } = this.props;
    // if there's an image wtihout both a full image and thumbnail, refresh
    if ((giphy && !giphy.full) || (giphy && !giphy.thumbnail)) refresh();
    return (
      <StyledRandom>
        {giphy ? (
          <>
            <img onClick={() => onClick(giphy.full)} src={giphy.thumbnail} alt="gif" />
            <Button appearance="warning" onClick={() => refresh()}>
              {randomEmoji()} Next Random Gif {randomEmoji()}
            </Button>
          </>
        ) : (
          <Spinner />
        )}
      </StyledRandom>
    );
  }
}

Random.propTypes = {
  giphy: SearchResult,
  onClick: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired
};

export default Random;
