import {
  GET_FEED_TEXT_SUCCESS,
  GET_FEED_TEXT_FAIL
} from '../actions/action-types';

const initialState = {
  feedText: null,
  feedFullText: '',
  feedLink: '',
  title: '',
  date: '',
  header: '',
  imgSrc: '',
  imgAvailable: false,
  error: null
}

export default function getFeedTextReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FEED_TEXT_SUCCESS:
      return {
        ...state,
        feedText: action.feedText,
        feedFullText: action.feedFullText,
        feedLink: action.feedLink,
        title: action.title,
        date: action.date,
        header: action.header,
        imgSrc: action.imgSrc,
        imgAvailable: action.imgAvailable,
        error: null,
      }
    case GET_FEED_TEXT_FAIL:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state;
  }
}