import saveTokenToLocalStore
  from '../../utilities/saveTokenToLocalStore';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from './action-types';

export function signUpSuccess(token) {
  return {
    type: SIGNUP_SUCCESS,
    token
  }
}

export function signUpFail(error) {
  return {
    type: SIGNUP_FAIL,
    error
  }
}

export function signUp(email, password, firebase) {
  return (dispatch) => {
    firebase.doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.getUserData();
        if (user) {
          user.getIdToken()
            .then((userToken) => {
              return userToken;
            })
            .then((userToken) => {
              const userID = firebase.getUserData().uid;
              saveTokenToLocalStore(userID, userToken);
              dispatch(signUpSuccess(userToken));
            })
            .catch((error) => dispatch(signUpFail(error)));
        }
      })
      .catch((error) => dispatch(signUpFail(error)));
  }
}
