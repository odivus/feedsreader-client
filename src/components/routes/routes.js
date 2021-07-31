import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import withTitle from '../helpers/with-title';

import Home from '../home';
import ReadLater from '../read-later';
import FeedText from '../feed-text';
import SignIn from '../sign-in-up-out/sign-in';
import SignUp from '../sign-in-up-out/sign-up';

const HomePage = withTitle(Home, 'Home'),
      ReadLaterPage = withTitle(ReadLater, 'Read later'),
      FeedTextPage = withTitle(FeedText, 'Feed text'),
      SignInPage = withTitle(SignIn, 'Sign In'),
      SignUpPage = withTitle(SignUp, 'Sign Up');

const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <HomePage />
    </Route>
    <Route path='/readlater'>
      <ReadLaterPage />
    </Route>
    <Route path='/text'>
      <FeedTextPage />
    </Route>
    <Route path='/signin'>
      <SignInPage />
    </Route>
    <Route path='/signup'>
      <SignUpPage />
    </Route>
    <Redirect to='/' />
  </Switch>
);

export default Routes;