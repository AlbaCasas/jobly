import { StyledButton } from "./styled";

const Button = ({ type, disabled, children, ...props }) => {
  return (
    <StyledButton type={type} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
