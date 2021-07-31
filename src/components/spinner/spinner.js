import React from 'react';
import { withTheme } from '../theme';

import { ClassNameSpinner } from './class-names';
import './spinner.css';

function Spinner({ theme }) {
  return (
    <div className='spinner-wrap'>
      <div className={ClassNameSpinner(theme)}>
        Loading...
      </div>
    </div>
  );
}

export default withTheme(Spinner);
