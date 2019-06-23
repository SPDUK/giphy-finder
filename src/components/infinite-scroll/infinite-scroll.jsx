import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '@atlaskit/spinner';
import { Centered } from '../styles/centered';

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    // container ref
    // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    this.container = null;
    this.scrollListener = this.scrollListener.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollListener);
  }

  scrollListener() {
    const { isLoading, onTrigger, isActive } = this.props;
    // get height of viewport
    const { clientHeight } = document.documentElement;
    // get the bottom position of the container
    const { bottom } = this.container.getBoundingClientRect();
    // only run onTrigger if we are not loading, are scrolled and have something to search for
    if (isActive && !isLoading && bottom <= clientHeight) {
      // inform the parent scrolling has triggered
      onTrigger();
    }
  }

  render() {
    const { children, isLoading } = this.props;
    return (
      <div ref={e => (this.container = e)}>
        {children}
        {isLoading && (
          <Centered>
            <Spinner invertColor size="large" />
          </Centered>
        )}
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onTrigger: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};
export default InfiniteScroll;
