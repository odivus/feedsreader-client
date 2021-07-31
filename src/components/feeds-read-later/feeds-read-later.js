import React, { Component } from 'react';
import { withRouter } from "react-router";

import { connect } from 'react-redux';
import { withFirebase } from '../firebase';
import { withTheme } from '../theme';
import { compose } from 'recompose';

import withShowFeedsByViewMode from '../helpers/with-show-feeds-by-view-mode';
import { 
  dialogHeaderFeed, dialogTextFeed, 
  dialogHeaderAllFeeds, dialogTextAllFeeds, 
  DialogRemoveFeedsReadLater
} from '../helpers/with-dialog-remove-feeds-read-later';

import { getViewMode } from '../../store/actions/get-view-mode';
import { getFeedText } from '../../store/actions/get-feed-text';
import { 
  getFeedsReadLaterData 
} from '../../store/actions/get-feeds-readlater-data';
import { 
  removeFeedDataFromReadLater 
} from '../../store/actions/remove-feed-data-from-read-later';
import { 
  removeAllReadLaterFeeds 
} from '../../store/actions/remove-all-read-later-feeds';
import {
  showConfirmDialog,
  hideConfirmDialog,
} from '../../store/actions/toggle-confirm-dialog';
import { 
  checkIsReadLaterText 
} from '../../store/actions/check-is-read-later-text.js';

import Message from '../ui/message';
import Error from '../error';
import Spinner from '../spinner';

class FeedsReadLater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: this.props.localViewMode || this.props.viewMode || 'Cards',
      loading: true,
      error: false,
    }
  }

  componentDidMount() {
    const {
      getFeedsReadLaterData,
      feedsReadLaterData,
      localViewMode,
      getViewMode,
      firebase,
    } = this.props;

    window.scroll(0, 0);
    
    getFeedsReadLaterData(firebase);

    if (feedsReadLaterData) {
      this.setState({ loading: false });
    }

    if (!localViewMode) {
      getViewMode(firebase);
    } else {
      this.setState({ viewMode: localViewMode });
    }
  }

  componentDidUpdate(prevProps) {
    const {
      getFeedsReadLaterData,
      feedsReadLaterData,
      removedFeedKey,
      viewMode,
      localViewMode,
      firebase,
      error,
    } = this.props;

    if (prevProps.feedsReadLaterData !== feedsReadLaterData) {
      this.setState({
        loading: false,
      });
    }

    if (localViewMode !== prevProps.localViewMode) {
      this.setState({ viewMode: localViewMode });
      getFeedsReadLaterData(firebase);
    }

    if (viewMode !== prevProps.viewMode) {
      this.setState({ viewMode: viewMode });
      getFeedsReadLaterData(firebase);
    }

    if (removedFeedKey !== prevProps.removedFeedKey) {
      getFeedsReadLaterData(firebase);
    }

    if (error) {
      if (prevProps.error !== error) this.setState({ error: true });
    }
  }

  render() {
    let feeds;
    let confirmDialogRemove;

    const { 
      removeFeedDataFromReadLater,
      checkIsReadLaterText, 
      removeAllReadLaterFeeds,
      feedsReadLaterData,
      hideConfirmDialog, 
      confirmDialog,
      getFeedText,
      firebase, 
      location,
      feedKey,
      theme,
    } = this.props;

    const {viewMode, loading, error } = this.state;

    const messageReadLaterEmpty = 
      <Message
        header='No added feeds to&nbsp;Read&nbsp;later' 
      />

    const dialogRemoveFeedData = <DialogRemoveFeedsReadLater 
                                    dialogHeader={dialogHeaderFeed}
                                    dialogText={dialogTextFeed}
                                    action={removeFeedDataFromReadLater}
                                    feedKey={feedKey}
                                    firebase={firebase}
                                    hideConfirmDialog={hideConfirmDialog} />

    const dialogRemoveAllFeedsData = <DialogRemoveFeedsReadLater
                                        dialogHeader={dialogHeaderAllFeeds}
                                        dialogText={dialogTextAllFeeds}
                                        action={removeAllReadLaterFeeds}
                                        feedKey=''
                                        firebase={firebase}
                                        hideConfirmDialog={hideConfirmDialog} />

    if (feedKey === 'removeAllFeeds') {
      confirmDialogRemove = dialogRemoveAllFeedsData
    } else {
      confirmDialogRemove = dialogRemoveFeedData;
    }

    if (!feedsReadLaterData) {
      feeds = messageReadLaterEmpty;
    } 
    
    if (feedsReadLaterData && Array.isArray(feedsReadLaterData)) {
      if (feedsReadLaterData.length === 0) {
        feeds = messageReadLaterEmpty
      }
    } else {
      feeds = withShowFeedsByViewMode(
                theme,
                viewMode, 
                feedsReadLaterData, 
                null, 
                getFeedText, 
                checkIsReadLaterText, 
                location
              );
    }

    if (error) return (<Error />);
    if (loading) return (<Spinner />);

    return (
      <>
        {feeds}
        {confirmDialog && confirmDialogRemove}
      </>
    );
  }
}

function mapStateToProps(state) {
  const {
    getFeedsReadLaterData: { feedsReadLaterData },
    getViewMode: { viewMode },
    setViewMode: { localViewMode },
    toggleSettingsVisible: { settingsVisible },
    toggleConfirmDialog: { confirmDialog, feedKey },
    removeFeedDataFromReadLater: { removedFeedKey },
  } = state;

  return {
    feedsReadLaterData,
    settingsVisible,
    removedFeedKey,
    localViewMode,
    confirmDialog,
    viewMode,
    feedKey,
  }
}

const mapDispatchToProps = {
  removeFeedDataFromReadLater,
  checkIsReadLaterText,
  removeAllReadLaterFeeds,
  getFeedsReadLaterData,
  showConfirmDialog,
  hideConfirmDialog,
  getViewMode,
  getFeedText,
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
  withFirebase, withTheme, withRouter)(FeedsReadLater);
