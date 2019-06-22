import React from 'react';
import SearchForm from './components/search-form';
import SearchResults from './components/search-results/search-results.container';

function App() {
  return (
    <div>
      <SearchForm onSearchSubmitted={console.log} />
      <SearchResults />
    </div>
  );
}

export default App;
