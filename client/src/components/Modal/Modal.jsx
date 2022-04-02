import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { CloseIcon, StyledModal, Backdrop } from './styled';

const Modal = ({ children, onClose, ...props }) => {
  return (
    <Backdrop>
      <OutsideClickHandler onOutsideClick={onClose}>
        <StyledModal {...props}>
          <CloseIcon onClick={onClose} />
          {children}
        </StyledModal>
      </OutsideClickHandler>
    </Backdrop>
  );
};

export default Modal;
