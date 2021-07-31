import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import WithSignPage from '../helpers/with-signPage';

import '../sign-in-up-out.css';

function withSignInUpPage(SignInUpForm) {
  
  const RenderContent = ({ isSignIn }) => (
    (!isSignIn)
      ? <WithSignPage signForm={<SignInUpForm />} />
      : <Redirect to='/' />
  );
  
  return class extends Component {
    state = {
      isSignIn: false
    }

    componentDidMount() {
      if (localStorage.token) {
        this.setState({ isSignIn: true });
      }
    }

    componentDidUpdate(prevProps) {
      if (this.props.token !== prevProps.token) {
        this.setState({ isSignIn: true });
      }
    }

    render() {
      const { isSignIn } = this.state;
      return (
        <RenderContent isSignIn={isSignIn} />
      );
    }
  }
}

export default withSignInUpPage;
