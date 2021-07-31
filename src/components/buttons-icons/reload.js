import React from 'react';
import { connect } from 'react-redux';
import { withTheme } from '../theme';
import { setReload } from '../../store/actions/set-reload';

import {
  classNames,
  classNameIcoWrapper
} from './class-names';

import './buttons-icons.css';

const Reload = ({ setReload, theme }) => {
  return (
    <div 
      className={classNameIcoWrapper()}
      onClick={() => setReload(true)}>
        <div className={classNames(theme)}>
          <div className='icons-wrap'>
            <div className='icons reload'></div>
          </div>
        </div>
    </div>
  );
}

const mapDispatchToProps = {
  setReload,
}

export default connect(null, mapDispatchToProps)(withTheme(Reload));