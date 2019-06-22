import React from 'react';
import * as CustomTypes from '../../lib/custom-types';

export default function SearchResult({ result }) {
  const { thumbnail } = result;
  return <img src={thumbnail} alt={thumbnail} />;
}
SearchResult.propTypes = {
  result: CustomTypes.SearchResult
};
