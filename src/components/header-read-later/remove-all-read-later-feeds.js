import React, {Component} from 'react';

import { connect } from 'react-redux';
import { withTheme } from '../theme';
import { withFirebase } from '../firebase';
import { compose } from 'recompose';

import { getFeedsReadLaterData } from '../../store/actions/get-feeds-readlater-data';
import { showConfirmDialog } from '../../store/actions/toggle-confirm-dialog';

import {
  classNameIconsWrapper,
  classNameIcoWrapper,
} from '../buttons-icons/class-names';

class RemoveAllReadLaterFeeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
  }

  componentDidMount() {
    const {
      getFeedsReadLaterData,
      feedsReadLaterData,
      firebase,
    } = this.props;

    getFeedsReadLaterData(firebase);

    if (feedsReadLaterData && Array.isArray(feedsReadLaterData)) {
      if (feedsReadLaterData.length === 0) {
        this.setState({
          isActive: false,
        });
      }
    }
  }

  componentDidUpdate(prevProps) {
    const {
      feedsReadLaterData,
    } = this.props;

    if (feedsReadLaterData !== prevProps.feedsReadLaterData) {
      if (feedsReadLaterData && Array.isArray(feedsReadLaterData)) {
        if (feedsReadLaterData.length === 0) {
          this.setState({
            isActive: false,
          });
        }
      }

      if (feedsReadLaterData && !Array.isArray(feedsReadLaterData)) {
        this.setState({
          isActive: true,
        });
      }
    }
  }
  
  render() {
    const { showConfirmDialog, theme } = this.props;
    const { isActive } = this.state;
    let onClick;

    if (isActive) {
      onClick = () => showConfirmDialog('removeAllFeeds');
    } else {
      onClick = null;
    }

    return (
      <div 
        className={classNameIcoWrapper(isActive)}
        onClick={onClick}>
        <div className={classNameIconsWrapper(theme, isActive)}>
            <div className='icons-wrap icons-wrap_align_center'>
              <div className='icons delete'></div>
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    getFeedsReadLaterData: { feedsReadLaterData },
  } = state;

  return {
    feedsReadLaterData,
  }
}

const mapDispatchToProps = {
  getFeedsReadLaterData,
  showConfirmDialog,
}

  export default compose(connect(mapStateToProps, mapDispatchToProps),
                        withFirebase, withTheme)(RemoveAllReadLaterFeeds);
