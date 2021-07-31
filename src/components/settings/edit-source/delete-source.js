import React, {Component} from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import {withFirebase} from '../../firebase';
import {closeEditSource} from '../../../store/actions/toggle-edit-source-visible';
import {deleteRssSource} from '../../../store/actions/delete-rss-source';

import escKeyListener from '../../../utilities/esc-key-listener';

import Button from '../../ui/button';

import './edit-source.css';

class DeleteSource extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEscKeyListener = this.handleEscKeyListener.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, firebase, deleteRssSource, closeEditSource } = this.props;

    closeEditSource(null);
    deleteRssSource(id, firebase);
  }

  handleEscKeyListener(e) {
    escKeyListener(e, () => this.props.closeEditSource(null));
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleEscKeyListener, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEscKeyListener, false);
  }

  render() {
    const { sourceName } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className='edit-source'>
        <h4 className='edit-source__h4'>
          Delete {sourceName}?
        </h4>
        <p className='edit-source__p'>
          The source will be permanently deleted.
        </p>
        <Button
          className='button button_theme_dark button_dialog button_dialog_delete'
          type='submit'>
          Delete
        </Button>
        <Button
          className='button button_theme_dark button_dialog button_dialog_cancel'
          type='button'
          onClick={() => this.props.closeEditSource(null)}>
          Cancel
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  closeEditSource,
  deleteRssSource,
}

export default compose(
  connect(null, mapDispatchToProps),
  withFirebase)(DeleteSource);
