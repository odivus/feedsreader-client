import React from 'react';
import { connect } from 'react-redux';
import { toggleSettingsVisible } from '../../../store/actions/toggle-settings-visible';
import { closeContextMenu } from '../../../store/actions/close-context-menu';
import { closeEditSource } from '../../../store/actions/toggle-edit-source-visible';

import SignOut from '../../sign-in-up-out/sign-out';
import Close from '../../buttons-icons/close';

import './header-modal.css';

const HeaderModal = (props) => {
  const {
    toggleSettingsVisible,
    closeContextMenu,
    closeEditSource,
  } = props;

  return (
    <div className='header-modal-settings'>
      <SignOut />
      <Close
        action={() => {
          toggleSettingsVisible();
          closeContextMenu();
          closeEditSource();
        }} />
    </div>
  );
}

const mapDispatchToProps = {
  toggleSettingsVisible,
  closeContextMenu,
  closeEditSource,
}

export default connect(null, mapDispatchToProps)(HeaderModal);