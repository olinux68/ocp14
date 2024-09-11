
import React from 'react';
import './CustomModal.css';

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return React.createElement(
    'div',
    { className: 'overlayStyle' },
    React.createElement(
      'div',
      { className: 'modalStyle' },
      React.createElement(
        'button',
        { className: 'close', onClick: onClose },
        '×'
      ),
      children
    )
  );
};

export default CustomModal;
