import React from 'react';
import {connect} from 'react-redux';
import { withTheme } from '../theme';
import {toggleSettingsVisible} from '../../store/actions/toggle-settings-visible';

import {
  classNames,
  classNameIcoWrapper
} from './class-names';

import './buttons-icons.css';

const ButtonSettings = ({ toggleSettingsVisible, theme }) => {
  return (
    <div 
      className={classNameIcoWrapper()}
      onClick={toggleSettingsVisible}>
        <div className={classNames(theme)}>
          <div className='icons-wrap'>
            <div className='icons settings'></div>
          </div>
        </div>
    </div>
  );
}

const mapDispatchToProps = {
  toggleSettingsVisible
}

export default connect(null, mapDispatchToProps)(withTheme(ButtonSettings));