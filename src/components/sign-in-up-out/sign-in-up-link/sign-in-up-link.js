import React from 'react';
import { Link } from 'react-router-dom';

const SignInUpLink = ({ page, text, linkText }) => (
  <div className='form-items__link'>
    {text} 
    <Link to={page}>{linkText}</Link>
  </div>
);

export default SignInUpLink;