import React, {Component} from 'react';

import { connect } from 'react-redux';
import { withFirebase } from '../firebase';
import { compose } from 'recompose';

import {
  toggleFeedsToReadLater,
} from '../../store/actions/toggle-feeds-to-read-later';

import { classNamesReadLater } from './class-names';
import '../buttons-icons/buttons-icons.css';

class ReadLater extends Component {
  constructor(props) {
    super(props);
    this.toggleReadLater = this.toggleReadLater.bind(this);
    
    this.state = {
      readLater: false,
    }
  } 

  toggleReadLater() {
    const { feed, toggleFeedsToReadLater, firebase } = this.props;
    
    this.setState({
      readLater: !this.state.readLater,
    });

    toggleFeedsToReadLater(feed, feed.link, firebase);
  }

  setStateReadLater(feed, feedsReadLater) {
    feedsReadLater.forEach(item => {
      if (item === feed.link) {
        this.setState({
          readLater: true,
        });
      }
    });
  }

  componentDidMount() {
    const { 
      feed, 
      feedsReadLater, 
    } = this.props;

    if (feedsReadLater) {
      this.setStateReadLater(feed, feedsReadLater);
    }
  }

  componentDidUpdate(prevProps) {
    const { feed, feedsReadLater } = this.props;

    if (feedsReadLater) {
      if (prevProps.feedsReadLater !== feedsReadLater) {
        this.setStateReadLater(feed, feedsReadLater);
      }
    }
  }
   
  render() {
    const { readLater } = this.state;
    const { theme, viewMode } = this.props;
    
    return (
      <div 
        className={classNamesReadLater(theme, readLater, viewMode)}
        onClick={this.toggleReadLater}>
          <div className='icons-wrapper'>
            <div className='icons-wrap'>
              <div className='icons favorites'></div>
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { 
    toggleFeedsToReadLater: { readLaterFeedsLocal }
  } = state;

  return {
    readLaterFeedsLocal
  }
}

const mapDispatchToProps = {
  toggleFeedsToReadLater,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase)(ReadLater);
