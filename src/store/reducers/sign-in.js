import { 
  SIGNIN_SUCCESS,
  SIGNIN_FAIL
} from '../actions/action-types';

const initialState = {
  token: null,
  error: null
}

export default function signInReducer(state=initialState, action) {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state, token: action.token
      }
    case SIGNIN_FAIL:
      return {
        ...state, error: action.error
      }
    default:
      return state
  }
}