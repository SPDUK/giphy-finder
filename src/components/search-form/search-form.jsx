import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ onSearchSubmitted }) {
  let searchField;

  const handleSubmit = e => {
    e.preventDefault();

    onSearchSubmitted(searchField.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={e => (searchField = e)} type="text" placeholder="Find some gifs..." />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired
};
