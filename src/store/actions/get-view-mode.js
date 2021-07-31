import {GET_VIEW_MODE_SUCCESS} from './action-types';

export function getViewModeSuccess(viewMode) {
  return {
    type: GET_VIEW_MODE_SUCCESS,
    viewMode
  }
}

export function getViewMode(firebase) {
  return (dispatch) => {
    firebase.getUserViewMode(localStorage.userId)
      .then(data => {
        if (data) {
          dispatch(getViewModeSuccess(data));
        } else {
          dispatch(getViewModeSuccess('Cards'));
        }
      })
  }
}