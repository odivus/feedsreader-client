import React, {Component} from 'react';
import { withTheme } from '../theme';

import LogoPages from '../buttons-icons/logo-pages';
import ButtonSettings from '../buttons-icons/settings';
import RemoveAllReadLaterFeeds from './remove-all-read-later-feeds';
import Home from '../buttons-icons/home';

import headerDropShaddow from '../../utilities/header-drop-shaddow';
import { classNamesHeader } from '../header/class-names';

import '../header/header.css';

class HeaderReadLater extends Component {
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
    const { theme } = this.props;

    return (
      <div className={`${classNamesHeader(theme)} ${shaddow}`}>
        <LogoPages />
        <div className='header-controls-wrap'>
          <Home />
          <RemoveAllReadLaterFeeds />
          <ButtonSettings />
        </div>
      </div>
    );
  }
}

export default withTheme(HeaderReadLater);