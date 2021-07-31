import React from 'react';
import './error.css';

const Error = () => {
  return (
    <div className='error-message'>
      <p className='error-message__text'>
        We are so sorry, some error occurred. Highly likely it's russian hackers. Please try again later.
      </p>
      <div className='error-message__img'></div>
    </div>
  )
}

export default Error;
