import saveTokenToLocalStore
  from '../../utilities/saveTokenToLocalStore';
import {
  SIGNIN_SUCCESS,
  SIGNIN_FAIL
} from './action-types';

export function signInSuccess(token) {
  return {
    type: SIGNIN_SUCCESS,
    token
  }
}

export function signInFail(error) {
  return {
    type: SIGNIN_FAIL,
    error
  }
}

export function signIn(email, password, firebase) {
  return (dispatch) => {
    firebase.doSignInWithEmailAndPassword(email, password)
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
              dispatch(signInSuccess(userToken));
            })
            .catch((error) => dispatch(signInFail(error)));
          }
        })
        .catch((error) => dispatch(signInFail(error)));
  }
}
