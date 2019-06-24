import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import searchReducer from './search';
import randomReducer from './random';

import giphyDisplayReducer from './giphyDisplay';

export default history =>
  combineReducers({
    router: connectRouter(history),
    search: searchReducer,
    random: randomReducer,
    giphyDisplay: giphyDisplayReducer
  });
