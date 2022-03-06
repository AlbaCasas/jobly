import React from "react";
import { StyledCardButton } from "./styled";

const CardButton = ({ children, icon, isActive, ...props }) => {
  return (
    <StyledCardButton {...props} isActive={isActive}>
      {icon}
      {children}
    </StyledCardButton>
  );
};

export default CardButton;
