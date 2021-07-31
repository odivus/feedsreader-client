import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from '../theme';

import {
  classNames,
  classNameIcoWrapper,
} from './class-names';

import './buttons-icons.css';

const Home = ({ theme, history }) => {
  return (
      <div 
        className={classNameIcoWrapper()}
        onClick={() => history.push('/')}>
          <div className={classNames(theme)}>
            <div className='icons-wrap'>
              <div className='icons home'></div>
            </div>
          </div>
      </div>
  );
}

export default withRouter(withTheme(Home));