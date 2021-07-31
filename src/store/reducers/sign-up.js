import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from '../actions/action-types';

const initialState = {
  token: null,
  error: null
}

export default function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state, token: action.token
      }
    case SIGNUP_FAIL:
      return {
        ...state, error: action.error
      }
    default:
      return state
  }
}