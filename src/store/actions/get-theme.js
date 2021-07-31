import {GET_THEME_SUCCESS} from './action-types';
import {setThemeSuccess} from './set-theme';

export function getThemeSuccess(theme) {
  return {
    type: GET_THEME_SUCCESS,
    theme
  }
}

export function getTheme(firebase) {
  return (dispatch) => {
    firebase.getUserTheme()
      .then(data => {
        if (data) {
          dispatch(getThemeSuccess(data));
          dispatch(setThemeSuccess(data));
        } else {
          dispatch(getThemeSuccess('Light'));
        }
      })
  }
}
