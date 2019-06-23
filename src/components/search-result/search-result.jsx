import React from 'react';
import * as CustomTypes from '../../lib/custom-types';

const searchResult = ({ result: { thumbnail } }) => <img src={thumbnail} alt={thumbnail} />;

searchResult.propTypes = {
  result: CustomTypes.SearchResult
};

export default searchResult;
