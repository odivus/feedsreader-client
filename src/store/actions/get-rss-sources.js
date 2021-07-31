import {
  GETSOURCES_SUCCESS,
  GETSOURCES_FAIL
} from './action-types';

export function getRssSourcesSuccess(rssSources) {
  return {
    type: GETSOURCES_SUCCESS,
    rssSources
  }
}

export function getRssSourcesFail(error) {
  return {
    type: GETSOURCES_FAIL,
    error
  }
}

export function getRssSources(firebase) {
  return (dispatch) => {
    firebase.getUserRssSources()
    .then(data => {
      if (data) {
        dispatch(getRssSourcesSuccess(data));
      } else {
        dispatch(getRssSourcesSuccess({}));
      }
    })
    .catch((error) => dispatch(getRssSourcesFail(error)));
  }
}
