import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from '../theme';

import { 
  classNames, 
  classNameIcoWrapper, 
} from './class-names';

import './buttons-icons.css';

const Favorites = ({ theme, history }) => {
  return (
      <div 
        className={classNameIcoWrapper()} 
        onClick={() => history.push('readlater')}>
          <div className={classNames(theme)}>
            <div className='icons-wrap'>
              <div className='icons favorites'></div>
            </div>
          </div>
      </div>
  );
}

export default withRouter(withTheme(Favorites));