import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { hideGiphyDisplay } from '../../../actions/giphy-display';
import App from './app';

function mapStateToProps({ giphyDisplay: { giphy, giphyIsOpen } }) {
  return {
    giphy,
    giphyIsOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    giphyOnClose: () => dispatch(hideGiphyDisplay())
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
