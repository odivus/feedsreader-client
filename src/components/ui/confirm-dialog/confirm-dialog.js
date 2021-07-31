import React, {Component} from 'react';
import { withTheme } from '../../theme';

import escKeyListener from '../../../utilities/esc-key-listener';
import Button from '../button';

import {
  classNameConfirmDialog,
} from '../class-names';

import './confirm-dialog.css';

class ConfirmDialog extends Component {
  constructor(props) {
    super(props);
    this.handleEscKeyListener = this.handleEscKeyListener.bind(this);
  }

  handleEscKeyListener(e) {
    escKeyListener(e, () => this.props.hideConfirmDialog());
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleEscKeyListener, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEscKeyListener, false);
  }

  render() {
    const { 
      hideConfirmDialog,
      dialogHeader, 
      dialogText, 
      action, 
      theme,
    } = this.props;

    return (
      <div className='confirm-dialog-wrap'>
        <div className={`confirm-dialog ${classNameConfirmDialog(theme)}`}>
          <div className='confirm-dialog__h3'>
            {dialogHeader}
          </div>
          <div className='confirm-dialog__p'>
            {dialogText}
          </div>
          <div className='confirm-dialog__buttons-wrap'>
            <Button
              className='button button_theme_dark button_dialog button_dialog_delete'
              type='button'
              onClick={action}>
                Delete
            </Button>
            <Button
              className='button button_theme_dark button_dialog button_dialog_cancel'
              type='button'
              onClick={hideConfirmDialog}>
                Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withTheme(ConfirmDialog);
