import {SET_RELOAD} from '../actions/action-types';

const initialState = {
  reload: false
}

function setReloadReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RELOAD:
      return {
        ...state,
        reload: !state.reload,
      }
    default:
      return state;
  }
}

export default setReloadReducer;
