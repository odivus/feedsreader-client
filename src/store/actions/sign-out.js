import {SIGN_OUT} from './action-types';

export function signOut() {
  console.log('signOut Action');
  return {
    type: SIGN_OUT,
    token: false
  }
}