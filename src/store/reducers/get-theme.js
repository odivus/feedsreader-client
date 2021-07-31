import {GET_THEME_SUCCESS} from '../actions/action-types';

const initialState = {
  theme: ''
}

function getThemeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THEME_SUCCESS:
      return {
        ...state,
        theme: action.theme
      }
    default:
      return state;
  }
}

export default getThemeReducer;