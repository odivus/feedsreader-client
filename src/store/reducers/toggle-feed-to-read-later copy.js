import {
  ADD_FEED_TO_READ_LATER,
  REMOVE_FEED_FROM_READ_LATER, 
} from '../actions/action-types';

const initialState = {
  readLater: false,
  readLaterFeedLinks: [],
}

function toggleFeedToReadLaterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FEED_TO_READ_LATER:
      // if (Array.isArray(action.linkFeedReadLater)) {
      //   return {
      //     ...state,
      //     readLater: true,
      //     readLaterFeedLinks: action.linkFeedReadLater,
      //   }
      // }

      if (state.readLaterFeedLinks.length === 0) {
        return {
          ...state,
          readLater: true,
          readLaterFeedLinks: [
            ...state.readLaterFeedLinks, action.linkFeedReadLater
          ],
        }
      } else {
        if (state.readLaterFeedLinks.includes(action.linkFeedReadLater)) {
          return {
            ...state,
            readLater: false,
            readLaterFeedLinks: state.readLaterFeedLinks
                                .filter(item => {
                                  return item !== action.linkFeedReadLater
                                })
          }
        } else {
          return {
            ...state,
            readLater: true,
            readLaterFeedLinks: [
              ...state.readLaterFeedLinks, action.linkFeedReadLater
            ],
          }
        }
      }
    case REMOVE_FEED_FROM_READ_LATER:
      return {
        ...state,
        readLater: false,
        readLaterFeedLinks: '', 
      }
    default:
      return state;
  }
}

export default toggleFeedToReadLaterReducer;