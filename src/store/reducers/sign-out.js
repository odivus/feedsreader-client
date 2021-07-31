import {SIGN_OUT} from '../actions/action-types';

const initialState = {
  token: true
}

export default function signOutReducer(state=initialState, action) {
  switch (action.type) {
    case SIGN_OUT:
      return {
        ...state, token: action.token
      }
    default:
      return state;
  }
}