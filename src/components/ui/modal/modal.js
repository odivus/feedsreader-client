import React from 'react';
import './modal.css';

const Modal = ({ children }) => (
  <div className='fg-row'>
    <div className='fg-sm-12 modal-wrap' id='modal-wrap'>
      {children}
    </div>
  </div>
);

export default Modal;