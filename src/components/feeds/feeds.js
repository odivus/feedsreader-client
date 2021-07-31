import React, {Component} from 'react';
import { withRouter } from "react-router";

import { connect } from 'react-redux';
import { withFirebase } from '../firebase';
import { withTheme } from '../theme';
import { compose } from 'recompose';

import withShowFeedsByViewMode from '../helpers/with-show-feeds-by-view-mode';

import { getRssSources } from '../../store/actions/get-rss-sources';
import { getRssSourcesData } from '../../store/actions/get-rss-sources-data';
import { getFeedText } from '../../store/actions/get-feed-text';
import { getViewMode } from '../../store/actions/get-view-mode';
import { getFeedsReadLater } from '../../store/actions/get-feeds-readlater';
import {
  checkIsReadLaterText
} from '../../store/actions/check-is-read-later-text.js';

import FeedAddSource from '../feed-add/feed-add-source';
import Error from '../error';
import Spinner from '../spinner';

import './feeds.css';

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: this.props.localViewMode || this.props.viewMode || 'Cards',
      loading: true,
      error: false,
    }
  }

  rssSourcesToArray(rssSources) {
    if (!rssSources || 
      Object.getPrototypeOf(rssSources).constructor.name !== 'Object') {
        return [];
      }
    
    let rssSourcesUrl = [];

    Object.keys(rssSources)
      .forEach(item => {
        rssSourcesUrl.push(rssSources[item].rssUrl);
      });

    return rssSourcesUrl;
  }

  componentDidMount() {
    const { 
      getFeedsReadLater,
      rssSourcesData,
      localViewMode,
      getRssSources, 
      getViewMode, 
      firebase,
    } = this.props;

    if (!rssSourcesData) {
      getRssSources(firebase);
      getFeedsReadLater(firebase);
    } else {
      getFeedsReadLater(firebase);
      this.setState({loading: false});
    }

    if (!localViewMode) {
      getViewMode(firebase);
    } else {
      this.setState({ viewMode: localViewMode });
    }
  }
  
  componentDidUpdate(prevProps) {
    let rssSourcesLength = 0,
        prevRssSourcesLength = 0;

    const { 
      getFeedsReadLater,
      getRssSourcesData,
      settingsVisible,
      rssSourcesData,
      selectedRssSourceUrl,
      rssSources,
      menuVisible,
      viewMode,
      localViewMode,
      setReload,
      firebase,
      error,
    } = this.props;

    if (selectedRssSourceUrl !== prevProps.selectedRssSourceUrl) {
      if (selectedRssSourceUrl) window.scroll(0, 0);
    }

    if (menuVisible !== prevProps.menuVisible) {
      if (menuVisible === true) {
        getFeedsReadLater(firebase);
      }
    }

    if (settingsVisible !== prevProps.settingsVisible) {
      if (settingsVisible === true) {
        getFeedsReadLater(firebase);
      }
    }

    if (rssSources && prevProps.setReload !== setReload) {
      getRssSourcesData(this.rssSourcesToArray(rssSources));
      getFeedsReadLater(firebase);
      this.setState({
        loading: true,
      });
    }

    if (rssSources && prevProps.rssSources) {
      rssSourcesLength = Object.keys(rssSources).length;
      prevRssSourcesLength = Object.keys(prevProps.rssSources).length;
    }

    if (!prevProps.rssSources || rssSourcesLength !== prevRssSourcesLength) {
      getRssSourcesData(this.rssSourcesToArray(rssSources));
      getFeedsReadLater(firebase);
    }
    
    if (prevProps.rssSourcesData !== rssSourcesData) {
      this.setState({
        loading: false,
      });
    }

    if (error) {
      if (prevProps.error !== error) this.setState({ error: true });
    }

    if (rssSourcesData && 
      prevProps.rssSourcesData !== rssSourcesData) {
      if (!rssSourcesData.parsedData) {
        this.setState({ error: true });
      }
    }

    if (localViewMode !== prevProps.localViewMode) {
      this.setState({ viewMode: localViewMode });
      getFeedsReadLater(firebase);
    }
 
    if (viewMode !== prevProps.viewMode) {
      this.setState({ viewMode: viewMode });
      getFeedsReadLater(firebase);
    }
    
  }

  render() {
    let feeds,
      data = {},
      rssSourcesDataFiltered = null;

    let { 
      theme,
      location,
      rssSources,
      getFeedText,
      rssSourcesData, 
      feedsReadLater, 
      selectedRssSourceUrl,
      checkIsReadLaterText,
    } = this.props;

    const {viewMode, loading, error} = this.state;

    if (selectedRssSourceUrl) {
      rssSourcesDataFiltered = rssSourcesData.parsedData.filter(item => {
        return item.sourcelink === selectedRssSourceUrl;
      });
    }

    if (rssSourcesDataFiltered) {
      data.parsedData = rssSourcesDataFiltered;
    } else {
      data = rssSourcesData;
    }

    feeds = withShowFeedsByViewMode(
              theme,
              viewMode, 
              data, 
              feedsReadLater,
              getFeedText,
              checkIsReadLaterText, 
              location
            );
   
    if (error) return (<Error />);
    if (loading) return (<Spinner />);

    if (rssSources) {
      if (Object.keys(rssSources).length === 0) {
        return (
          <FeedAddSource theme={theme} />
        );
      }
    }

    return (rssSourcesData.parsedData && feeds);
  }
}

function mapStateToProps(state) {
  const {
    getRssSources: { rssSources },
    getRssSourcesData: { rssSourcesData, error },
    getFeedsReadLater: { feedsReadLater },
    getViewMode: { viewMode },
    setViewMode: { localViewMode },
    selectRssSource: { selectedRssSourceUrl },
    toggleMenuVisible: { menuVisible },
    toggleSettingsVisible: {settingsVisible},
    setReload,
  } = state;

  return {
    selectedRssSourceUrl,
    settingsVisible,
    rssSourcesData,
    feedsReadLater,
    localViewMode,
    menuVisible,
    rssSources,
    setReload,
    viewMode,
    error,
  }
}

const mapDispatchToProps = {
  checkIsReadLaterText,
  getRssSourcesData,
  getFeedsReadLater,
  getRssSources,
  getFeedText,
  getViewMode,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase, withTheme, withRouter)(Feeds);
