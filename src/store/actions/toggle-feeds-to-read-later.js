import { 
  ADD_FEED_TO_READ_LATER,
  REMOVE_FEED_FROM_READ_LATER,
 } from './action-types';

export function addFeedToReadLater(feedLink) {
  return {
    type: ADD_FEED_TO_READ_LATER,
    feedLink,
  }
}

export function removeFeedFromReadLater(feedLink) {
  return {
    type: REMOVE_FEED_FROM_READ_LATER,
    feedLink,
  }
}

export function toggleFeedsToReadLater(feed, feedLink, firebase) {
  return (dispatch) => {
    firebase.getFeedsToReadLater()
      .then(feedsToReadLater => {
        if (!feedsToReadLater) {
          dispatch(addFeedToReadLater(feedLink));
          firebase.addFeedsReadLater(feed);
        } else {
          const findSomeFeedInDb = Object.entries(feedsToReadLater)
            .find(item => item[1].link === feed.link);

          if (!findSomeFeedInDb) {
            dispatch(addFeedToReadLater(feedLink));
            firebase.addFeedsReadLater(feed);
          } else {
            dispatch(removeFeedFromReadLater(feedLink));
            firebase.deleteFeedsReadLater(findSomeFeedInDb[0]);
          }
        }
      })
  }
}