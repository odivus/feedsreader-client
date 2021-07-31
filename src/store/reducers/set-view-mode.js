import {SET_VIEW_MODE_SUCCESS} from '../actions/action-types';

const initialState = {
  localViewMode: ''
}

function setViewModeReducer(state=initialState, action) {
  switch (action.type) {
    case SET_VIEW_MODE_SUCCESS:
      return {
        ...state,
        localViewMode: action.viewMode
      }
    default:
      return state;
  }
}

export default setViewModeReducer;