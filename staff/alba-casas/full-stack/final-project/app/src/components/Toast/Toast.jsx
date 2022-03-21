import React from "react";
import { CloseIcon, ContainerIcon, Content, StyledToast } from "./styled";

const Toast = ({ icon, variant, children, ...props }) => {
  return (
    <StyledToast {...props}>
      <Content variant={variant}>
        <ContainerIcon variant={variant}>{icon}</ContainerIcon>
        <CloseIcon />
        hola
      </Content>
    </StyledToast>
  );
};

export default Toast;
