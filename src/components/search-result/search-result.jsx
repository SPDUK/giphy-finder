import React from 'react';
import * as CustomTypes from '../../lib/custom-types';

const searchResult = ({ result }) => {
  const { thumbnail } = result;
  return <img src={thumbnail} alt={thumbnail} />;
};

searchResult.propTypes = {
  result: CustomTypes.SearchResult
};

export default searchResult;
