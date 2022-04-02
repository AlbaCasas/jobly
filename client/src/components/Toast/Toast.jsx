import React, { useEffect } from 'react';
import { CloseIcon, ContainerIcon, Content, StyledToast } from './styled';

const Toast = ({ closeToast, icon, variant, children, ...props }) => {
  useEffect(() => {
    setTimeout(() => closeToast(), 4000);
  }, [closeToast]);

  return (
    <StyledToast {...props}>
      <Content variant={variant}>
        <ContainerIcon variant={variant}>{icon}</ContainerIcon>
        <CloseIcon onClick={closeToast} />
        {children}
      </Content>
    </StyledToast>
  );
};
export default Toast;
