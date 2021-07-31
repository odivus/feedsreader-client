import saveTokenToLocalStore
  from '../../utilities/saveTokenToLocalStore';
import {
  signInSuccess,
  signInFail
} from './sign-in';

function dispatchSignInSuccess(data, firebase, dispatch) {
  const userToken = data.credential.accessToken;
  const userID = firebase.getUserData().uid;

  saveTokenToLocalStore(userID, userToken);
  dispatch(signInSuccess(userToken));
}

export function signInSocial(firebase, socialName) {
  return (dispatch) => {
    switch (socialName) {
      case 'google':
        firebase.doSignInWithGooglePopup()
          .then((data) => dispatchSignInSuccess(data, firebase, dispatch))
          .catch((error) => dispatch(signInFail(error)));
        break;
      case 'facebook':
        firebase.doSignInWithFacebookPopup()
          .then((data) => dispatchSignInSuccess(data, firebase, dispatch))
          .catch((error) => dispatch(signInFail(error)));
        break;
      case 'github':
        firebase.doSignInWithGithubPopup()
          .then((data) => dispatchSignInSuccess(data, firebase, dispatch))
          .catch((error) => dispatch(signInFail(error)));
        break;
    
      default:
        break;
    }
  }
}
