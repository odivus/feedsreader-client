import React, {Component} from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withTheme } from '../../theme';

import Input from '../../ui/input';
import Button from '../../ui/button';

import RssParserService from '../../service/rss-parser-service';
import { withFirebase } from '../../firebase';

import {addRssSource} from '../../../store/actions/add-source';

import {rssInputCheck} from '../../../utilities/rss-input-check';

import ErrorMessage from '../../sign-in-up-out/error-message';
import {errorMessage} from './error-message';

import {
  classNameInput,
  classNameButton,
} from '../../ui/class-names';

import './add-source.css';

class AddSource extends Component {
  rssParserService = new RssParserService();

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      rssSource: '',
      value: '',
    }
    this.inputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  focusTextInput = () => {
    this.inputRef.current.focus();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.rssSources !== this.props.rssSources) {
      this.setState({loading: false});
    }

    if (prevProps.addStatus !== this.props.addStatus) {
      this.setState({
        loading: false,
      });
    }
    
    if (prevProps.error !== this.props.error) {
      this.setState({
        loading: false,
        error: this.props.error,
      });
    }
  }

  handleChange(event) {
    const value = event.target.value.toLowerCase().trim();
    
    if (rssInputCheck.test(value)) {
      this.setState({
        rssSource: value,
        value: value,
      });
    } else {
      this.setState({
        rssSource: '',
        value: value,
      });
    }

    if (value === '') this.setState({value: ''});
    if (this.props.error) this.setState({error: null});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.focusTextInput();
    const { addRssSource, firebase } = this.props;

    addRssSource(this.state.value, firebase);

    this.setState({
      value: '',
      rssSource: '',
      loading: true,
      error: null,
    });
  }

  render() {
    const { theme } = this.props; 
    const isInvalid = this.state.rssSource === '';
    const { loading } = this.state;
    const error = this.state.error;

    if (error) error.message = errorMessage;

    return (
      <div className='settings-items-wrap'>
        <h3>Add Source</h3>
        <form onSubmit={this.handleSubmit}>
          <Input
            className={classNameInput(theme, loading)}
            name='rssSource'
            placeholder='https://fakenews.us/rss'
            type='text'
            ref={this.inputRef}
            value={this.state.value} 
            onChange={this.handleChange}/>
          <Button
            className={classNameButton(theme)}
            type='submit'
            disabled={isInvalid}
            onClick={this.focusTextInput}>
            Add
          </Button>
          {error && <ErrorMessage error={error} />}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { 
    addRssSource: { error },
    addRssSource: { rssSources },
    notAddedDuplicate: {addStatus},
  } = state;
  return {
    error,
    rssSources,
    addStatus,
  }
}

const mapDispatchToProps = {
  addRssSource,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase, withTheme)(AddSource);
