import { SEARCH_SUCCESS } from '../actions/search';

const initialState = {
  results: []
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
        results: action.results.map(searchResultTransformer)
      };
    default:
      return state;
  }
};
