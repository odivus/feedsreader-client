import {
  GETSOURCES_SUCCESS,
  GETSOURCES_FAIL
} from '../actions/action-types';

const initialState = {
  rssSources: null,
  error: null
}

export default function getRssSourcesReducer(state=initialState, action){
  switch (action.type) {
    case GETSOURCES_SUCCESS:
      return {
        ...state, 
        rssSources: action.rssSources,
        error: null,
      }
    case GETSOURCES_FAIL:
      return {
        ...state, 
        error: action.error,
      }
    default:
      return state;
  }
}