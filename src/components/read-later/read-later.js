import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTheme } from '../theme';
import { Redirect } from 'react-router-dom';

import HeaderReadLater from '../header-read-later';
import FeedsReadLater from '../feeds-read-later';
import Modal from '../ui/modal';
import Settings from '../settings';

import { classNameWrapper } from '../home/class-names';

import '../home/home.css';

export class ReadLater extends Component {
  render() {
    const { settingsVisible, theme } = this.props;

    return !localStorage.token
      ? (<Redirect to="/signin" />)
      : (<div className={classNameWrapper(theme)}>
          <HeaderReadLater />
          <FeedsReadLater />
          {settingsVisible &&
            <Modal>
              <Settings />
            </Modal>
          }
        </div>);
  }
}

const mapStateToProps = (state) => {
  const { settingsVisible } = state.toggleSettingsVisible;
  return {
    settingsVisible,
  }
}

export default connect(mapStateToProps, null)(withTheme(ReadLater));
