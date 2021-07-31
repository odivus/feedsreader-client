import {
  TOGGLE_EDIT_SOURCE_VISIBLE,
  CLOSE_EDIT_SOURCE,
  OPEN_EDIT_SOURCE,
} from '../actions/action-types';

const initialState = {
  editSourceVisible: false,
  sourceId: null,
  sourceItemAction: '',
}

function toggleEditSourceVisibleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_EDIT_SOURCE_VISIBLE:
      return {
        ...state,
        editSourceVisible: !state.editSourceVisible,
        sourceId: action.sourceId,
      }
      case OPEN_EDIT_SOURCE:
        return {
          ...state,
          editSourceVisible: true,
          sourceId: action.sourceId,
          sourceItemAction: action.sourceItemAction,
      }
    case CLOSE_EDIT_SOURCE:
      return {
        ...state,
        editSourceVisible: false,
        sourceId: action.sourceId,
        sourceItemAction: '',
      }
    default:
      return state;
  }
}

export default toggleEditSourceVisibleReducer;