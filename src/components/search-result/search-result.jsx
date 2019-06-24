import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as CustomTypes from '../../lib/custom-types';

const StyledImg = styled.img`
  cursor: pointer;
  transition: 0.1s ease-out;
  &:hover {
    transform: scale(1.03);
  }
`;

const searchResult = ({ result: { thumbnail }, onClick }) => (
  <StyledImg onClick={onClick} src={thumbnail} alt={thumbnail} />
);

searchResult.propTypes = {
  result: CustomTypes.SearchResult,
  onClick: PropTypes.func.isRequired
};

export default searchResult;
