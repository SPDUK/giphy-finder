import { LOCATION_CHANGE } from 'connected-react-router';
import { SEARCH_SUCCESS, NEW_SEARCH, PERFORM_SEARCH, SEARCH_ERROR } from '../actions/search';

const initialState = {
  searchTerm: '',
  results: [],
  offset: 0,
  isLoading: false,
  isActive: false
};

const transformSearchResult = ({ images }) => ({
  thumbnail: images.fixed_height_small_still.url,
  full: images.original.url
});

// state for previous path to fix issues with componentDidMount
let prevPath = '';

export default (state, action) => {
  if (state === undefined) return initialState;
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        offset: state.offset + 50,
        results: state.results.concat(action.results.map(transformSearchResult)),
        isLoading: false,
        isActive: action.results.length === 50
      };
    case NEW_SEARCH:
      return {
        ...state,
        results: [],
        offset: 0,
        searchTerm: action.searchTerm
      };
    case PERFORM_SEARCH:
      return {
        ...state,
        isLoading: true
      };
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isActive: false
      };
    case LOCATION_CHANGE:
      const { pathname } = action.payload.location;
      if (prevPath === pathname) return state;
      prevPath = pathname;
      return initialState;
    default:
      return state;
  }
};
