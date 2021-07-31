import {GET_CLICK_ITEM} from '../actions/action-types';

const initialState = {
  clickItem: null,
}

function getClickItemReducer(state=initialState, action) {
  switch(action.type) {
    case GET_CLICK_ITEM:
      return {
        ...state,
        clickItem: action.clickItem,
      }
    default:
      return state;
  }
}

export default getClickItemReducer;
