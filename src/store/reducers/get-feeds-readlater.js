import { GET_FEEDS_READLATER } from '../actions/action-types';

const initialState = {
  feedsReadLater: null,
}

function getFeedsReadLaterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FEEDS_READLATER:
      return {
        ...state,
        feedsReadLater: action.feedsReadLater,
      }
  
    default:
      return state;
  }
}

export default getFeedsReadLaterReducer;