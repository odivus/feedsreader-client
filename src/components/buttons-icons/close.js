import React from 'react';
import { withTheme } from '../theme';
import {
  classNames,
  classNameIcoWrapperBody
} from './class-names';

import './buttons-icons.css';

function Close({ action, theme }) {
  return (
    <div
      className={classNameIcoWrapperBody()}
      onClick={action}>
      <div className={classNames(theme)}>
        <div className='icons-wrap'>
          <div className='icons close'></div>
        </div>
      </div>
    </div>
  );
}

export default withTheme(Close);