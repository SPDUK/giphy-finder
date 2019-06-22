import React from 'react';
import SearchForm from './components/search-form';
import SearchResults from './components/search-results';

const results = [
  {
    full:
      'https://media2.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=f35e07535d0e6acf75564d426bb43c42&rid=giphy.gif',
    thumbnail:
      'https://media2.giphy.com/media/mlvseq9yvZhba/100_s.gif?cid=f35e07535d0e6acf75564d426bb43c42&rid=100_s.gif'
  },
  {
    full:
      'https://media2.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=f35e07535d0e6acf75564d426bb43c42&rid=giphy.gif',
    thumbnail:
      'https://media2.giphy.com/media/JIX9t2j0ZTN9S/100_s.gif?cid=f35e07535d0e6acf75564d426bb43c42&rid=100_s.gif'
  }
];
function App() {
  return (
    <div>
      <SearchForm onSearchSubmitted={console.log} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
