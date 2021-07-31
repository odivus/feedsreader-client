import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withTheme } from '../theme';

import LogoPages from '../buttons-icons/logo-pages';
import Home from '../buttons-icons/home';
import Favorites from '../buttons-icons/favorites';

import FeedTextNav from '../buttons-icons/feed-text-nav';
import { withFeedTextNav } from '../hoc/with-feed-text-next-prev-nav';

import headerDropShaddow from '../../utilities/header-drop-shaddow';
import { classNamesHeader } from '../header/class-names';

import '../header/header.css';

class HeaderFeedText extends Component {
  constructor(props) {
    super(props);
    this.that = this;
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      shaddow: ''
    }
  }

  handleScroll() {
    headerDropShaddow(this.that);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  render() {
    const { shaddow } = this.state;
    const { isFeedsTextFromReadLater, theme } = this.props;
    const Prev = withFeedTextNav(FeedTextNav, 'prev');
    const Next = withFeedTextNav(FeedTextNav, 'next');
  
    return (
      <div className={`${classNamesHeader(theme)} ${shaddow}`}>
        <div className='logo-home'>
          <LogoPages />
        </div>
        <div className='header-controls-wrap'>
          {isFeedsTextFromReadLater ? <Favorites /> : <Home />}
          <Prev />
          <Next />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    checkIsReadLaterText: { isFeedsTextFromReadLater },
  } = state;

  return {
    isFeedsTextFromReadLater,
  }
}

export default connect(mapStateToProps, null)(withTheme(HeaderFeedText));
