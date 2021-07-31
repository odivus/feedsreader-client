import { REMOVE_ALL_READ_LATER_FEEDS } from '../actions/action-types';

const initialState = {
  removeAllFeedsReadLaterData: false,
}

function removeAllReadLaterFeedsReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_ALL_READ_LATER_FEEDS:
      return {
        ...state,
        removeAllFeedsReadLaterData: true,
      }
    default:
      return state;
  }
}

export default removeAllReadLaterFeedsReducer;