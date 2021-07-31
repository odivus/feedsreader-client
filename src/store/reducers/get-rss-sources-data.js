import {
  GET_SOURCES_DATA_SUCCESS,
  GET_SOURCES_DATA_FAIL
} from '../actions/action-types';

const initialState = {
  rssSourcesData: null,
  error: null
}

export default function getRssSourcesDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SOURCES_DATA_SUCCESS:
      return {
        ...state,
        rssSourcesData: action.rssSourcesData,
        error: null,
      }
    case GET_SOURCES_DATA_FAIL:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state;
  }
}