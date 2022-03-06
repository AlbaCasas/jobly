import { StyledText } from "./styled";

const Text = ({ color, variant, children, textAlign, ...props }) => {
  return (
    <StyledText
      color={color}
      textAlign={textAlign}
      variant={variant}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
