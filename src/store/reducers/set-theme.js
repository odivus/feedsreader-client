import {SET_THEME_SUCCESS} from '../actions/action-types';

const initialState = {
  localTheme: ''
}

function setThemeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME_SUCCESS:
      return {
        ...state,
        localTheme: action.theme
      }
    default:
      return state;
  }
}

export default setThemeReducer;