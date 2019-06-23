import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../../search-form/search-form';
import SearchResults from '../../search-results/search-results.container';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';

const search = ({ onSearchSubmitted, onInfiniteScroll, isLoading }) => (
  <>
    <SearchForm onSearchSubmitted={onSearchSubmitted} />
    <InfiniteScroll isLoading={isLoading} onTrigger={onInfiniteScroll}>
      <SearchResults />
    </InfiniteScroll>
  </>
);

search.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default search;
