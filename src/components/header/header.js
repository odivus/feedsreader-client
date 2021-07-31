import React, {Component} from 'react';
import { withTheme } from '../theme';

import LogoPages from '../buttons-icons/logo-pages';
import Menu from '../buttons-icons/menu';
import Reload from '../buttons-icons/reload';
import Favorites from '../buttons-icons/favorites';
import ButtonSettings from '../buttons-icons/settings';

import headerDropShaddow from '../../utilities/header-drop-shaddow';

import { classNamesHeader } from './class-names';

import './header.css';

class Header extends Component {
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
          <Reload />
          <Favorites />
          <Menu />
          <ButtonSettings />
        </div>
      </div>
    );
  }
}

export default withTheme(Header);