import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withTheme } from '../theme';
import { toggleSettingsVisible } from '../../store/actions/toggle-settings-visible';
import { closeContextMenu } from '../../store/actions/close-context-menu';
import {closeEditSource} from '../../store/actions/toggle-edit-source-visible';

import escKeyListener from '../../utilities/esc-key-listener';

import HeaderModal from './header-modal';
import AddSource from './add-source';
import ViewMode from './view-mode';
import Theme from './theme';
import Sources from './sources';
import SourcesContextMenu from './sources-context-menu';

import './settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.settings = null;
    this.setSettings = node => this.settings = node;

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleEscKeyListener = this.handleEscKeyListener.bind(this);
  }

  scrollWidth = 0;
  paddingNoScroll = 0;

  state = {
    scrollView: false
  }

  // Handle the Esc key press event
  handleEscKeyListener(e) {
    const {
      toggleSettingsVisible,
      contextMenuVisible,
      editSourceVisible,
    } = this.props;
    
    if (!contextMenuVisible && !editSourceVisible) {
      escKeyListener(e, toggleSettingsVisible);
    }
  }

  // Handle the mouse click on browser window.
  handleOutsideClick(e) {
    const { 
      toggleSettingsVisible, 
      closeContextMenu, 
      closeEditSource
    } = this.props;

    function getParentNode(clickItem, nodeId) {
      let target = clickItem,
          result = false;

      if (!target.id) {
        target.id = 'context-menu';
        return true;
      }

      if (target.id === 'modal-wrap') return result;

      while (target.id !== nodeId) {
        target = target.parentNode;
        result = target.id === nodeId ? true : false;
      }
      return result;
    }

    if (this.settings) {
      if (!this.settings.contains(e.target) && 
          !getParentNode(e.target, 'context-menu')) {
            toggleSettingsVisible();
            closeContextMenu();
            closeEditSource();

        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleEscKeyListener, false);
    document.addEventListener('click', this.handleOutsideClick, false);
    window.addEventListener('resize', this.scrollWidthWhenResize, false);

    this.scrollWidth = this.settings.clientWidth;
  }
  
  componentDidUpdate(prevProps) {
    const { contextMenuVisible } = this.props;

    if (contextMenuVisible !== prevProps.contextMenuVisible) {
      this.setState({
        scrollView: contextMenuVisible ? true : false
      });
      
      if (this.paddingNoScroll === 0) {
        this.paddingNoScroll = this.settings.clientWidth - this.scrollWidth;
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEscKeyListener, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  render() {
    const { contextMenuVisible, theme } = this.props;

    const ClassNameTheme = theme === 'Dark' 
                                 ? 'modal-settings_theme_dark' 
                                 : 'modal-settings_theme_light';
    
    const noScroll = `modal-settings modal-settings_size_sm ${ClassNameTheme} modal-settings_no-scroll`;

    const scroll = `modal-settings modal-settings_size_sm ${ClassNameTheme}`;

    const className = contextMenuVisible ? noScroll : scroll;

    const paddingRight = this.state.scrollView
      ? 20 + this.paddingNoScroll + 'px'
      : 20 + 'px';

    return (
      <div 
        className={className}
        id='settings'
        style={{paddingRight: paddingRight}}
        ref={this.setSettings}>
        <HeaderModal />
        <AddSource />
        <ViewMode />
        <Theme />
        <Sources />
        {contextMenuVisible && <SourcesContextMenu />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { 
    toggleContextMenuVisible: { contextMenuVisible },
    toggleEditSourceVisible: { editSourceVisible },
  } = state;

  return {
    contextMenuVisible,
    editSourceVisible,
  }
}

const mapDispatchToProps = {
  toggleSettingsVisible,
  closeContextMenu,
  closeEditSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Settings));