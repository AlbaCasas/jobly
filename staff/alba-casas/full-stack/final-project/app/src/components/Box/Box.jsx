import { StyledBox } from "./styled";

const Box = ({
  flexDirection,
  alignItems,
  justifyContent,
  width,
  gap,
  children,
}) => {
  return (
    <StyledBox
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      width={width}
      gap={gap}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
