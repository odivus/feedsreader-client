import React from 'react';
import '../../buttons-icons/buttons-icons.css';

const CloseSettings = (props) =>  {
  const { closeContextMenu, closeEditSource, toggleSettingsVisible } = props;
  return (
    <div
      className='icons-wrap icons-wrap-hover'
      onClick={
        () => {
          toggleSettingsVisible();
          closeContextMenu();
          closeEditSource();
        }
      }>
      <div className='icons close'></div>
    </div>
  );
}

export default CloseSettings;