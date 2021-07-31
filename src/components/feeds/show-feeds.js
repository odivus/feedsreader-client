import React from 'react';

import FeedItemViewModeCards from '../feed-item/feed-item-view-mode-cards';
import FeedItemViewModeJournal from '../feed-item/feed-item-view-mode-journal';
import FeedItemViewModeHeaders from '../feed-item/feed-item-view-mode-headers';

const ShowFeeds = (props) => {
  const { 
    data, 
    feedsReadLater, 
    theme,
    viewMode, 
    getFeedText,
    checkIsReadLaterText,
    doActions, 
  } = props;
  
  if (data.parsedData) {
    return (
      data.parsedData.map((feed, index) => {
        let imgAvailable = false;
        let imgSrc = '';
        let imgCover = '';
        let feedItem = feed.length > 1 ? feed[1] : feed;

        if (feedItem.sourceImg) imgCover = feedItem.sourceImg.url;

        if (feedItem.enclosure && feedItem.enclosure.url) {
          imgSrc = feedItem.enclosure.url;
          imgAvailable = true;
        }

        if (!imgSrc) imgSrc = imgCover;

        if (viewMode === 'Cards') {
          return <FeedItemViewModeCards
            key={Date.now() + index}
            theme={theme}
            viewMode={viewMode}
            feed={feedItem}
            feedReadLaterDbKey={feed[0]}
            feedsReadLater={feedsReadLater}
            feedFullText={feedItem.fulltext}
            title={feedItem.sourceTitle}
            date={feedItem.date}
            header={feedItem.title}
            imgSrc={imgSrc}
            imgAvailable={imgAvailable} 
            getFeedText={getFeedText}
            checkIsReadLaterText={checkIsReadLaterText}
            doActions={doActions} />
        }

        if (viewMode === 'Journal') {
          return <FeedItemViewModeJournal
            key={Date.now() + index}
            theme={theme}
            viewMode={viewMode}
            feed={feedItem}
            feedReadLaterDbKey={feed[0]}
            feedsReadLater={feedsReadLater}
            feedFullText={feedItem.fulltext}
            title={feedItem.sourceTitle}
            date={feedItem.date}
            header={feedItem.title}
            imgSrc={imgSrc}
            imgAvailable={imgAvailable}
            description={feedItem.contentFormatted}
            category={feedItem.categories} 
            getFeedText={getFeedText}
            checkIsReadLaterText={checkIsReadLaterText}
            doActions={doActions} />;
        }

        if (viewMode === 'Headers') {
          return <FeedItemViewModeHeaders
            key={Date.now() + index}
            theme={theme}
            viewMode={viewMode}
            feed={feedItem}
            feedReadLaterDbKey={feed[0]}
            feedsReadLater={feedsReadLater}
            feedFullText={feedItem.fulltext}
            title={feedItem.sourceTitle}
            date={feedItem.date}
            header={feedItem.title}
            imgSrc={imgSrc}
            imgAvailable={imgAvailable} 
            getFeedText={getFeedText}
            checkIsReadLaterText={checkIsReadLaterText}
            doActions={doActions} />
        }
        return null;
      })
    );
  } else {
    return (null);
  }
}

export default ShowFeeds;