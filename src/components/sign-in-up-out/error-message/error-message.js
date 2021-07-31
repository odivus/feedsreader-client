import React from 'react';
import Error from '../../buttons-icons/error';

const ErrorMessage = ({ error }) => (
  <div className='error-wrap'>
    <div className='error__icon'>
      <Error />
    </div>
    <div className='error__text'>
      {error.message}
    </div>
  </div>
);

export default ErrorMessage;