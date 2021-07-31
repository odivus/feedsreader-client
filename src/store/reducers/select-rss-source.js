import {SELECT_RSS_SOURCE} from '../actions/action-types';

const initialState = {
  selectedRssSource: '',
  selectedRssSourceUrl: ''
}

function selectRssSourceReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_RSS_SOURCE:
      return {
        ...state,
        selectedRssSource: action.rssSource,
        selectedRssSourceUrl: action.rssSourceUrl
      }
    default:
      return state;
  }
}

export default selectRssSourceReducer;