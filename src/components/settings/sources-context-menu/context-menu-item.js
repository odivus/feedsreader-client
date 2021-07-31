import React from 'react';
import {connect} from 'react-redux';
import {withTheme} from '../../theme';
import {closeContextMenu} from '../../../store/actions/close-context-menu';
import {openEditSource} from '../../../store/actions/toggle-edit-source-visible';

import {classNameContextMenuItem} from './class-names';

function ContextMenuItem(props) {
  const {
    closeContextMenu,
    openEditSource,
    menuItemText,
    clickItemId,
    buttonIcon,
    theme,
  } = props;

  const handleClick = () => {
    openEditSource(clickItemId, menuItemText.toLowerCase());
    closeContextMenu();
  }

  return (
    <div 
      className={classNameContextMenuItem(theme)}
      onClick={handleClick}>
      {buttonIcon}
      <div>{menuItemText}</div>
    </div>
  );
}

const mapDispatchToProps = {
  closeContextMenu,
  openEditSource,
}

export default connect(null, mapDispatchToProps)(withTheme(ContextMenuItem));

