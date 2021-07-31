import React from 'react';
import './input.css';

const Input = React.forwardRef((props, ref) => {
  const { className, name, value, type, placeholder, onChange } = props;
  return (
    <input
      ref={ref}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      autoFocus>
    </input>
  );
});

export default Input;
