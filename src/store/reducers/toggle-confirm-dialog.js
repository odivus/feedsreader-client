import {
  SHOW_CONFIRM_DIALOG,
  HIDE_CONFIRM_DIALOG,
} from '../actions/action-types';

const initialState = {
  confirmDialog: false,
  feedKey: '',
}

function toggleConfirmDialogReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_CONFIRM_DIALOG:
      return {
        ...state,
        confirmDialog: true,
        feedKey: action.feedKey,
      }

    case HIDE_CONFIRM_DIALOG:
      return {
        ...state,
        confirmDialog: false,
        feedKey: action.feedKey,
      }
  
    default:
      return state;
  }
}

export default toggleConfirmDialogReducer;