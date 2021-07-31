import React from 'react';

function Message(props) {
  const { header, text } = props;

  return (
    <div className='message center-vertical'>
      {header && <h3>{header}</h3>}
      {text && <p>{text}</p>}
    </div>
  );
}

export default Message;
