import React from 'react';
import Modal from "react-modal"

const ReactModalAdapter = ({ className, ...props }) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <Modal
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    />
  )
};

/* This just wraps react-modal to allow styling the modal overlay, you shouldn't have the need to change this at all */
export default ReactModalAdapter;
