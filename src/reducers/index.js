import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import searchReducer from './search';

import giphyDisplayReducer from './giphyDisplay';

export default history =>
  combineReducers({
    router: connectRouter(history),
    search: searchReducer,
    giphyDisplay: giphyDisplayReducer
  });
