import {REMOVE_FEED_DATA_FROM_READ_LATER} from '../actions/action-types';

const initialState = {
  removedFeedKey: '',
}

function removeFeedDataFromReadLaterReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_FEED_DATA_FROM_READ_LATER:
      return {
        ...state,
        removedFeedKey: action.feedKey,
      }
    default:
      return state;
  }
}

export default removeFeedDataFromReadLaterReducer;