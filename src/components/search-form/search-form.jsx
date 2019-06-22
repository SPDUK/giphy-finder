import React from 'react';
import PropTypes from 'prop-types';

const searchForm = ({ onSearchSubmitted }) => {
  // pretend state management stuff
  let searchField;

  const handleSubmit = e => {
    e.preventDefault();
    onSearchSubmitted(searchField.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={e => (searchField = e)} type="text" placeholder="Find some gifs..." />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

searchForm.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired
};

export default searchForm;
