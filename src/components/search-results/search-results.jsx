import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-types';
import SearchResult from '../search-result/search-result';
import { SearchContainer } from './search-results-styles';

const searchResults = ({ results }) => (
  <SearchContainer>
    {results.map(result => (
      <SearchResult key={result.thumbnail} result={result} />
    ))}
  </SearchContainer>
);

searchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult)
};

export default searchResults;
