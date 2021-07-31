import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from '../theme';

import { ShowReadLaterButton } from './show-read-later-button';
import { handleClick } from './handle-click';

import {
  classNamesFeedItem,
  classNamesFeedItemDate,
  classNamesFeedItemTitle,
  classNamesFeedItemHeader,
} from './class-names';

import './feed-item.css';

const FeedItemViewModeJournal = (props) => {
  const { 
    theme,
    viewMode,
    feed, 
    feedReadLaterDbKey,
    feedsReadLater,
    title, 
    date, 
    header, 
    imgSrc,
    description, 
  } = props;

  const feedItemImg = (
    <div className='feed-item__img_viewmode_journal'>
      <img src={imgSrc} alt='' />
    </div>
  );

  const showReadLaterButton = <ShowReadLaterButton
                                feedsReadLater={feedsReadLater}
                                feed={feed}
                                theme={theme}
                                viewMode={viewMode}
                                feedReadLaterDbKey={feedReadLaterDbKey} />;

  const feedItemDescription = description 
                            ? <div className='feed-item__description'>
                                {description}
                              </div>
                            : <div className='feed-item__description'></div>

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
        {imgSrc && feedItemImg}
        {feedItemDescription}
      </div>
    </div>
  );
}

export default withTheme(withRouter(FeedItemViewModeJournal));
