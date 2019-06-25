import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '@atlaskit/spinner';
import { Centered } from '../styles/centered';
import { StyledScrollTop, StyledInfiniteScroll } from './infinite-scroll-styles';

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    // container ref
    // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    this.container = null;
    this.scrollListener = this.scrollListener.bind(this);
    this.state = {
      displayScrollTop: false
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollListener);
  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

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
    // add scroll top button if scrolled up, remove it if we are scrolled to top
    const { pageYOffset } = window;
    const { displayScrollTop } = this.state;
    // remove the scrolling state of we are at the top so it can be applied
    if (!displayScrollTop && pageYOffset > 100) return this.setState({ displayScrollTop: true });
    if (displayScrollTop && pageYOffset <= 100) return this.setState({ displayScrollTop: false });
  }

  render() {
    const { children, isLoading } = this.props;
    const { displayScrollTop } = this.state;

    return (
      <StyledInfiniteScroll>
        <div ref={e => (this.container = e)}>
          {children}
          {isLoading && (
            <Centered>
              <Spinner invertColor size="large" />
            </Centered>
          )}
        </div>
        <StyledScrollTop
          className={displayScrollTop ? 'fadeIn' : 'fadeOut'}
          onClick={this.scrollTop}
        >
          <span aria-label="scroll top" role="img">
            ☝️
          </span>
        </StyledScrollTop>
      </StyledInfiniteScroll>
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
