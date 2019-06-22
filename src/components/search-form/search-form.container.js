import { connect } from 'react-redux';
import SearchForm from './search-form';
import { searchPerformed } from '../../actions/search';

// runs the saga when dispatching
function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmitted: searchTerm => dispatch(searchPerformed(searchTerm))
  };
}

// no props to include in the return value so return an empty object
// passes onSearchSubmitted as a prop to SearchForm
export default connect(
  () => ({}),
  mapDispatchToProps
)(SearchForm);
