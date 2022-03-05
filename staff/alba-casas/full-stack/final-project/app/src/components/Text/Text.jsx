import { StyledText } from "./styled";

const Text = ({ variant, children, textAlign, className }) => {
  return (
    <StyledText textAlign={textAlign} variant={variant} className={className}>
      {children}
    </StyledText>
  );
};

export default Text;
