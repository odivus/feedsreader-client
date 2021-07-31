import { TOGGLE_MENU_VISIBLE } from '../actions/action-types';

const initialState = {
  menuVisible: false
}

function toggleMenuVisibleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU_VISIBLE:
      return {
        ...state,
        menuVisible: !state.menuVisible,
      }
    default:
      return state;
  }
}

export default toggleMenuVisibleReducer;