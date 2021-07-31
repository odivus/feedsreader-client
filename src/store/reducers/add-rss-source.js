import {
  ADD_SOURCE_SUCCESS,
  ADD_SOURCE_FAIL,
} from '../actions/action-types';

const initialState = {
  rssSources: null,
  error: null
}

export default function addRssSourceReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SOURCE_SUCCESS:
      return {
        ...state, 
        rssSources: action.rssSources,
        error: null
      }
    case ADD_SOURCE_FAIL:
      return {
        ...state, error: action.error
      }
    default:
      return state;
  }
}