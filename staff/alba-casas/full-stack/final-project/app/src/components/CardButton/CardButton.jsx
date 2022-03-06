import React from "react";
import { StyledCardButton, StyledText } from "./styled";

const CardButton = ({ children, icon, isActive, ...props }) => {
  return (
    <StyledCardButton {...props} isActive={isActive}>
      {icon}
      <StyledText>{children}</StyledText>
    </StyledCardButton>
  );
};

export default CardButton;
