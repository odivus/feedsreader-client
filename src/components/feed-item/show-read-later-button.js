import React from 'react';
import ReadLater from './read-later';
import FeedItemRemove from './feed-item-remove';

export const ShowReadLaterButton = (props) => {
  const {
    feedsReadLater,
    feed,
    theme,
    viewMode,
    feedReadLaterDbKey
  } = props;
  
  return (
    feedsReadLater
      ? <ReadLater
        feed={feed}
        theme={theme}
        viewMode={viewMode}
        feedsReadLater={feedsReadLater} />
      : <FeedItemRemove
        theme={theme}
        viewMode={viewMode}
        feedReadLaterDbKey={feedReadLaterDbKey} />
  );
}