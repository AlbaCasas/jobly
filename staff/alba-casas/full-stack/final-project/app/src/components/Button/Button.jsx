import { StyledButton } from "./styled";

const Button = ({ disabled, children, ...props }) => {
  return (
    <StyledButton disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
