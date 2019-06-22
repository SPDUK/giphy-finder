import React from 'react';
import SearchForm from './components/search-form/search-form.container';
import SearchResults from './components/search-results/search-results.container';

function App() {
  return (
    <div>
      <SearchForm />
      <SearchResults />
    </div>
  );
}

export default App;
