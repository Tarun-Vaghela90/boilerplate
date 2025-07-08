import React from 'react';
import './CustomModal.css';

const CustomModal = ({ show, onClose, children, title, width = "400px", showClose = true }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal" style={{ width }}>
        {showClose && <button className="close-btn" onClick={onClose}>X</button>}
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
