import { REMOVE_ALL_READ_LATER_FEEDS } from './action-types';
import { hideConfirmDialog } from './toggle-confirm-dialog';
import { getFeedsReadLaterData } from './get-feeds-readlater-data';

export function removeAllReadLaterFeedsSuccess() {
  return {
    type: REMOVE_ALL_READ_LATER_FEEDS,
  }
}

export function removeAllReadLaterFeeds(firebase) {
  return (dispatch) => {
    dispatch(hideConfirmDialog());

    firebase.deleteAllFeedsReadLater()
    .then(() => {
      dispatch(removeAllReadLaterFeedsSuccess());
      dispatch(getFeedsReadLaterData(firebase));
      })
    .catch(error => console.log(error.message));
  }
}