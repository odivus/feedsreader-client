import React, {Component} from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import {withFirebase} from '../../firebase';

import {closeEditSource} from '../../../store/actions/toggle-edit-source-visible';

import {editRssSource} from '../../../store/actions/edit-rss-source';

import escKeyListener from '../../../utilities/esc-key-listener';
import {rssInputCheck} from '../../../utilities/rss-input-check';
import rssInputChange from '../../../utilities/rss-input-change';

import FormEditSource from './form-edit-source';

import './edit-source.css';

class EditSource extends Component {
  constructor(props) {
    super(props);
    this.that = this;
    this.state = {
      rssSource: '',
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEscKeyListener = this.handleEscKeyListener.bind(this);
  }

  handleEscKeyListener(e) {
    escKeyListener(e, () => this.props.closeEditSource(null));
  }

  handleChange(event) {
    rssInputChange(this.that, event, rssInputCheck);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id, firebase, editRssSource, closeEditSource } = this.props;
    const { value } = this.state;

    closeEditSource(null);
    editRssSource(id, value, firebase);
  }

  componentDidMount() {
    this.setState({
      value: this.props.rssUrl,
    });

    window.addEventListener('keyup', this.handleEscKeyListener, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEscKeyListener, false);
  }

  render() {
    const { rssSources } = this.props.getRssSources;

    const findDuplicate = (rssSources) => {
      return Object.keys(rssSources).some(item => {
        return rssSources[item].rssUrl === this.state.value ? true : false; 
      });
    }

    const isInvalid = this.state.rssSource === '' || findDuplicate(rssSources);

    return (
      <FormEditSource 
        onSubmit={this.handleSubmit}
        value={this.state.value}
        onChange={this.handleChange}
        isInvalid={isInvalid}
        onClick={() => this.props.closeEditSource(null)}/>
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
  editRssSource,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps), 
  withFirebase)(EditSource);
