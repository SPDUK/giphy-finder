import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '@atlaskit/spinner';
import { SearchResult } from '../../../lib/custom-types';

class Random extends Component {
  render() {
    const { giphy, onClick, refresh } = this.props;
    // if there's an image wtihout both a full image and thumbnail, refresh
    if ((giphy && !giphy.full) || (giphy && !giphy.thumbnail)) refresh();
    return (
      <>
        <button onClick={() => refresh()}>Next Gif</button>
        {giphy ? (
          <img onClick={() => onClick(giphy.full)} src={giphy.thumbnail} alt="" />
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}

Random.propTypes = {
  giphy: SearchResult,
  onClick: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired
};

export default Random;
