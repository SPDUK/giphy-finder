import { SHOW_GIPHY_DISPLAY, HIDE_GIPHY_DISPLAY } from '../actions/giphy-display';

const initialState = {
  giphyIsOpen: false,
  giphy: ''
};

export default (state, action) => {
  if (state === undefined) return initialState;
  switch (action.type) {
    case SHOW_GIPHY_DISPLAY:
      return {
        ...state,
        giphyIsOpen: true,
        giphy: action.giphy
      };
    case HIDE_GIPHY_DISPLAY:
      return {
        ...state,
        giphyIsOpen: false,
        giphy: null
      };
    default:
      return state;
  }
};
