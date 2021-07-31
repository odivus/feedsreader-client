import { GET_FEEDS_READLATER_DATA } from './action-types';

export function getFeedsReadLaterDataSuccess(feedsReadLaterData) {
  return {
    type: GET_FEEDS_READLATER_DATA,
    feedsReadLaterData,
  }
}

export function getFeedsReadLaterData(firebase) {
  return (dispatch) => {
    firebase.getFeedsToReadLater()
      .then(feedsToReadLater => {
        const feeds = [];
        const data = {};

        if (feedsToReadLater) {
          Object.entries(feedsToReadLater)
            .forEach(item => feeds.push(item));

          data.parsedData = feeds.sort((a, b) => {
            if (a[1].isoDate && b[1].isoDate) {
              return Date.parse(b[1].isoDate) - Date.parse(a[1].isoDate);
            }
            return feeds;
          });

          dispatch(getFeedsReadLaterDataSuccess(data));
        } else {
          dispatch(getFeedsReadLaterDataSuccess([]));
        }
      })
  }
}