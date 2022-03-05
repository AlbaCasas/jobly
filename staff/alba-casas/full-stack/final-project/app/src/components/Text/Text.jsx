import { StyledText } from "./styled";

const Text = ({ variant, children, textAlign }) => {
  return (
    <StyledText textAlign={textAlign} variant={variant}>
      {children}
    </StyledText>
  );
};

export default Text;
