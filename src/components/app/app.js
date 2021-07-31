import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {BrowserRouter as Router} from 'react-router-dom';

import { withFirebase } from '../firebase';
import { ThemeContext } from '../theme';
import { getTheme } from '../../store/actions/get-theme';

import Routes from '../routes';

class App extends Component {
  componentDidMount() {
    if (!this.props.localTheme) {
      this.props.getTheme(this.props.firebase);
    }
  }

  componentDidUpdate(prevProps) {
    const { theme, localTheme } = this.props;
    if (prevProps.theme !== theme || prevProps.localTheme !== localTheme) {
      const currentTheme = localTheme ? localTheme : theme;
      const body = document.querySelector('body');
      body.className = 'theme_' + currentTheme.toLowerCase();
    }
  }

  render() {
    const { theme, localTheme } = this.props;
    const currentTheme = localTheme ? localTheme : theme;

    return (
      <ThemeContext.Provider value={currentTheme}>
        <Router>
          <Routes />
        </Router>
      </ThemeContext.Provider>
    );
  }
}

function mapStateToProps(state) {
  const {
    setTheme: { localTheme },
    getTheme: { theme },
  } = state;

  return {
    localTheme,
    theme,
  }
}

const mapDispatchToProps = {
  getTheme,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase)(App);