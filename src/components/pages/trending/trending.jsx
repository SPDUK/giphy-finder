import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../../search-results/search-results.container';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';

class Trending extends Component {
  componentDidMount() {
    const { onSearchSubmitted } = this.props;
    onSearchSubmitted();
  }

  render() {
    const { onInfiniteScroll, isLoading, isActive } = this.props;
    return (
      <InfiniteScroll isLoading={isLoading} isActive={isActive} onTrigger={onInfiniteScroll}>
        <SearchResults />
      </InfiniteScroll>
    );
  }
}

Trending.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Trending;
