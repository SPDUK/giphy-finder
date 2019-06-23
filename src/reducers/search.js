import { SEARCH_SUCCESS, NEW_SEARCH } from '../actions/search';

const initialState = {
  searchTerm: '',
  results: [],
  offset: 0
};

const searchResultTransformer = ({ images }) => ({
  thumbnail: images.fixed_height_small_still.url,
  full: images.original.url
});

export default (state, action) => {
  if (state === undefined) return initialState;
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        offset: state.offset + 50,
        results: state.results.concat(action.results.map(searchResultTransformer))
      };
    case NEW_SEARCH:
      return {
        ...state,
        results: [],
        offset: 0,
        searchTerm: action.searchTerm
      };
    default:
      return state;
  }
};
