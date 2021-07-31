import React from 'react';
import ContextMenuButton from '../../buttons-icons/context-menu';
import { withTheme } from '../../theme';

import { 
  classNameSourceItem, 
  classNameSourceItemP, 
} from './class-names';

import './sources.css';

function SourceItem({ id, sourceName, title, theme }) {
  return (
    <div className='source-item-wrap'>
      <ContextMenuButton id={id} />
      <div className={classNameSourceItem(theme)}>
        <h4 className='source-item__h4'>{sourceName}</h4>
        <p className={classNameSourceItemP(theme)}>{title}</p>
      </div>
    </div>
  );
}

export default withTheme(SourceItem);
