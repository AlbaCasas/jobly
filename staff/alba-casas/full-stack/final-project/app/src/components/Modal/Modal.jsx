import React from "react";
import { StyledModal, View } from "./styled";

const Modal = ({ children, ...props }) => {
  return (
    <View>
      <StyledModal {...props}>{children}</StyledModal>
    </View>
  );
};

export default Modal;
