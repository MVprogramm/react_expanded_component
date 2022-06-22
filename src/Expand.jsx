import React from 'react';

const Expand = ({ isExpand, children, title, onClose }) => {
  let expandContent = null;
  let arrowDirection = "▼";
    if (isExpand) {
      expandContent = children;
      arrowDirection = "▲";
    }
    

  return (
    <div className="expand border">
    <div className="expand__header">
      <span className="expand__title">{title}</span>
      <button 
        className="expand__toggle-btn"
        onClick={onClose}
      >
        {arrowDirection}
      </button>
    </div>
    <div className="expand__content">
      {expandContent}
    </div>
  </div>
  );
}

export default Expand;