import { GET_FEEDS_READLATER } from './action-types';

export function getFeedsReadLaterSuccess(feedsReadLater) {
  return {
    type: GET_FEEDS_READLATER,
    feedsReadLater,
  }
}

export function getFeedsReadLater(firebase) {
  return (dispatch) => {
    firebase.getFeedsToReadLater()
    .then(feedsToReadLater => {
        const feeds = [];
        if (feedsToReadLater) {
          Object.entries(feedsToReadLater)
            .forEach(item => feeds.push(item[1].link));
          dispatch(getFeedsReadLaterSuccess(feeds));
        } else {
          dispatch(getFeedsReadLaterSuccess([]));
        }
      })
  }
}