import React from 'react';
import * as St from './modal.styled';

const Modal = ({ onClose, children }) => {
  return (
    <St.Container onClick={onClose}>
      <St.Modal onClick={(e) => e.stopPropagation()}>
        {children}
        <St.ModalButton onClick={onClose}>Close</St.ModalButton>
      </St.Modal>
    </St.Container>
  );
};

export default Modal;
