import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withTheme} from '../../theme';

import {closeContextMenu} from '../../../store/actions/close-context-menu';

import getClickCoords from '../../../utilities/get-click-coords';
import escKeyListener from '../../../utilities/esc-key-listener';

import EditButton from '../../buttons-icons/edit';
import RenameButton from '../../buttons-icons/rename';
import DeleteButton from '../../buttons-icons/delete';
import ContextMenuItem from './context-menu-item';

import { classNameContextMenu } from './class-names';

import './sources-context-menu.css';

class SourcesContextMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: null,
      left: null,
    }

    this.contextMenu = React.createRef();
    this.windowHeight = document.documentElement.clientHeight;

    this.getCoordsWhenResize = this.getCoordsWhenResize.bind(this);
    this.getCoords = this.getCoords.bind(this);
    this.handleEscKeyListener = this.handleEscKeyListener.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleEscKeyListener(e) {
    escKeyListener(e, this.props.closeContextMenu);
  }

  // Handle the mouse click on browser window.
  handleOutsideClick(e) {
    const { closeContextMenu } = this.props;
    if (this.contextMenu.current) {
      if (!this.contextMenu.current.contains(e.target)
        && e.target.dataset.click !== 'context-menu') {
        closeContextMenu();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  getCoords(prevProps) {
    const clickItem = document.getElementById(this.props.clickItemId);
    const clickItemHeight = clickItem.getBoundingClientRect().height;
    const clickItemWidth = clickItem.getBoundingClientRect().width;
    const clickItemCoords = getClickCoords(clickItem);

    const contextMenuHeight = this.contextMenu.current
                              .getBoundingClientRect().height;

    if (this.props.clickItemId !== prevProps.clickItemId) {

      this.setState({left: clickItemCoords.bottomX + clickItemWidth / 2.4});

      if (this.windowHeight - clickItemCoords.bottomY < contextMenuHeight) {
        const top = clickItemCoords.bottomY -
                    contextMenuHeight -
                    clickItemHeight + 7;

        this.setState({ top: top });

      } else {
        this.setState({ top: clickItemCoords.bottomY - 7 })
      }
    }
  }

  getCoordsWhenResize() {
    this.getCoords(this.props.clickItemId);
  }

  componentDidMount() {
    const contextMenuHeight = this.contextMenu.current
                              .getBoundingClientRect().height;
    
    this.setState({contextMenuHeight: contextMenuHeight});

    this.getCoords(this.props.clickItemId);
    
    document.addEventListener('click', this.handleOutsideClick, false);
    window.addEventListener('resize', this.getCoordsWhenResize, false);
    window.addEventListener('keyup', this.handleEscKeyListener, false);
  }

  componentDidUpdate(prevProps) {
    this.getCoords(prevProps);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getCoordsWhenResize, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
    window.removeEventListener('keyup', this.handleEscKeyListener, false);
  }

  render() {
    const style = {
      position: 'absolute',
      top: this.state.top + 'px',
      left: this.state.left + 'px',
    }
    const { clickItemId, theme } = this.props;

    return (
      <div 
        className={classNameContextMenu(theme)} 
        style={style}
        id='context-menu'
        ref={this.contextMenu}>
        <ContextMenuItem
          clickItemId={clickItemId}
          buttonIcon={<RenameButton />}
          menuItemText='Rename' />

        <ContextMenuItem 
          clickItemId={clickItemId}
          buttonIcon={<EditButton />}
          menuItemText='Edit'/>
        
        <ContextMenuItem 
          clickItemId={clickItemId}
          buttonIcon={<DeleteButton />}
          menuItemText='Delete'/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { toggleContextMenuVisible: { clickItemId } } = state;
  return {
    clickItemId,
  }
}

const mapDispatchToProps = {
  closeContextMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(SourcesContextMenu));
