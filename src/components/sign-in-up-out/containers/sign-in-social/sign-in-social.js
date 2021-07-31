import React from 'react';
import { classNameSocial } from '../../class-names';
import Button from '../../../ui/button';

const SignWithSocial = (props) => {
  const { action, socialName, text } = props;
  return (
    <Button
      className={classNameSocial(socialName)}
      type='button'
      onClick={action}>
      <div className='button-social-wrap'>
        <div className={`button-social-wrap__icon ${socialName}`}></div>
        <div>{text}</div>
      </div>
    </Button>
  );
}

export default SignWithSocial;