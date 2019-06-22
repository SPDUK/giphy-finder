import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Random from './random';

// routing with redux
// we perform routing by pushing actions to the store
export default withRouter(connect(() => ({}))(Random));
