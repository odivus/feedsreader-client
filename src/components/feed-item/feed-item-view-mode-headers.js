import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from '../theme';

import { ShowReadLaterButton } from './show-read-later-button';
import { handleClick } from './handle-click';

import {
  classNamesFeedItemTitle,
  classNamesFeedItemHeader,
  classNamesFeedItemDate,
  classNamesFeedItem,
} from './class-names';

import './feed-item.css';

const FeedItemViewModeHeaders = (props) => {
  const { 
    feedReadLaterDbKey, 
    feedsReadLater,
    viewMode,
    header,
    theme,
    title, 
    feed, 
    date, 
  } = props;

  const showReadLaterButton = <ShowReadLaterButton
                                feedsReadLater={feedsReadLater}
                                feed={feed}
                                theme={theme}
                                viewMode={viewMode}
                                feedReadLaterDbKey={feedReadLaterDbKey} />;

  return (
    <div className='feed-items-wrapper'>
      {showReadLaterButton}
      <div 
        className={classNamesFeedItem(theme, viewMode)}
        onClick={() => handleClick(props)}>
          <div className={classNamesFeedItemTitle(theme, viewMode)}>
            {title}
          </div>
          <div className={classNamesFeedItemDate(theme, viewMode)}>
            {date}
          </div>
          <div className={classNamesFeedItemHeader(theme, viewMode)}>
            {header}
          </div>
      </div>
    </div>
  );
}

export default withTheme(withRouter(FeedItemViewModeHeaders));
