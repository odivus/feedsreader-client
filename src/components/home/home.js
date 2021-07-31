import React, { Component } from 'react';
import {connect} from 'react-redux';
import { compose } from 'recompose';
import {Redirect} from 'react-router-dom';

import { withFirebase } from '../firebase';
import {ThemeContext} from '../theme';

import {getTheme} from '../../store/actions/get-theme';

import Header from '../header';
import Feeds from '../feeds';
import Modal from '../ui/modal';
import Settings from '../settings';
import Menu from '../menu';

import {classNameWrapper} from './class-names';

import './home.css';

class Home extends Component {
  componentDidMount() {
    if (!this.props.localTheme) {
      this.props.getTheme(this.props.firebase);
    }
  }

  render() {
    const { theme, localTheme, settingsVisible, menuVisible } = this.props;
    const currentTheme = localTheme ? localTheme : theme;
    
    const settings = settingsVisible &&
      <Modal>
        <Settings />
      </Modal>
    
    const menu = menuVisible &&
      <Modal>
        <Menu />
      </Modal>

    return !localStorage.token
      ? (<Redirect to="/signin" />)
      : (<div className={classNameWrapper(currentTheme)}>
        <ThemeContext.Provider value={currentTheme}>
          <Header />
          <Feeds />
          {settings}
          {menu}
        </ThemeContext.Provider>
        </div>);
  }
}

const mapStateToProps = (state) => {
  const {
    toggleSettingsVisible: { settingsVisible },
    toggleMenuVisible: { menuVisible },
    setTheme: { localTheme },
    getTheme: { theme },
  } = state;

  return {
    settingsVisible,
    menuVisible,
    localTheme,
    theme,
  }
}

const mapDispatchToProps = {
  getTheme,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase)(Home);