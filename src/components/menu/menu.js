import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTheme } from '../theme';

import { toggleMenuVisible } from '../../store/actions/toggle-menu-visible';
import { selectRssSource }  from '../../store/actions/select-rss-source';

import escKeyListener from '../../utilities/esc-key-listener';

import Close from '../buttons-icons/close';
import MenuSourcesList from './menu-sources-list';

import {
  classNameMenu,
} from './class-names';

import '../ui/modal/modal.css';
import './menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.menu = null;
    this.setMenu = node => this.menu = node;

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleEscKeyListener = this.handleEscKeyListener.bind(this);
  }

  // Handle the Esc key press event
  handleEscKeyListener(e) {
    const { toggleMenuVisible } = this.props;
    escKeyListener(e, toggleMenuVisible);
  }

  // Handle the mouse click on browser window.
  handleOutsideClick(e) {
    const { toggleMenuVisible } = this.props;

    function getParentNode(clickItem, nodeId) {
      let target = clickItem;

      if (!target.id) {
        target.id = nodeId;
        return true;
      }

      if (target.id === 'modal-wrap') return false;

      return false;
    }

    if (this.menu) {
      if (!this.menu.contains(e.target) &&
        !getParentNode(e.target, 'menu')) {
        toggleMenuVisible();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }   
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleEscKeyListener, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEscKeyListener, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  render() {
    const { 
      toggleMenuVisible,
      selectedRssSource, 
      selectRssSource, 
      rssSources, 
      theme,
    } = this.props;

    return (
      <div
        className={`modal-settings modal-settings_size_sm ${classNameMenu(theme)}`}
        id='menu'
        ref={this.setMenu}>
          <div className='menu-close-wrap'>
            <Close action={() => toggleMenuVisible()} />
          </div>
          <div className='menu-items-wrap'>
            <h3>Select feeds of source</h3>
            <MenuSourcesList
              rssSources={rssSources}
              selectRssSource={selectRssSource}
              selectedRssSource={selectedRssSource} />
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { 
    getRssSources: { rssSources },
    selectRssSource: { selectedRssSource },
  } = state;
  return {
    rssSources,
    selectedRssSource,
  }
}

const mapDispatchToProps = {
  toggleMenuVisible,
  selectRssSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Menu));

