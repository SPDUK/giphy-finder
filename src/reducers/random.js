import { LOCATION_CHANGE } from 'connected-react-router';
import { GET_RANDOM_GIPHY_SUCCESS, GET_RANDOM_GIPHY_ERROR } from '../actions/random';

const initialState = {
  giphy: undefined
};

/* eslint-disable */
const transformRandomGiphyResult = giphy => {
  // if for some reason there's an error with either of the images return an "error" gif
  if (!giphy) {
    return {
      thumbnail: 'https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif',
      full: 'https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif'
    };
  }
  const { fixed_width_downsampled_url, image_original_url } = giphy;
  return {
    thumbnail: fixed_width_downsampled_url,
    full: image_original_url
  };
};
/* eslint-enable */

export default (state, action) => {
  if (state === undefined) return initialState;
  switch (action.type) {
    case GET_RANDOM_GIPHY_SUCCESS:
      return {
        ...state,
        giphy: transformRandomGiphyResult(action.giphy)
      };
    case LOCATION_CHANGE:
      return initialState;
    default:
      return state;
  }
};
