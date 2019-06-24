import { LOCATION_CHANGE } from 'connected-react-router';
import { GET_RANDOM_GIPHY_SUCCESS } from '../actions/random';

const initialState = {
  giphy: undefined
};

// eslint-disable-next-line
const transformRandomGiphyResult = ({ fixed_width_downsampled_url, image_original_url }) => ({
  thumbnail: fixed_width_downsampled_url,
  full: image_original_url
});

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
