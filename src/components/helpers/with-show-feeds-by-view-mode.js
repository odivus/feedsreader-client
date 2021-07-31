import React from 'react';
import ShowFeeds from '../feeds/show-feeds';
import {classNamesShowFeeds} from './class-names-with-show-feeds';

export default function withShowFeedsByViewMode(...args) {
  const [
    theme,
    viewMode, 
    parsedData, 
    feedsReadLater,
    getFeedText,
    checkIsReadLaterText,
    location,
  ] = args;

  let doActions;

  const actions = (isFeedsTextFromReadLater) => {
    return (...args) => {
      const [
        feedLink,
        feedFullText,
        title,
        date,
        header,
        imgSrc,
        imgAvailable,
        getFeedText,
        checkIsReadLaterText,
      ] = args;

      checkIsReadLaterText(isFeedsTextFromReadLater);
      getFeedText(feedLink, feedFullText, title, date, header, imgSrc, imgAvailable);
    }
  }
  
  if (location) {
    if (location.pathname === '/readlater') {
      doActions = actions(true);
    } else {
      doActions = actions(false);
    }
  }
  
  switch (viewMode) {
    case 'Cards':
      return (<div className={classNamesShowFeeds(viewMode, theme)}>
        <ShowFeeds
          data={parsedData}
          feedsReadLater={feedsReadLater}
          theme={theme}
          viewMode={viewMode} 
          getFeedText={getFeedText}
          checkIsReadLaterText={checkIsReadLaterText}
          doActions={doActions} />
      </div>);
    case 'Journal':
      return (<div className={classNamesShowFeeds(viewMode, theme)}>
        <ShowFeeds
          data={parsedData}
          feedsReadLater={feedsReadLater}
          theme={theme}
          viewMode={viewMode} 
          getFeedText={getFeedText} 
          checkIsReadLaterText={checkIsReadLaterText}
          doActions={doActions} />
      </div>);
    case 'Headers':
      return (<div className={classNamesShowFeeds(viewMode, theme)}>
        <ShowFeeds
          data={parsedData}
          feedsReadLater={feedsReadLater}
          theme={theme}
          viewMode={viewMode} 
          getFeedText={getFeedText}
          checkIsReadLaterText={checkIsReadLaterText}
          doActions={doActions} />
      </div>)
    default:
      return (<div className='fg-row feeds-wrap-viewmode-cards feeds-wrap-viewmode-cards_theme_dark'>
        <ShowFeeds
          data={parsedData}
          feedsReadLater={feedsReadLater}
          theme={theme}
          viewMode='Cards' 
          getFeedText={getFeedText}
          checkIsReadLaterText={checkIsReadLaterText}
          doActions={doActions} />
      </div>
      );
  }
}