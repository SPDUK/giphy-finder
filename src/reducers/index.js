import { combineReducers } from 'redux';
import searchReducer from './search';
import giphyDisplayReducer from './giphyDisplay';

export default combineReducers({ search: searchReducer, giphyDisplay: giphyDisplayReducer });
