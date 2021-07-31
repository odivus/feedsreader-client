import React, {Component} from 'react';
import {withTheme} from '../../theme';

import Input from '../../ui/input';
import Button from '../../ui/button';

import {
  classNameInput,
  classNameButton,
} from '../../ui/class-names';

class FormEditSource extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    };
    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    this.focusTextInput();
  }

  render() {
    const {
      isInvalid,
      onChange,
      onSubmit,
      onClick,
      value,
      theme,
    } = this.props;

    return (
      <form onSubmit={onSubmit} className='edit-source'>
        <Input
          className={classNameInput(theme)}
          name='rssSource'
          type='text'
          ref={this.setTextInputRef}
          value={value}
          onChange={onChange} />
        <Button
          className={`${classNameButton(theme)} button_dialog`}
          type='submit'
          disabled={isInvalid}>
          Ok
        </Button>
        <Button
          className='button button_theme_dark button_dialog button_dialog_cancel'
          type='button'
          onClick={onClick}>
          Cancel
        </Button>
      </form>
    );
  }
}

export default withTheme(FormEditSource);
