import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from '../theme';

import {
  classNameLogoLogoHeaderWrapper,
  classNamesLogoHeaderWrap,
} from './class-names';

const LogoPages = (props) => {
  const { theme, history } = props;
  const { pathname } = props.location;
  let onClick, 
      isActive;

  if (pathname === '/') {
    onClick = null;
    isActive = false;
  } else {
    onClick = () => history.push('/');
    isActive = true;
  }

  return (
    <div
      className={classNameLogoLogoHeaderWrapper(isActive)}
      onClick={onClick}>
      <div className={classNamesLogoHeaderWrap(theme, isActive)}>
        <div className='logo-header'>
          <div className='icons logo'></div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(withTheme(LogoPages));
