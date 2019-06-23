import PropTypes from 'prop-types';
import Textfield from '@atlaskit/textfield';
import React, { Component } from 'react';
import { StyledForm } from './search-form-styles';

class SearchForm extends Component {
  state = {
    search: ''
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;
    const { onSearchSubmitted } = this.props;
    onSearchSubmitted(search);
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Textfield
          name="search"
          onChange={this.handleOnChange}
          autoFocus
          width="xlarge"
          placeholder="Search for some gifs..."
        />
      </StyledForm>
    );
  }
}

SearchForm.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired
};

export default SearchForm;
