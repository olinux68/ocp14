import React from 'react';
import PropTypes from 'prop-types';
import './CustomModal.css';

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return React.createElement(
    'div',
    { className: 'overlay' },
    React.createElement(
      'div',
      { className: 'modal' },
      React.createElement(
        'button',
        { className: 'close', onClick: onClose, 'aria-label': 'Fermer' },
        '\u00D7'
      ),
      children
    )
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomModal;
