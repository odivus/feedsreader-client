import { REMOVE_FEED_DATA_FROM_READ_LATER } from './action-types';
import { hideConfirmDialog } from './toggle-confirm-dialog';
import { getFeedsReadLater } from './get-feeds-readlater';

export function removeFeedDataFromReadLaterSuccess(feedKey) {
  return {
    type: REMOVE_FEED_DATA_FROM_READ_LATER,
    feedKey,
  }
}

export function removeFeedDataFromReadLater(firebase, feedReadLaterDbKey) {
  if (feedReadLaterDbKey) {
    return (dispatch) => {
      dispatch(hideConfirmDialog(feedReadLaterDbKey));

      firebase.deleteFeedsReadLater(feedReadLaterDbKey)
        .then(() => {
          dispatch(removeFeedDataFromReadLaterSuccess(feedReadLaterDbKey));
          dispatch(getFeedsReadLater(firebase));
        })
        .catch(error => console.log(error.message));
    }
  }
}