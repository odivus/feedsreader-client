import React from 'react';
import { connect } from 'react-redux';
import { withTheme } from '../theme';

import { toggleMenuVisible } from '../../store/actions/toggle-menu-visible';

import {
  classNames,
  classNameIcoWrapper
} from './class-names';

import './buttons-icons.css';

const Menu = ({ toggleMenuVisible, theme }) => {
  return (
    <div 
      className={classNameIcoWrapper()}
      onClick={toggleMenuVisible}>
        <div className={classNames(theme)}>
          <div className='icons-wrap'>
            <div className='icons menu'></div>
          </div>
        </div>
    </div>
  );
}

const mapDispatchToProps = {
  toggleMenuVisible
}

export default connect(null, mapDispatchToProps)(withTheme(Menu));