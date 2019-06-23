import React from 'react';
import SearchForm from '../../search-form/search-form.container';
import SearchResults from '../../search-results/search-results.container';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';

const search = () => (
  <>
    <SearchForm />
    <InfiniteScroll isLoading={false} onTrigger={() => console.log('infnite scroll')}>
      <SearchResults />
    </InfiniteScroll>
  </>
);

export default search;
