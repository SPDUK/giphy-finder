import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { SEARCH_PERFORMED, searchSuccess, searchError } from '../actions/search';

// this is fine to be public, it's a dev key
const apiKey = 'QROWYp5yKBH82sfU7V89Z9N1AS7RWyDf';

function* doSearch({ searchTerm }) {
  try {
    const q = searchTerm.replace(' ', '%20');
    const params = {
      apiKey,
      q,
      limit: 50
    };
    const searchResults = yield call(axios.get, `https://api.giphy.com/v1/gifs/search`, {
      params
    });

    yield put(searchSuccess(searchResults.data.data));
  } catch (e) {
    yield put(searchError());
  }
}
// take the latest dispatched search perform action
// when it happens, run doSearch with the action as an argument
export default function*() {
  yield takeLatest(SEARCH_PERFORMED, doSearch);
}
