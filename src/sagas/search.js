import axios from 'axios';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { PERFORM_SEARCH, searchSuccess, searchError } from '../actions/search';

// this is fine to be public, it's a dev key
const apiKey = 'QROWYp5yKBH82sfU7V89Z9N1AS7RWyDf';

// use select to get the current search state
// https://redux-saga.js.org/docs/api/#selectselector-args
const selectSearchState = state => state.search;

// if there is no search term or we are on the trending page, load the trending gifs
function* doSearch() {
  const { offset, searchTerm } = yield select(selectSearchState);
  try {
    const q = searchTerm ? searchTerm.replace(' ', '%20') : '';
    const params = {
      apiKey,
      q,
      limit: 50,
      offset
    };
    const endpoint = searchTerm ? 'search' : 'trending';
    const {
      data: { data }
    } = yield call(axios.get, `https://api.giphy.com/v1/gifs/${endpoint}`, { params });

    yield put(searchSuccess(data));
  } catch (e) {
    yield put(searchError());
  }
}
// take the latest dispatched search perform action
// when it happens, run doSearch with the action as an argument
export default function*() {
  yield takeLatest(PERFORM_SEARCH, doSearch);
}
