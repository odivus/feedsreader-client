import {SOURCE_DUPLICATE_NOT_ADDED} from '../actions/action-types';

const initialState = {
  addStatus: null,
}

export default function notAddedDuplicateReducer(state = initialState, action) {
  switch (action.type) {
    case SOURCE_DUPLICATE_NOT_ADDED:
      return {
        ...state,
        addStatus: action.addStatus,
      }
  
    default:
      return state;
  }
}