import React from 'react';

import Button from '../../ui/button';
import Input from '../../ui/input';
import ErrorMessage from '../error-message';
import SignInUpLink from '../sign-in-up-link';
import * as ROUTES from '../../../constants/routes';
import {withTheme} from '../../theme';

import '../sign-in-up-out.css';
import {classNameFormItems} from '../class-names';

const FormText = () => (
  <div className='form__text'>or enter email and password</div>
);

const FormItems = (props) => {
  const { 
    isInvalidPassword,
    signWithGoogle,
    signWithFacebook,
    signWithGithub,
    isInvalidEmail,
    onSubmit,
    onChange,
    password,
    email,
    theme,
    error, 
    type,
  } = props;

  let buttonText,
      signInText,
      formText,
      linkText,
      page;

  const isInvalid = (!isInvalidEmail || !isInvalidPassword) ? true : false;

  if (type === 'signIn') {
    buttonText = 'Sign In';
    formText = <FormText />;
    signInText = "Don't have an account? ";
    linkText = 'Sign Up'
    page = ROUTES.SIGN_UP;
    
  } else {
    buttonText = 'Sign Up';
    formText = null;
    signInText = 'I have an account ';
    linkText = 'Sign In'
    page = ROUTES.SIGN_IN;
  }

  return (
    <div className={classNameFormItems(theme)}>
      <div className='logo-wrap'>
        <div className='icons logo-sign-page'></div>
      </div>
      <form onSubmit={onSubmit} className='form-items form'>
        {signWithGithub}
        {signWithGoogle}
        {signWithFacebook}
        {formText}
        <Input
          className='input input_theme_light'
          name='email'
          value={email}
          onChange={onChange}
          type='email'
          placeholder='Email'
        />
        <Input
          className='input input_theme_light'
          name='password'
          value={password}
          onChange={onChange}
          type='password'
          placeholder='Password'
        />

        <Button
          className='button button_theme_light'
          type='submit'
          disabled={isInvalid}>
        {buttonText}
        </Button>
        {error && <ErrorMessage error={error} />}
      </form>

      <SignInUpLink
        page={page}
        text={signInText}
        linkText={linkText} />
    </div>
  );
}

export default withTheme(FormItems);