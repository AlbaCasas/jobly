import { StyledButton } from "./styled";

const Button = ({ children, className }) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};

export default Button;
