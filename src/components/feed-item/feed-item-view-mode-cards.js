import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from '../theme';

import { ShowReadLaterButton } from './show-read-later-button';
import { handleClick } from './handle-click';

import {
  classNamesFeedItem,
  classNamesFeedItemBg,
  classNamesFeedItemDate,
  classNamesFeedItemTitle,
  classNamesFeedItemHeader,
} from './class-names';

import './feed-item.css';

const FeedItemViewModeCards = (props) => {
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
  } = props;

  const feedItemImg = 
    <img src={imgSrc} alt='' className='feed-item__img_viewmode_cards feed-item__img_filter_opacity'/>;

  const showReadLaterButton = <ShowReadLaterButton
                                feedsReadLater={feedsReadLater}
                                feed={feed}
                                theme={theme}
                                viewMode={viewMode}
                                feedReadLaterDbKey={feedReadLaterDbKey} />;
    
  return (
    <div className='fg-lg-3 fg-md-4 fg-sm-6 feed-items-wrapper'>
      {showReadLaterButton}
      <div 
        className={classNamesFeedItem(theme, viewMode)}
        onClick={() => handleClick(props)}>
          <div className={classNamesFeedItemTitle(theme, viewMode)}>
            <span className={classNamesFeedItemBg(theme)}>{title}</span>
          </div>
          <div>
            <span className={classNamesFeedItemHeader(theme, viewMode)}>
              {header}
            </span>
          </div>
          <div className={classNamesFeedItemDate(theme, viewMode)}>
            <span className={classNamesFeedItemBg(theme)}>{date}</span>
          </div>
          {imgSrc && feedItemImg}
      </div>
    </div>
  );
}

export default withTheme(withRouter(FeedItemViewModeCards));
