import React from 'react';
import './button.css';

const Button = (props) => {
  const { className, type, onClick, disabled, children } = props;
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >{children}</button>
  );
}

export default Button;