import React from 'react';
import { withFirebase } from '../../firebase';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { toggleSettingsVisible } from '../../../store/actions/toggle-settings-visible';

import { compose } from 'recompose';

const SignOut = (props) => {
  const { firebase, toggleSettingsVisible } = props;
  // const userEmail = firebase.auth.currentUser.email;

  const signOut = () => {
    firebase.doSignOut()
    .then(() => {
      localStorage.clear();
      toggleSettingsVisible();
      props.history.push('/signin');
    })
    .catch((error) => console.log(error));
  }
  
  return (
    <Link to='#' onClick={signOut}>Sign Out</Link>
  );
}

const mapDispatchToProps = {
  toggleSettingsVisible
}

export default compose(
  connect(null, mapDispatchToProps),
  withRouter,
  withFirebase)(SignOut);
