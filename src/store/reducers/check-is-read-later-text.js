import { CHECK_IS_READ_LATER_TEXT } from '../actions/action-types';

const initialState = {
  isFeedsTextFromReadLater: false
}

function checkIsReadLaterTextReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_IS_READ_LATER_TEXT:
      return {
        ...state,
        isFeedsTextFromReadLater: action.isFeedsTextFromReadLater
      }
    default:
      return state;
  }
}

export default checkIsReadLaterTextReducer;