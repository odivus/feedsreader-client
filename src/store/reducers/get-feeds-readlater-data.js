import { GET_FEEDS_READLATER_DATA } from '../actions/action-types';

const initialState = {
  feedsReadLaterData: null,
}

function getFeedsReadLaterDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FEEDS_READLATER_DATA:
      return {
        ...state,
        feedsReadLaterData: action.feedsReadLaterData,
      }

    default:
      return state;
  }
}

export default getFeedsReadLaterDataReducer;