import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeedText } from '../../store/actions/get-feed-text';

import '../buttons-icons/buttons-icons.css';

export function withFeedTextNav(FeedTextNavComp, stringNextOrPrev) {
  const FeedTextNextPrev = class extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.selectSourceFeeds = this.selectSourceFeeds.bind(this);
      this.setStateNoActive = this.setStateNoActive.bind(this);

      this.state = {
        active: true,
      }
    }

    componentDidMount() {
      const { rssSourcesData, feedsReadLaterData, isFeedsTextFromReadLater, feedLink, title } = this.props;

      if (feedLink) {
        this.setStateNoActive(rssSourcesData, feedsReadLaterData, isFeedsTextFromReadLater, feedLink, title);
      }
    }

    componentDidUpdate(prevProps) {
      const { 
        isFeedsTextFromReadLater,
        feedsReadLaterData,
        rssSourcesData, 
        feedLink, 
        title 
      } = this.props;

      if (prevProps.feedLink !== feedLink) {
        if (!this.state.active) {
          this.setState({
            active: true,
          });
        }

        this.setStateNoActive(rssSourcesData, feedsReadLaterData, isFeedsTextFromReadLater, feedLink, title);
      }
    }

    selectSourceFeeds(...args) {
      const [
        rssSourcesData,
        feedsReadLaterData,
        isFeedsTextFromReadLater,
        title
      ] = args;

      if (isFeedsTextFromReadLater) {
        return feedsReadLaterData.parsedData.map(item => item[1]);
      } else {
        return rssSourcesData.parsedData.filter(item => {
          return item.sourceTitle === title;
        });
      }
    }

    setStateNoActive(rssSourcesData, feedsReadLaterData, isFeedsTextFromReadLater, feedLink, title) {
     
      const sourceFeeds = this.selectSourceFeeds(rssSourcesData, feedsReadLaterData, isFeedsTextFromReadLater, title);

      const indexCurrentLink = sourceFeeds.findIndex(index => {
        return index.link === feedLink;
      });

      const lastSourceFeedsElem = sourceFeeds.length - 1;

      if (stringNextOrPrev === 'next') {
        if (indexCurrentLink === 0) {
          this.setState({
            active: false,
          });
        }
      }

      if (stringNextOrPrev === 'prev') {
        if (indexCurrentLink === lastSourceFeedsElem) {
          this.setState({
            active: false,
          });
        }
      }
    }

    handleClick(props) {
      if (props) {
        const {
          isFeedsTextFromReadLater,
          feedsReadLaterData,
          rssSourcesData,
          getFeedText,
          feedLink,
          title,
        } = props;

        const sourceFeeds = this.selectSourceFeeds(rssSourcesData, feedsReadLaterData, isFeedsTextFromReadLater, title);

        const indexCurrentLink = sourceFeeds.findIndex(index => {
          return index.link === feedLink;
        });

        const lastSourceFeedsElem = sourceFeeds.length - 1;

        let feedIndex;

        switch (stringNextOrPrev) {
          case 'prev':
            feedIndex = indexCurrentLink + 1;
            break;
          case 'next':
            feedIndex = indexCurrentLink - 1;
            break;
        
          default:
            break;
        } 

        function getSourceFeedsData(feedIndex) {
          let feedImgAvailable = false;

          const feedIndexLink = sourceFeeds[feedIndex].link,
                feedTitle = sourceFeeds[feedIndex].sourceTitle,
                feedDate = sourceFeeds[feedIndex].date,
                feedHeader = sourceFeeds[feedIndex].title;

          const feedImgSrc = sourceFeeds[feedIndex].enclosure
            ? sourceFeeds[feedIndex].enclosure.url
            : '';
          const feedIndexFullText = sourceFeeds[feedIndex].fulltext
            ? sourceFeeds[feedIndex].fulltext
            : '';

          if (feedImgSrc) feedImgAvailable = true;

          return [feedIndexLink, feedIndexFullText, feedTitle, feedDate, feedHeader, feedImgSrc, feedImgAvailable];
        }

        if (feedIndex > lastSourceFeedsElem) {
          feedIndex = lastSourceFeedsElem;
        }

        if (feedIndex < 0) feedIndex = 0;

        if (feedIndex < lastSourceFeedsElem || feedIndex > 0) {
          getFeedText(...getSourceFeedsData(feedIndex));
        }

        if (feedIndex === lastSourceFeedsElem || feedIndex === 0) {
          getFeedText(...getSourceFeedsData(feedIndex));
          this.setState({
            active: false,
          });
        }
      }
    }

    render() {
      const { active } = this.state;
      
      return <FeedTextNavComp 
                active={active}
                iconClassName={`icons ${stringNextOrPrev}`}
                action={
                  () => {
                    if (active) this.handleClick(this.props);
                  }
                } />;
    };
  }

  function mapStateToProps(state) {
    const {
      getRssSourcesData: { rssSourcesData },
      getFeedsReadLaterData: { feedsReadLaterData },
      checkIsReadLaterText: { isFeedsTextFromReadLater },
      getFeedText: { feedLink, feedText, title, date, header, imgSrc },
    } = state;

    return {
      isFeedsTextFromReadLater,
      feedsReadLaterData,
      rssSourcesData,
      feedLink,
      feedText,
      imgSrc,
      header,
      title,
      date,
    }
  }

  const mapDispatchToProps = {
    getFeedText,
  }

  return connect(mapStateToProps, mapDispatchToProps)(FeedTextNextPrev);
}