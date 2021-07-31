import {SET_THEME_SUCCESS} from './action-types';

export function setThemeSuccess(theme) {
  return {
    type: SET_THEME_SUCCESS,
    theme,
  }
}

export function setTheme(theme, firebase) {
  return (dispatch) => {
    dispatch(setThemeSuccess(theme));
    firebase.setUserTheme(theme);
  }
}
