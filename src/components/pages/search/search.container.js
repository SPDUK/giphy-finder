import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './search';
import { newSearch, performSearch } from '../../../actions/search';

function mapStateToProps({ search: { isLoading, isActive } }) {
  return {
    isLoading,
    isActive
  };
}

// start a new search or continue a current search
// runs the saga when dispatching
function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmitted: searchTerm => {
      dispatch(newSearch(searchTerm));
      dispatch(performSearch());
    },
    onInfiniteScroll: () => {
      dispatch(performSearch());
    }
  };
}

// passes onSearchSubmitted and as a prop to SearchForm
// passes onInfiniteScroll to InfiniteScroll
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
