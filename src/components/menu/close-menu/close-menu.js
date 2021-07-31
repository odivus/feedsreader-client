import React from 'react';
import '../../buttons-icons/buttons-icons.css';

const CloseMenu = (props) => {
  const { toggleMenuVisible } = props;
  return (
    <div
      className='icons-wrap icons-wrap-hover'
      onClick={toggleMenuVisible}>
      <div className='icons close'></div>
    </div>
  );
}

export default CloseMenu;