import {
  ADD_FEED_TO_READ_LATER,
  REMOVE_FEED_FROM_READ_LATER, 
} from '../actions/action-types';

const initialState = {
  readLaterFeedsLocal: [],
}

function toggleFeedsToReadLaterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FEED_TO_READ_LATER:
      return {
        ...state,
        readLaterFeedsLocal: [...state.readLaterFeedsLocal, action.feedLink],
      }
    case REMOVE_FEED_FROM_READ_LATER:
      return {
        ...state,
        readLaterFeedsLocal: state.readLaterFeedsLocal
                              .filter(item => item !== action.feedLink),
      }
    default:
      return state;
  }
}

export default toggleFeedsToReadLaterReducer;