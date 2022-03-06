import { StyledText } from "./styled";

const Text = ({ variant, children, textAlign, ...props }) => {
  return (
    <StyledText textAlign={textAlign} variant={variant} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
