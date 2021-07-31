import {GET_VIEW_MODE_SUCCESS} from '../actions/action-types';

const initialState = {
  viewMode: ''
}

function getViewModeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIEW_MODE_SUCCESS:
      return {
        ...state,
        viewMode: action.viewMode
      }
    default:
      return state;
  }
}

export default getViewModeReducer;