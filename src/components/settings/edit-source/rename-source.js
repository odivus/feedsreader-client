import React, { Component } from 'react';
import {compose} from 'recompose';
import { connect } from 'react-redux';

import {withFirebase} from '../../firebase';

import {closeEditSource} from '../../../store/actions/toggle-edit-source-visible';

import {renameRssSource} from '../../../store/actions/rename-rss-source';

import escKeyListener from '../../../utilities/esc-key-listener';
import FormEditSource from './form-edit-source';

import './edit-source.css';

class EditSource extends Component {
  constructor(props) {
    super(props);
    this.that = this;
    this.state = {
      value: this.props.sourceName,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEscKeyListener = this.handleEscKeyListener.bind(this);
  }

  handleEscKeyListener(e) {
    escKeyListener(e, () => this.props.closeEditSource(null));
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id, firebase, renameRssSource, closeEditSource } = this.props;
    const { value } = this.state;

    closeEditSource(null);
    renameRssSource(id, value, firebase);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleEscKeyListener, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEscKeyListener, false);
  }

  render() {
    const isInvalid = this.state.value === '' 
    || this.state.value === this.props.sourceName;

    return (
      <FormEditSource
        onSubmit={this.handleSubmit}
        value={this.state.value}
        onChange={this.handleChange}
        isInvalid={isInvalid}
        onClick={() => this.props.closeEditSource(null)} />
    );
  }
}

function mapStateToProps(store) {
  return {
    getRssSources: store.getRssSources,
  }
}

const mapDispatchToProps = {
  closeEditSource,
  renameRssSource,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase)(EditSource);







