import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    console.log(this.container);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollListener);
  }

  scrollListener() {
    const { isLoading, onTrigger } = this.props;
    // get height of viewport
    const { clientHeight } = document.documentElement;
    // get the bottom position of the container
    const { bottom } = this.container.getBoundingClientRect();
    // stop reloading multiple times
    if (!isLoading && bottom <= clientHeight) {
      // inform the parent scrolling has triggered
      onTrigger();
    }
  }

  render() {
    const { children, isLoading } = this.props;
    return (
      <div ref={e => (this.container = e)}>
        {children}
        {isLoading ? <div>Loading...</div> : null}
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onTrigger: PropTypes.func.isRequired
};
export default InfiniteScroll;
