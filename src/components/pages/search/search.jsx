import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../../search-form/search-form';
import SearchResults from '../../search-results/search-results.container';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';

const search = ({ onSearchSubmitted, onInfiniteScroll }) => (
  <>
    <SearchForm onSearchSubmitted={onSearchSubmitted} />
    <InfiniteScroll isLoading={false} onTrigger={onInfiniteScroll}>
      <SearchResults />
    </InfiniteScroll>
  </>
);

search.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired
};

export default search;
