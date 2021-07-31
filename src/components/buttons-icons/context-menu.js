import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withTheme} from '../theme';

import {
  toggleContextMenuVisible,
  closeContextMenu,
  openContextMenu,
} from '../../store/actions/toggle-context-menu-visible';

import {
  closeEditSource
} from '../../store/actions/toggle-edit-source-visible';

import {classNameIconsWrapHover} from './class-names';

import './buttons-icons.css';

class ContextMenuButton extends Component {

  constructor(props) {
    super(props);
    this.clickItem = React.createRef();
  }

  contextMenuDoTrigger = () => {
    const { 
      toggleContextMenuVisible,
      closeContextMenu,
      openContextMenu,
      closeEditSource,
      lastClickItemId,
    } = this.props;

    const clickItemId = this.clickItem.current.id;

    if (clickItemId !== lastClickItemId) {
      closeEditSource(null);
      closeContextMenu(clickItemId);
      openContextMenu(clickItemId);
    } else {
      toggleContextMenuVisible(clickItemId);
    }
  }

  render() {
    const { id, theme } = this.props;
    return (
      <div className={classNameIconsWrapHover(theme)}
        onClick={(event) => this.contextMenuDoTrigger(event, this.props)}
        ref={this.clickItem}
        id={id}
        data-click='context-menu'>
          <div 
            className='icons icons-wrap contextMenu' 
            data-click='context-menu'></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const lastClickItemId = state.toggleContextMenuVisible.clickItemId;
  return {
    lastClickItemId,
  }
}

const mapDispatchToProps = {
  toggleContextMenuVisible,
  closeEditSource,
  closeContextMenu,
  openContextMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ContextMenuButton));