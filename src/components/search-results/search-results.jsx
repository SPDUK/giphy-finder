import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-types';
import SearchResult from '../search-result';

const searchResults = ({ results }) => (
  <>
    {results.map(result => (
      <SearchResult key={result.thumbnail} result={result} />
    ))}
  </>
);

searchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult)
};

export default searchResults;
