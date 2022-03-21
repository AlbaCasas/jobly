import React, { useEffect, useState } from "react";
import { CloseIcon, ContainerIcon, Content, StyledToast } from "./styled";

const Toast = ({
  closeErrorToast,
  closeToast,
  icon,
  variant,
  children,
  ...props
}) => {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => setIsShown(false), 3000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <>
      {isShown && (
        <StyledToast {...props}>
          <Content variant={variant}>
            <ContainerIcon variant={variant}>{icon}</ContainerIcon>
            <CloseIcon onClick={closeToast || closeErrorToast} />
            {children}
          </Content>
        </StyledToast>
      )}
    </>
  );
};
export default Toast;
