import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { LOCATION_CHANGE } from 'connected-react-router';

import { getRandomGiphySuccess, getRandomGiphyError, GET_RANDOM_GIPHY } from '../actions/random';

const apiKey = process.env.REACT_APP_API_KEY;

export function* getRandomGiphy() {
  try {
    const params = {
      apiKey
    };

    const {
      data: { data }
    } = yield call(axios.get, `https://api.giphy.com/v1/gifs/random`, { params });

    yield put(getRandomGiphySuccess(data));
  } catch (error) {
    yield put(getRandomGiphyError());
  }
}

export function* onLocationChange({ payload: { location } }) {
  if (location.pathname === '/random') {
    yield getRandomGiphy();
  }
}

export default function*() {
  yield takeLatest(LOCATION_CHANGE, onLocationChange);
  yield takeLatest(GET_RANDOM_GIPHY, getRandomGiphy);
}
