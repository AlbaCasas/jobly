import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width || "100%"};
  gap: ${({ gap }) => gap};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin: ${({ margin }) => margin};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export default Box;
