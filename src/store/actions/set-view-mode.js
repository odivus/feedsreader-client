import {SET_VIEW_MODE_SUCCESS} from './action-types';

export function setViewModeSuccess(viewMode) {
  return {
    type: SET_VIEW_MODE_SUCCESS,
    viewMode,
  }
}

export function setViewMode(viewMode, firebase) {
  return (dispatch) => {
    dispatch(setViewModeSuccess(viewMode));
    firebase.setUserViewMode(viewMode);
  }
}
