import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { signInSocial } from '../../../store/actions/sign-in-social';
import { withFirebase } from '../../firebase';

import { emailCheck } from '../checkout/email-check';
import { passwordCheck } from '../checkout/password-check';

function withSignInUpForm(FormItemsComponent, SignWithSocial, type) {
  class SignInUpForm extends Component {
    state = {
      email: '',
      password: '',
      error: null
    };

    componentDidMount() {
      if (this.state.error) this.setState({ error: null });
    }

    componentDidUpdate(prevProps) {
      if (this.props.error !== prevProps.error) {
        this.setState({ error: this.props.error });
      }
    }

    onSubmit = (event) => {
      const { email, password } = this.state;
      const { firebase } = this.props;
      // action
      this.props[type](email, password, firebase);
      event.preventDefault();
    }

    onChange = event => {
      this.setState({ 
        [event.target.name]: event.target.value,
        error: null, 
      });
    };

    render() {
      const { email, password, error } = this.state;
      const { signInSocial, firebase } = this.props;

      const isInvalidEmail = emailCheck(email);
      const isInvalidPassword = passwordCheck(password);

      const signWithGoogle = <SignWithSocial 
                                action={
                                  () => signInSocial(firebase, 'google')
                                }
                                socialName='google' 
                                text='Sign&nbsp;in&nbsp;with&nbsp;Google' />;
      
      const signWithFacebook = <SignWithSocial 
                                action={
                                  () => signInSocial(firebase, 'facebook')
                                }
                                socialName='facebook' 
                                text='Sign&nbsp;in&nbsp;with&nbsp;Facebook' />;

      const signWithGithub = <SignWithSocial 
                                action={
                                  () => signInSocial(firebase, 'github')
                                }
                                socialName='github' 
                                text='Sign&nbsp;in&nbsp;with&nbsp;Github' />;

      return (
        <FormItemsComponent
          type={type}
          onSubmit={this.onSubmit}
          signWithGoogle={signWithGoogle}
          signWithFacebook={signWithFacebook}
          signWithGithub={signWithGithub}
          onChange={this.onChange}
          isInvalidEmail={isInvalidEmail}
          isInvalidPassword={isInvalidPassword}
          email={email}
          password={password}
          error={error} />
      );
    }
  }

  const mapDispatchToProps = {
    signInSocial,
  }

  return compose(
    connect(null, mapDispatchToProps), 
    withFirebase)(SignInUpForm);
}

export default withSignInUpForm;