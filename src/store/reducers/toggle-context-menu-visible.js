import {
  TOGGLE_CONTEXT_MENU_VISIBLE,
  CLOSE_CONTEXT_MENU,
  OPEN_CONTEXT_MENU,
} from '../actions/action-types';

const initialState = {
  contextMenuVisible: false,
  clickItemId: null,
}

function toggleContextMenuVisibleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CONTEXT_MENU_VISIBLE:
      return {
        ...state,
        contextMenuVisible: !state.contextMenuVisible,
        clickItemId: action.clickItemId,
      }
    case OPEN_CONTEXT_MENU:
      return {
        ...state,
        contextMenuVisible: true,
        clickItemId: action.clickItemId,
      }
    case CLOSE_CONTEXT_MENU:
      return {
        ...state,
        contextMenuVisible: false,
        // clickItemId: action.clickItemId,
      }
    default:
      return state;
  }
}

export default toggleContextMenuVisibleReducer;