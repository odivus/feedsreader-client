import {EDIT_SOURCE_FAIL} from '../actions/action-types';

const initialState = {
  rssSourceId: null,
  error: '',
}

function editRssSourceReducer(state = initialState, action) {
 switch (action.type) {
   case EDIT_SOURCE_FAIL:
     return {
       ...state,
       rssSourceId: action.rssSourceId,
       error: action.error,
     }
   default:
     return state;
 }
}

export default editRssSourceReducer;