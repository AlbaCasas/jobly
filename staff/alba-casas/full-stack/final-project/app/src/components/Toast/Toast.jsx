import React, { useEffect, useState } from "react";
import { CloseIcon, ContainerIcon, Content, StyledToast } from "./styled";

const Toast = ({ closeToast, icon, variant, children, ...props }) => {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    setTimeout(() => closeToast(false), 4000);
  }, [closeToast]);

  return (
    <>
      {isShown && (
        <StyledToast {...props}>
          <Content variant={variant}>
            <ContainerIcon variant={variant}>{icon}</ContainerIcon>
            <CloseIcon onClick={closeToast} />
            {children}
          </Content>
        </StyledToast>
      )}
    </>
  );
};
export default Toast;
