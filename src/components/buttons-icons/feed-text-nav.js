import React from 'react';
import { withTheme } from '../theme';

import {
  classNameIconsWrapper,
  classNameIcoWrapper,
} from './class-names';

function FeedTextNav(props) {
  const { active, iconClassName, action, theme } = props;

  return (
    <div
      className={classNameIcoWrapper(active)}
      onClick={action}>
      <div className={classNameIconsWrapper(theme, active)}>
        <div className='icons-wrap'>
          <div className={iconClassName}></div>
        </div>
      </div>
    </div>
  );
}

export default withTheme(FeedTextNav);
